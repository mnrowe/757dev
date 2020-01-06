<template>
  <div class="test">
    <NavBar />
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
  height: 100vh;
  background-color: var(--dark);
}
</style>
