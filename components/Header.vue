<template>
  <header>
    <b-container>
      <div class="intro-text">
        <div typ="dark" class="intro-heading">
          Join The Community!
        </div>
        <b-button
          v-b-tooltip.hover
          title="Join Slack"
          href="https://www.757dev.org/"
          target="_blank"
          size="lg"
          class="text-uppercase jn-button"
          variant="success"
          >Join now</b-button
        >
      </div>
    </b-container>
  </header>
</template>

<style scoped>
header {
  text-align: center;
  height: 100vh;
  background-image: url('~assets/meetup.jpg');
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: 50%;
  background-size: cover;
  opacity: 0.9;
}

.intro-heading {
  font-size: 75px;
  font-weight: 700;
  line-height: 75px;
  margin-bottom: 50px;
  color: #fff;
  text-shadow: black 2px 5px;
}

.jn-button {
  color: #fff;
}

.intro-text {
  padding-top: 300px;
  padding-bottom: 200px;
}
</style>
