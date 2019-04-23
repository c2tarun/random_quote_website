<template>
  <div>
    <h1>Cognito Demo</h1>
    <div>
      <amplify-authenticator></amplify-authenticator>
      <amplify-sign-out></amplify-sign-out>
    </div>
  </div>
</template>

<script>
import { Auth } from "aws-amplify";
import { components } from "aws-amplify-vue";
import { AmplifyEventBus } from "aws-amplify-vue";
export default {
  name: "Home",
  components: {
    components
  },
  methods: {
    async updateAuthState(info) {
      console.log("updating auth state");
      if (info === "signedIn") {
        // update details and sts to store
        const user = await Auth.currentAuthenticatedUser();
        const userCredentials = await Auth.currentUserCredentials();
        this.$store.state.signedIn = true;
        this.$store.state.user = user;
        this.$store.state.userCredentials = userCredentials;
      } else {
        this.$store.state.signedIn = false;
        this.$store.state.user = null;
        this.$store.state.userCredentials = null;
      }
    }
  },
  computed: {
    signedIn() {
      return this.$store.state.signedIn;
    }
  },
  created() {
    Auth.signOut();
    console.log("registering to event bus");
    AmplifyEventBus.$on("authState", info => {
      this.updateAuthState(info);
    });
  }
};
</script>

<style>
</style>
