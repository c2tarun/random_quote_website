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
    }
  },
  methods: {
    nextQuote() {
      this.quote = 'Loading...';
      this.by = '';
      const accessKeyId = this.$store.state.userCredentials.accessKeyId;
      const secretAccessKey = this.$store.state.userCredentials.secretAccessKey;
      const sessionToken = this.$store.state.userCredentials.sessionToken;

      var request = {
        method: "GET",
        url: this.$apiEndpoint
      };

      let signedRequest = aws4.sign(request, {
        accessKeyId,
        secretAccessKey,
        sessionToken
      });

      delete signedRequest.headers["Host"];

      axios(signedRequest)
        .then(response => {
            this.quote = response.data.quote;
            this.by = response.data.by;
        })
        .catch(err => console.log("failure: ", err));
    }
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
