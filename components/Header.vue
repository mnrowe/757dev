// TODO: make meetup logo responsive

<template>
  <header>
    <b-container>
      <div class="intro-text">
        <div typ="dark" class="intro-heading">
          <img src="~assets/757-big.png" />
          <p>Home of the Hampton Roads <em>Developer</em> community</p>
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
      <!-- change layout of carousel -->
      <b-carousel
        id="carousel-1"
        v-model="slide"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="box-shadow: var(--catalina-blue) 4px 4px;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <b-carousel-slide
          img-src="https://picsum.photos/1024/480/?image=52"
        ></b-carousel-slide>
        <b-carousel-slide
          img-src="https://picsum.photos/1024/480/?image=54"
        ></b-carousel-slide>
        <b-carousel-slide
          img-src="https://picsum.photos/1024/480/?image=58"
        ></b-carousel-slide>
      </b-carousel>
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
  padding-top: 150px;
  padding-bottom: 20px;
}

.intro-text p {
  padding-top: 20px;
  font-family: 'Montseratt';
  color: var(--loafer);
}
</style>
