<template>
  <div class="code-of-conduct">
    <NavBar />
    <b-container fluid>
      <b-card class="mb-2">
        <b-card-text>
          All members of our Slack group are required to agree with the
          following code of conduct. Organizers will enforce this code
          throughout all channels. We are expecting cooperation from all
          participants to help ensuring a safe environment for everybody. tl;dr:
          Be excellent with each other.
        </b-card-text>
        <b-card-text>
          Harassment includes offensive comments related to gender, gender
          identity and expression, age, sexual orientation, disability, physical
          appearance, body size, race, religion, sexual images, deliberate
          intimidation, stalking, sustained disruption of channels or other
          mediums, and unwelcome sexual attention. Participants asked to stop
          any harassing behavior are expected to comply immediately.
        </b-card-text>
        <b-card-text>
          Sponsors are also subject to the anti-harassment policy. In
          particular, sponsors should not use sexualized images, activities, or
          other material. Slack staff (including volunteers) should not use
          sexualized content or otherwise create a sexualized environment. If a
          participant engages in harassing behavior, the Slack group organizers
          may take any action they deem appropriate, including warning the
          offender or expulsion from the Slack group.
        </b-card-text>
        <b-card-text>
          If you are being harassed, notice that someone else is being harassed,
          or have any other concerns, please contact a member of the Slack group
          staff immediately. Slack group staff can be identified through the
          Team Directory. Slack group staff will be happy to help participants
          contact local law enforcement or otherwise assist those experiencing
          harassment to feel safe for the duration of their time in our Slack
          group. We value your contribution.
        </b-card-text>
      </b-card>
    </b-container>
    <Footer />
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
h1 {
  color: var(--catalina-blue);
  font-weight: 900;
  text-decoration: underline;
}

.code-of-conduct {
  padding-top: 150px;
}

p {
  color: var(--catalina-blue);
  font-size: 150%;
}
.mb-2 {
  background-color: var(--loafer);
  box-shadow: 4px 4px var(--catalina-blue);
}

.card-body {
  margin: 20px 0;
}
</style>
