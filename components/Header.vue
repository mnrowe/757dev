// TODO: make image smaller

<template>
  <header>
    <b-container>
      <div class="intro-text">
        <div typ="dark" class="intro-heading">
          <img src="~assets/757-big.png" />
          <em><p>Home of the Hampton Roads Developer community</p></em>
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
  background-color: var(--pastel-green);
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: 50%;
  background-size: cover;
  opacity: 0.9;
}

.intro-heading {
  font-size: 20px;
  margin-bottom: 30px;
  color: var(--loafer);
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

.intro-text p {
  padding-top: 20px;
  font-family: 'Montseratt';
}
</style>
