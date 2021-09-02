<template>
  <div class="list-layout">
    <q-layout view="lHh lpr lFf">
      <q-page-container>
        <SearchList />
        <router-view />
        <!-- Poke Dialog with info -->
        <CardPoke />
      </q-page-container>
      <Footer />
    </q-layout>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Footer from "src/components/list/Footer.vue";
import SearchList from "src/components/list/Search.vue";
import CardPoke from "src/components/list/CardPoke.vue";

export default defineComponent({
  name: "MainLayout",
  components: {
    CardPoke,
    Footer,
    SearchList,
  },
});
</script>

<style lang="scss" scoped>
.list-layout {
  background-color: #f9f9f9;
  padding: 35px 30px;
}
</style>
