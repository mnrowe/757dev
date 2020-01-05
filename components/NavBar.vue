// TODO: Change nav-item hover color to bootstrap success

<template>
  <div>
    <b-container>
      <b-navbar fixed="top" toggleable="lg" type="dark">
        <b-navbar-brand id="navbar-brand" to="/">
          <img fluid src="~assets/757dev.png" />
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item class="nav-item" to="Meetups">Meetups</b-nav-item>
            <b-nav-item class="nav-item" to="About">About</b-nav-item>
            <b-nav-item class="nav-item">Code Of Conduct</b-nav-item>
            <b-nav-item class="nav-item" to="Faq">FAQ</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </b-container>
  </div>
</template>

<style scoped>
img {
  height: 50px;
  width: 50px;
}

.nav-item >>> a {
  font-size: 120%;
  font-weight: 400;
  letter-spacing: 1px;
  font-family: Montserrat;
  text-shadow: black 2px 5px;
}

/*
Override bootstrap rules to make navbar links color #fff
*/
.navbar-dark .navbar-nav .nav-link {
  color: #fff;
}
</style>
