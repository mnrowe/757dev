// TODO: Redundant amount of divs throughout pages

<template>
  <div class="test">
    <NavBar />
    <b-container></b-container>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar'

export default {
  components: {
    NavBar
  }
}
</script>

<style scoped>
.test {
  background-color: red;
}
</style>
