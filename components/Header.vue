<template>
  <header>
    <b-container>
      <div class="intro-text">
        <div typ="dark" class="intro-heading">
          Welcome to the Community
        </div>
        <b-button
          v-b-tooltip.hover
          title="Join Slack"
          href="https://www.757dev.org/"
          target="_blank"
          size="lg"
          class="text-uppercase jn-button"
          >Join slack</b-button
        >
      </div>
    </b-container>
  </header>
</template>

<style scoped>
header {
  text-align: center;
  height: 100vh;
  background-color: var(--pastel-green);
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
  color: var(--loafer);
  text-shadow: var(--catalina-blue) 2px 4px;
}

.jn-button {
  color: var(--loafer);
  background-color: var(--catalina-blue);
  font-family: Montseratt;
}

.intro-text {
  padding-top: 300px;
  padding-bottom: 200px;
}
</style>
