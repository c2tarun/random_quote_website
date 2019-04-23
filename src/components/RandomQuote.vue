<template>
  <div>
    <div v-if="signedIn">
      <h1>{{ quote }}</h1>
      <h3>{{ by }}</h3>
      <button class="button" v-on:click="nextQuote">More</button>
    </div>
    <div v-else>
      <MissingAuth/>
    </div>
  </div>
</template>

<script>
import MissingAuth from "./MissingAuth.vue";
import aws4 from "aws4";
import axios from "axios";
export default {
  name: "RandomQuote",
  data() {
    return {
      quote: "This will have real quote",
      by: "Author"
    };
  },
  components: {
    MissingAuth
  },
  computed: {
    signedIn() {
      return this.$store.state.signedIn;
    },
    accessKey() {
      return this.$store.state.userCredentials.accessKeyId;
    },
    secretKey() {
      return this.$store.state.userCredentials.secretAccessKey;
    },
    sessionToken() {
      return this.$store.state.userCredentials.sessionToken;
    }
  },
  methods: {
    nextQuote() {
      var apigClient = apigClientFactory.newClient({
            invokeUrl: this.$apiEndpoint,
            accessKey: this.accessKey,
            secretKey: this.secretKey,
            sessionToken: this.sessionToken,
            region: 'us-west-2'
        });
        apigClient.quoteGet()
        .then(response => {
          this.quote = response.data.quote,
          this.by = response.data.by
        });
    },
  },
  created() {
    this.nextQuote();
  }
};
</script>

<style scoped>
.button {
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>
