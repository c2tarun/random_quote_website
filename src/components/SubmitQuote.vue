<template>
  <div>
    <div v-if="signedIn">
      <h1>Note implemented yet!!!</h1>
    </div>
    <div v-else>
      <MissingAuth/>
    </div>
  </div>
</template>


<script>
import MissingAuth from "./MissingAuth.vue";
export default {
    name: 'SubmitQuote',
    components: {
        MissingAuth
    },
    computed: {
        signedIn() {
            return this.$store.state.signedIn;
        }
    }
}
</script>

<style>

</style>
