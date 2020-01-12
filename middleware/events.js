// Pull data from RSS feed to avoid meetup API. It requires a meetup Pro subscription to use it.
// Not working yet
// https://github.com/norfolkjs/norfolkjs.github.io/blob/master/javascripts/events.js

// const MeetupEventProxyUrl =
//   'https://us-central1-linen-cargo-261219.cloudfunctions.net/meetup-proxy'

// export default async function() {
//   try {
//     const { items } = await getData(MeetupEventProxyUrl) // eslint-ignore
//     console.log(items)
//   } catch (err) {
//     console.error(err)
//   }
// }

// async function getData(url = '') {
//   const response = await fetch(url)
//   return response.json() // parses JSON response into native JavaScript objects
// }
