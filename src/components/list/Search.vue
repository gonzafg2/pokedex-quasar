<template>
  <q-input class="search-list" borderless v-model="search" placeholder="Search">
    <template v-slot:prepend>
      <q-icon name="search" class="search-list__icon" />
    </template>
  </q-input>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapMutations } from "vuex";

export default defineComponent({
  name: "SearchList",
  computed: {
    ...mapState("data", ["searchWord"]),
    search: {
      get() {
        return this.searchWord;
      },
      set(val: string): void {
        this.setSearch(val);
      },
    },
  },
  methods: {
    ...mapMutations("data", ["setSearch"]),
  },
});
</script>

<style lang="scss" scoped>
.search-list {
  margin-bottom: 40px;
  background-color: #fff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.04);
  border-radius: 5px;
  height: 50px;
  padding: 0 15px;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  color: #bfbfbf;
  &__icon {
    color: #bfbfbf;
    font-size: 18px;
  }
}
input::placeholder {
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  color: #bfbfbf;
}
@media screen and (min-width: 767px) {
  .search-list {
    max-width: 570px;
    margin: 0 auto 40px;
  }
}
</style>

<style lang="scss">
.q-field__before,
.q-field__prepend {
  padding-right: 10px;
}
.q-field__native,
.q-field__input {
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  color: #353535;
}
</style>
