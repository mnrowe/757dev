<!-- TODO: Fix redundant amount of divs -->
<template>
  <div class="test">
    <NavBar />
    <b-container>
      <h1 class="text-left">Frequently Asked Questions</h1>
      <div role="tablist">
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button v-b-toggle.accordion-1 block href="#" variant="success"
              >Accordion 1</b-button
            >
          </b-card-header>
          <b-collapse
            id="accordion-1"
            visible
            accordion="my-accordion"
            role="tabpanel"
          >
            <b-card-body>
              <b-card-text
                >I start opened because <code>visible</code> is
                <code>true</code></b-card-text
              >
              <b-card-text>{{ text }}</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button v-b-toggle.accordion-2 block href="#" variant="success"
              >Accordion 2</b-button
            >
          </b-card-header>
          <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>{{ text }}</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button v-b-toggle.accordion-3 block href="#" variant="success"
              >Accordion 3</b-button
            >
          </b-card-header>
          <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>{{ text }}</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
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
