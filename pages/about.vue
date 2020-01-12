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
  background-color: var(--pastel-green);
}
</style>
