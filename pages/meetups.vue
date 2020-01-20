<!-- TODO: Fix redundant amount of divs -->

<template>
  <div class="meetups">
    <NavBar />
    <b-container>
      <b-list-group>
        <GroupItem :meetup="colorCoded" />
        <GroupItem :meetup="dockerHamptonRoads" />
        <GroupItem :meetup="norfolkGo" />
        <GroupItem :meetup="norfolkJS" />
        <GroupItem :meetup="kubernetes757" />
      </b-list-group>
    </b-container>
  </div>
</template>

<script>
// import axios from 'axios'
import NavBar from '~/components/NavBar'
import GroupItem from '~/components/GroupItem'

export default {
  components: {
    NavBar,
    GroupItem
  },
  // Middleware to pull data from meetup RSS feed. Not working yet.
  // middleware: 'events',
  data() {
    return {
      norfolkGo: {
        name: 'Norfok Go',
        location: 'Norfolk, VA',
        logo: 'go.jpeg',
        meetUpUrl: 'https://www.meetup.com/Norfolk-Go-Meetup-Group/',
        about:
          'This is a group for anyone interested in the Go programming language. Not just Go but anything that has to do with Go (i.e. Kubernetes, Docker, Terraform, etc). All skill levels are welcome.',
        codeOfConduct:
          'This community abides by the Go Community Code of Conduct (https://golang.org/conduct).',
        organizers: ['Troy Connor', 'Kenia']
      },
      colorCoded: {
        name: '757 Color Coded',
        location: 'Norfolk, VA',
        logo: '757cc.jpeg',
        meetUpUrl: 'https://www.meetup.com/757ColorCoded/',
        about: `Get together with people of color in technology to share your experiences in the industry, learn about new tech, and work towards enriching the local community.`,
        organizers: {
          mainOrganizers: 'Guilermo A. Fisher',
          altOrganizers: ['Lisa', 'Chazona', 'Troy Connor', 'Tonia Seenauth']
        }
      },
      norfolkJS: {
        name: 'Norfolk JS',
        location: 'Norfolk, VA',
        logo: 'norfolkjs.png',
        meetUpUrl: 'https://www.meetup.com/NorfolkJS/',
        about:
          'Join us in talking about, brainstorming, and building Javascript tools and applications. We typically have one lecture meetup per month or a social "Beer.js" event. We also have several other more specific meetups for robotics, front-end development, food/social, etc.',
        organizers: {
          mainOrganizers: 'Travis Webb',
          altOrganizers: [
            'Austin Gaylon',
            'Paul Chin Jr.',
            'Linda Nichols',
            'Troy Connor',
            'Blaine Price',
            'Brandon Flade'
          ],
          eventOrganizers: 'Kenia'
        }
      },
      kubernetes757: {
        name: 'Kubernetes 757',
        location: 'Virginia Beach, VA',
        logo: 'kub757.jpeg',
        meetUpUrl: 'https://www.meetup.com/kubernetes-757/',
        about: `Kubernetes 757 will cover CNCF topics to include, Kubernetes, containers (aka docker), DevOps, DevSecOps, CI/CD, and anything related to creating or maintaining cloud-native applications.`,
        organizers: {
          mainOrganizers: 'Matthew Bach',
          altOrganizers: 'Brandon Gulla',
          eventOrganizers: ['Bret Fisher', 'Noel Lucas']
        }
      },
      dockerHamptonRoads: {
        name: 'Docker Hampton Roads',
        location: 'Virginia Beach, VA',
        logo: 'dckrhr.jpeg',
        meetUpUrl: 'https://www.meetup.com/Docker-Hampton-Roads/',
        about: `Learn, Collaborate & Dockerize! Meet other developers and ops engineers in your community that are using and learning about Docker. Docker is an open platform that helps you build, ship and run applications anytime and anywhere. Developers use Docker to modify code and to streamline application development, while operations gain support to quickly and flexibly respond to their changing needs. Docker ensures agility, portability and control for all your distributed apps.

Docker is also the main sponsor of the Moby Project, an open framework to assemble specialized container systems without reinventing the wheel.`,
        organizers: {
          mainOrganizers: 'Moby Dock',
          altOrganizers: 'Bret Fisher',
          assistantOrganizers: 'Noel Lucas'
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

.list-group-item {
  background-color: var(--loafer);
  margin-top: 10px;
  color: var(--catalina-blue);
  box-shadow: var(--catalina-blue) 4px 4px;
}
</style>
