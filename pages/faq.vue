<!-- TODO: Fix redundant amount of divs -->
<template>
  <div class="test">
    <NavBar />
    <b-container>
      <h1 class="text-left">Frequently Asked Questions</h1>
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

h1 {
  padding-top: 200px;
  text-shadow: 2px 5px black;
}

.list-group {
  padding-top: 10px;
  padding-bottom: 200px;
}
</style>
