<template>
  <q-dialog v-model="pokeCard">
    <q-card class="my-card">
      <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />

      <q-card-section> </q-card-section>

      <q-card-section> </q-card-section>

      <q-separator />

      <q-card-actions align="right">
        <q-btn v-close-popup flat color="primary" label="Reserve" />
        <q-btn v-close-popup flat color="primary" round icon="event" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapGetters, mapMutations } from "vuex";

export default defineComponent({
  name: "CardPoke",
  computed: {
    ...mapState("general", ["pokeActive"]),
    pokeCard: {
      get() {
        return this.pokeActive;
      },
      set(val: any) {
        this.changePokeActive(val);
      },
    },
  },
  methods: {
    ...mapMutations("general", ["changePokeActive"]),
  },
});
</script>

<style lang="scss" scoped></style>
