<template>
  <div>
    <p id="error" v-if="errorMsg">{{ errorMsg }}</p>
  </div>
</template>

<script>
export default {
  name: "MissingAuth",
  data() {
    return {
      errorMsg: null
    };
  },
  created() {
    if (!this.$store.state.user) {
      this.errorMsg =
        "Authentication needed, please authenticate from Home page.";
    } else {
        this.errorMsg = null;
    }
  }
};
</script>

<style scoped>
#error {
  color: red;
}
</style>