<!-- TODO: Fix redudant amount of divs -->

<template>
  <div class="test">
    <NavBar />
    <b-container>
      <p></p>
    </b-container>
  </div>
</template>

<script>
// import axios from 'axios'
import NavBar from '~/components/NavBar'

// const URL = 'https://api.meetup.com'

export default {
  components: {
    NavBar
  }

  // Waiting on Oauth2 Conformation
  /* fetch({ store, params }) {
    return axios.get(`${URL}/find/upcoming_events`).then((res) => {
      console.log(store)
    })
  } */
}
</script>

<style scoped>
.test {
  height: 100vh;
  background-color: var(--dark);
}
</style>
