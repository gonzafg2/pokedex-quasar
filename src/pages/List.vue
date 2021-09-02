<template>
  <q-page v-if="!loading" class="list">
    <PokemonList :pokemon="poke" v-for="(poke, i) in pokemonAll" :key="i" />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapMutations } from "vuex";
import PokemonList from "src/components/list/PokemonList.vue";

export default defineComponent({
  name: "List",
  components: {
    PokemonList,
  },
  computed: {
    ...mapState("general", ["loading"]),
    ...mapState("data", ["pokemonAll"]),
  },
  methods: {
    ...mapMutations("general", ["changeLoading"]),
    stopLoading() {
      this.changeLoading(false);
    },
  },
  mounted() {
    this.stopLoading();
  },
});
</script>

<style lang="scss" scoped>
// .list {
//   background-color: #f9f9f9;
// }
</style>
