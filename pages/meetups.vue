<!-- TODO: Fix redundant amount of divs -->

<template>
  <div class="test">
    <NavBar />
    <b-container>
      <b-list-group>
        <b-list-group-item href="#" class="flex-column align-items-start">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">List group item heading</h5>
            <small>3 days ago</small>
          </div>

          <p class="mb-1">
            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam
            eget risus varius blandit.
          </p>

          <small>Donec id elit non mi porta.</small>
        </b-list-group-item>
        <b-list-group-item href="#" class="flex-column align-items-start">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">List group item heading</h5>
            <small>3 days ago</small>
          </div>

          <p class="mb-1">
            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam
            eget risus varius blandit.
          </p>

          <small>Donec id elit non mi porta.</small>
        </b-list-group-item>
        <b-list-group-item href="#" class="flex-column align-items-start">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">List group item heading</h5>
            <small>3 days ago</small>
          </div>

          <p class="mb-1">
            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam
            eget risus varius blandit.
          </p>

          <small>Donec id elit non mi porta.</small>
        </b-list-group-item>
      </b-list-group>
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

  // Waiting on Oauth2 confromation from meetup
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
  background-color: var(--pastel-green);
}

.list-group {
  padding-top: 300px;
  padding-bottom: 200px;
}
</style>
