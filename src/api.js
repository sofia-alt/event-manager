import events from './static/events.json';
import categories from './static/categories.json';
import participants from './static/participants.json';

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

function getEventById(id) {
  let event = events.find(item => item.ID == id)
  if (event) {
    return Promise
      .resolve(deserialize(event))
  } else {
    return Promise.reject();
  }
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
    getById: getEventById
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