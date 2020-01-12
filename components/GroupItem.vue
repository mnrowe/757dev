<template>
  <b-list-group-item class="flex-column align-items-start">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">{{ meetup.name }}</h5>
    </div>

    <p class="mb-1">
      {{ meetup.about }}
    </p>

    <small>{{ meetup.location }}</small>
  </b-list-group-item>
</template>

<script>
export default {
  props: {
    meetup: Object
  }
}
</script>

<style scoped></style>
