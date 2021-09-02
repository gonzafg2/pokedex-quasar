<template v-if="poke">
  <section class="poke-card">
    <p class="poke-card__name">{{ poke.name }}</p>

    <img
      @click="toggleFav(poke.id)"
      loading="lazy"
      width="44"
      height="44"
      :src="
        poke.fav
          ? require('assets/img/fav.png')
          : require('assets/img/no-fav.png')
      "
      :alt="poke.fav ? 'Favorite icon' : 'No favorite icon'"
    />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapActions } from "vuex";
import { DataStateInterface } from "../../store/data/state";

export default defineComponent({
  name: "PokemonList",
  props: {
    pokemon: {
      type: Object as () => DataStateInterface,
    },
  },
  computed: {
    poke() {
      return this.pokemon;
    },
  },
  methods: {
    ...mapActions("data", ["toggleFav"]),
  },
});
</script>

<style lang="scss" scoped>
.poke-card {
  background-color: #fff;
  border-radius: 5px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 100%;
  padding: 0 10px 0 20px;
  &__name {
    text-transform: capitalize;
    margin-bottom: 0;
    font-weight: 500;
    font-size: 22px;
    line-height: 26px;
    color: #353535;
  }
}
</style>
