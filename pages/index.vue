<template>
  <div>
    <NavBar />
    <Header />
  </div>
</template>

<script>
import NavBar from '~/components/NavBar'
import Header from '~/components/Header'

export default {
  head() {
    return {
      link: [
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css?family=Montserrat|Roboto+Slab&display=swaphttps://fonts.googleapis.com/css?family=Roboto+Slab&display=swap'
        }
      ]
    }
  },
  components: {
    NavBar,
    Header
  }
}
</script>
