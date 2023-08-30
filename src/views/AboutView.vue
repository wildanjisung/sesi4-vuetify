<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>angka dari store: {{ angakaDariStore }}</h1>
    <button @click="changeAngka">ganti angka</button>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  methods: {
    changeAngka() {
      // this.$store.commit("setAngka", 5)
      this.$store.dispatch("changeAngkaValue", 8)
    }
  },
  computed: {
    angakaDariStore() {
      console.log("test1")
      return this.$store.state.angka;
    }
  }
}
</script>
