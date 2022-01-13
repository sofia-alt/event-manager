import events from './static/events.json';

function getEvents(search, from, till, offset) {
  return Promise
    .resolve(events.map(x => ({
        ...x
  })))
}

function getEventById (id) {
  return Promise 
    .resolve(events.find(item => item.ID == id))
}

export default {
  events: {
    fetch: getEvents,
    getById: getEventById
  }
}