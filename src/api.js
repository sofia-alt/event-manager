import events from './static/events.json';

const PAGE_SIZE = 15;

function getEvents(search, from, till, offset) {
  console.log('getEvents')
  return Promise
    .resolve(events
      .slice(offset, PAGE_SIZE)
      .map(x => {
      const from = new Date(x.From);
      const till = new Date(x.Till);
      const date = new Date(from.getTime())
        .setHours(0, 0, 0, 0);

      return {
        ...x,
        From: from,
        Till: till,
        Date: date
      };
    }))
}


function getEventById (id) {
  let event = events.find(item => item.ID == id)
  event.From = new Date(event.From)
  event.Till = new Date(event.Till)
  return Promise
    .resolve(event)

}

export default {
  events: {
    fetch: getEvents,
    getById: getEventById
  }
}