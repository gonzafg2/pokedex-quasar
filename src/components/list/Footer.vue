<template>
  <q-footer class="footer" elevated>
    <q-btn
      :to="{ path: '/list' }"
      :class="{ active: url === 'list' }"
      class="footer__cta"
      flat
    >
      <img
        loading="lazy"
        width="22"
        height="22"
        src="~assets/img/list.png"
        alt="List Icon"
      />
      <span>All</span>
    </q-btn>
    <q-btn
      :to="{ path: '/list/favorites' }"
      :class="{ active: url === 'list/favorites' }"
      class="footer__cta"
      flat
    >
      <img
        loading="lazy"
        width="22"
        height="22"
        src="~assets/img/star.png"
        alt="Star Icon"
      />
      <span>Favorites</span>
    </q-btn>
  </q-footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer",
  computed: {
    url() {
      const loc = this.$route.path;
      const location = loc && loc.replace("/", "");
      return location;
    },
  },
});
</script>

<style lang="scss" scoped>
.footer {
  background-color: #fff;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
  &__cta {
    width: 150px;
    height: 44px;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 60px;
    background-color: #bfbfbf;
    text-transform: none;
    img {
      margin-right: 10px;
    }
    &.active {
      background-color: #f22539;
    }
  }
}
@media screen and (min-width: 375px) {
  .footer {
    padding: 0 30px;
  }
}
@media screen and (min-width: 767px) {
  .footer {
    justify-content: center;
    &__cta {
      width: 275px;
      &:first-child {
        margin-right: 20px;
      }
    }
  }
}
</style>

<style lang="scss">
.on-left {
  margin-right: 10px;
}
</style>
