import mitt from "mitt";
import events from './static/events.json';
import categories from './static/categories.json';
import participants from './static/participants.json';

export class Operation {
  constructor() {
    this.emitter = mitt();
  }

  execute() { }

  on(event, action) {
    this.emitter.on(event, action);
    return this;
  }

  emit(event, ...data) {
    this.emitter.emit(event, ...data);
    return this;
  }
}

class HttpGet extends Operation {
  constructor(url) {
    super();
    this.url = url;
  }

  execute() {
    axios
      .get(this.url)
      .then(response => {
        this.emit('success', response.data)
      })
      .catch(error => {
        this.emit('error', error)
      })

  }
}

class GetEventOperation extends Operation {
  constructor(target) {
    super();
    this.target = target;
  }

  execute() {
    const event = events.find(item => item.ID == this.target);
    if (event) {
      this.emit('success', deserialize(event));
    } else {
      this.emit('error', 'not found');
    }
  }
}

const PAGE_SIZE = 6;

function deserialize(x) {
  const from = new Date(x.From);
  const till = new Date(x.Till);
  const date = new Date(new Date(from.getTime())
    .setHours(0, 0, 0, 0));

  return {
    ...x,
    From: from,
    Till: till,
    Date: date
  };
}

function getEvents(search, from, till, offset) {
  const chunk = events
    .slice(offset, offset + PAGE_SIZE)
    .map(deserialize);

  return Promise
    .resolve(chunk);
}

function getCategories() {
  if (categories) {
    return Promise
      .resolve(categories
        .map(x => {
          return {
            ...x
          }
        })
      )
  } else {
    return Promise.reject();
  }
}

function getParticipants() {
  if (participants) {
    return Promise
      .resolve(participants
        .map(x => {
          return {
            ...x
          }
        }))
  } else {
    return Promise.reject();
  }
}

function test() {
  this.loading = true;

  this.executor
    .on('success', response => {
      this.value = response.data;
      this.loading = false;
    })
    .on('error', error => {
      this.value = null;
      this.error = error;
      this.loading = false;
    })
    .execute();
}

export default {
  events: {
    fetch: getEvents,
    getById(id) {
      return new GetEventOperation(id)
    }
  },
  categories: {
    fetch: getCategories
  },
  participants: {
    fetch: getParticipants
  },
  test: {
    test: test
  }
}