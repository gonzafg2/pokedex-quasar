<template>
  <div class="empty-list">
    <h3 class="empty-list__title">Uh-oh!</h3>
    <p class="empty-list__text">You look lost on your journey!</p>
    <q-btn
      :to="{ path: '/' }"
      class="empty-list__cta"
      text-color="white"
      label="Go back home"
      push
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "EmptyList",
});
</script>

<style lang="scss" scoped>
.empty-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #353535;
  &__cta {
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    background-color: #f22539;
    border-radius: 60px;
    height: 44px;
    width: 155px;
    text-transform: none;
  }
  &__title {
    font-weight: 700;
    font-size: 36px;
    line-height: 43px;
    margin: 10px 0;
  }
  &__text {
    font-weight: 500;
    font-size: 20px;
    line-height: 150%;
    margin-bottom: 25px;
  }
}
</style>
