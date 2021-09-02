<template>
  <div class="loading">
    <q-img src="~assets/img/loader.png" class="loading__img" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Loading",
});
</script>

<style lang="scss" scoped>
.loading {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: 0;
  &__img {
    width: 106px;
    height: 106px;
    transform: rotateY(0) rotateZ(0);
    animation: 700ms linear infinite tilin;
    @keyframes tilin {
      0% {
        opacity: 1;
        transform: rotateZ(0);
      }
      50% {
        opacity: 0.85;
        transform: rotateZ(180deg);
      }
      100% {
        opacity: 1;
        transform: rotateZ(360deg);
      }
    }
  }
}
</style>
