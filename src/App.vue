<template>
  <router-view />
  <Loading v-if="loading" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Loading from "src/components/loading.vue";
import { mapState, mapActions } from "vuex";

export default defineComponent({
  name: "App",
  components: {
    Loading,
  },
  computed: {
    ...mapState("general", ["loading"]),
  },
  methods: {
    ...mapActions("data", ["getPokeData"]),
  },
  created () {
    this.getPokeData();
  },
});
</script>

<style lang="scss">
body {
  font-family: 'Lato', sans-serif;
}
</style>
