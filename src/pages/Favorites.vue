<template>
  <q-page v-if="!loading" class="welcome"> </q-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapMutations } from "vuex";

export default defineComponent({
  name: "List",
  computed: {
    ...mapState("general", ["loading"]),
  },
  methods: {
    ...mapMutations("general", ["changeLoading"]),
    getStart() {
      this.changeLoading(true);
    },
  },
});
</script>

<style lang="scss" scoped>
.welcome {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &__cta {
    margin-bottom: 170px;
    background-color: #f22539;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    height: 44px;
    text-transform: none;
    border-radius: 60px;
    width: 131px;
    padding: 0;
  }
  &__img {
    width: 100%;
    max-width: 325px;
    height: 288px;
    margin: 70px auto 60px;
  }
  &__text {
    font-weight: 500;
    font-size: 18px;
    line-height: 150%;
    text-align: center;
    color: #5e5e5e;
    max-width: 315px;
    margin: 0 auto 50px;
  }
  &__title {
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: #353535;
    margin-bottom: 30px;
  }
}
@media screen and (min-width: 768px) {
  .welcome {
    &__cta {
      margin-bottom: 73px;
    }
    &__text {
      max-width: 570px;
    }
  }
}
</style>
