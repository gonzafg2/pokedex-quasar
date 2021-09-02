<template>
  <q-page v-if="!loading">
    <template v-if="pokeInFav && pokeInFav.length">
      <PokemonList :pokemon="poke" v-for="(poke, i) in pokeInFav" :key="i" />
    </template>

    <template v-else>
      <EmptyList />
    </template>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapGetters, mapMutations } from "vuex";
import PokemonList from "src/components/list/PokemonList.vue";
import EmptyList from "src/components/list/EmptyList.vue";

export default defineComponent({
  name: "Favorites",
  components: {
    EmptyList,
    PokemonList,
  },
  computed: {
    ...mapState("general", ["loading"]),
    ...mapGetters("data", ["pokeInFav"]),
  },
  methods: {
    ...mapMutations("general", ["changeLoading"]),
  },
});
</script>
