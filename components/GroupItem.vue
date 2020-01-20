// TODO: fix image width and height

<template>
  <b-list-group-item
    :href="meetup.meetUpUrl"
    variant="dark"
    class="flex-column align-items-start"
  >
    <b-container>
      <b-row align-v="center">
        <b-col cols="10">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">{{ meetup.name }}</h5>
          </div>
          <p class="mb-1">
            {{ meetup.about }}
          </p>

          <small>{{ meetup.location }}</small>
        </b-col>
        <b-col>
          <b-img :src="`img/${meetup.logo}`" fluid rounded="circle"></b-img>
        </b-col>
      </b-row>
    </b-container>
  </b-list-group-item>
</template>

<script>
export default {
  props: {
    meetup: Object
  }
}
</script>

<style scoped>
.img-fluid {
  width: 118px;
  height: 118px;
}
</style>
