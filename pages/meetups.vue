<!-- TODO: Fix redundant amount of divs -->

<template>
  <div class="meetups">
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

// Hardcode events for now meetup API requires active pro subscription.
// const events = {
//   norfolkGo: {
//     name: 'Norfolk Go',
//     description:
//       'This is a group for anyone interested in the Go programming language. Not just Go but anything that has to do with Go (i.e. Kubernetes, Docker, Terraform, etc). All skill levels are welcome.',

//   }
// }

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
.list-group {
  padding-top: 300px;
  padding-bottom: 200px;
}
</style>
