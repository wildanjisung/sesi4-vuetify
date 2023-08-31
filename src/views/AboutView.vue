<template>
  <div class="about">
    <h1>Daftar nama nama Pokemon</h1>
    
    <ul>
      <li v-for="item in listDariStore" :key="item.name">
        {{ item.name }}
      </li>
    </ul>

    <button @click="getPokemon">get Pokemon</button>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  methods: {
    getPokemon() {
      this.$store.dispatch("fetchList")
    }
  },
  computed: {
    listDariStore() {
      return this.$store.state.list;
    }
  },
  mounted() {
    this.getPokemon();
  }
}
</script>
