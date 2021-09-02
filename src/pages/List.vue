<template>
  <q-page v-if="!loading">
    <template v-if="pokemonAll && pokemonAll.length">
      <PokemonList :pokemon="poke" v-for="(poke, i) in pokemonAll" :key="i" />
    </template>

    <template v-else>
      <EmptyList />
    </template>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapMutations } from "vuex";
import PokemonList from "src/components/list/PokemonList.vue";
import EmptyList from "src/components/list/EmptyList.vue";

export default defineComponent({
  name: "List",
  components: {
    EmptyList,
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
    setTimeout(() => {
      this.stopLoading();
    }, 1000);
  },
});
</script>
