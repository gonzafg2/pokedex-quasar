<template>
  <router-view />
  <Loading v-if="loading" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Loading from "src/components/loading.vue";
import { mapState } from "vuex";

export default defineComponent({
  name: "App",
  components: {
    Loading,
  },
  computed: {
    ...mapState("general", ["loading"]),
  },
});
</script>

<style lang="scss">
body {
  font-family: Lato;
}
</style>
