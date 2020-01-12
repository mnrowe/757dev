<!-- TODO: Fix redundant amount of divs -->

<template>
  <div class="meetups">
    <NavBar />
    <b-container>
      <b-list-group>
        <b-list-group-item
          :href="norfolkGo.url"
          class="flex-column align-items-start"
        >
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">{{ norfolkGo.location }}</h5>
            <small>3 days ago</small>
            <img :src="norfolkGo.logo" />
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
  },
  data() {
    return {
      norfolkGo: {
        location: 'Norfolk, VA',
        logo: '~assets/go.jpeg',
        url: 'https://www.meetup.com/Norfolk-Go-Meetup-Group/',
        about:
          'This is a group for anyone interested in the Go programming language. Not just Go but anything that has to do with Go (i.e. Kubernetes, Docker, Terraform, etc). All skill levels are welcome.',
        codeOfConduct:
          'This community abides by the Go Community Code of Conduct (https://golang.org/conduct).',
        organizers: ['Troy Connor', 'Kenia']
      },
      norfolkJS: {
        location: 'Norfolk, VA',
        logo: '~assets/norfolkjs.png',
        url: 'https://www.meetup.com/NorfolkJS/',
        about:
          'Join us in talking about, brainstorming, and building Javascript tools and applications. We typically have one lecture meetup per month or a social "Beer.js" event. We also have several other more specific meetups for robotics, front-end development, food/social, etc. See more information at norfolkjs.org or github.com/norfolkjs.',
        organizers: {
          organizers: 'Travis Webb',
          cOrganizers: [
            'Austin Gaylon',
            'Paul Chin Jr.',
            'Linda Nichols',
            'Troy Connor',
            'Blaine Price',
            'Brandon Flade'
          ],
          eventOrganizers: 'Kenia'
        }
      }
    }
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
  padding-top: 150px;
  padding-bottom: 200px;
}

img {
  width: 100;
  height: 100px;
}

.list-group-item {
  background-color: var(--algae-green);
  color: var(--loafer);
  margin-top: 20px;
  box-shadow: var(--catalina-blue) 2px 2px;
}
</style>
