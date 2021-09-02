<template>
  <q-dialog v-if="pokeDataId" v-model="pokeCard">
    <q-card class="poke-card">
      <q-btn class="poke-card__close" v-close-popup flat>
        <img
          loading="lazy"
          width="26"
          height="26"
          :src="require('assets/img/close.png')"
          alt="Close button"
        />
      </q-btn>
      <q-card-section class="poke-card__img">
        <img width="180" height="180" :src="pokeDataId.img" />
      </q-card-section>
      <q-separator />

      <q-card-section class="poke-card__section-text">
        <p class="poke-card__text">
          <strong>name:</strong> {{ pokeDataId.name }}
        </p>
        <q-separator class="poke-card__bar" />
        <p class="poke-card__text">
          <strong>weight:</strong> {{ pokeDataId.weight }}
        </p>
        <q-separator class="poke-card__bar" />
        <p class="poke-card__text">
          <strong>height:</strong> {{ pokeDataId.height }}
        </p>
        <q-separator class="poke-card__bar" />
        <p class="poke-card__text">
          <strong>types:</strong> &nbsp;<span
            v-for="types in pokeDataId.types"
            :key="types"
            >{{ `${types}, ` }}</span
          >
        </p>
        <q-separator class="poke-card__bar" />
      </q-card-section>

      <q-card-actions class="poke-card__actions">
        <q-btn
          @click="copyClip"
          class="poke-card__cta"
          v-close-popup
          flat
          label="Share to my friends"
        />
        <img
          @click="toggleFav(pokeDataId.id)"
          loading="lazy"
          width="44"
          height="44"
          :src="
            pokeInFav
              ? require('assets/img/fav.png')
              : require('assets/img/no-fav.png')
          "
          :alt="pokeInFav ? 'Favorite icon' : 'No favorite icon'"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import { DataStateInterface } from "../../store/data/state";
// import Clipboard from "v-clipboard";
import { copyToClipboard } from "quasar";

export default defineComponent({
  name: "CardPoke",
  props: {
    pokemon: {
      type: Object as () => DataStateInterface,
    },
  },
  computed: {
    ...mapState("general", ["pokeActive"]),
    ...mapState("data", ["pokeDataId"]),
    ...mapGetters("data", ["pokeIsInFav"]),
    pokeCard: {
      get() {
        return this.pokeActive;
      },
      set(val: any) {
        this.changePokeActive(val);
      },
    },
    pokeInFav() {
      const id = this.pokeDataId.id;
      return this.pokeIsInFav(id);
    },
  },
  methods: {
    ...mapMutations("general", ["changePokeActive"]),
    ...mapActions("data", ["toggleFav"]),
    async copyClip(): Promise<void> {
      const poke = JSON.stringify(Object.values(this.pokeDataId));
      await copyToClipboard(poke);
      return;
    },
  },
});
</script>

<style lang="scss" scoped>
.poke-card {
  width: 315px;
  height: auto;
  position: relative;
  &__actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px 20px;
  }
  &__bar {
    background: #e8e8e8;
    margin: 10px 0;
    &:last-child {
      margin-bottom: 0;
    }
  }
  &__close {
    position: absolute;
    width: 26px;
    height: 26px;
    margin: 0;
    padding: 0;
    top: 15px;
    right: 15px;
    z-index: 10;
  }
  &__cta {
    height: 44px;
    width: 155px;
    background-color: #f22539;
    border-radius: 60px;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #fff;
    padding: 0;
    text-transform: none;
  }
  &__img {
    height: 220px;
    width: 100%;
    background-image: url("~assets/img/bg-poke.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
  &__section-text {
    padding: 20px 30px;
  }
  &__text {
    font-weight: 500;
    font-size: 18px;
    line-height: 150%;
    color: #5e5e5e;
    text-transform: capitalize;
    margin-bottom: 0;
    strong {
      font-weight: 700;
    }
  }
}
@media screen and (min-width: 375px) {
  .poke-card {
    width: 315px;
    height: auto;
    &__actions {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 30px 20px;
    }
    &__bar {
      background: #e8e8e8;
      margin: 10px 0;
      &:last-child {
        margin-bottom: 0;
      }
    }
    &__cta {
      width: 195px;
      font-size: 18px;
      line-height: 22px;
    }
  }
}
@media screen and (min-width: 767px) {
  .poke-card {
    width: 570px;
  }
}
</style>

<style lang="scss">
body.platform-ios .q-dialog__inner--minimized > div,
body.platform-android:not(.native-mobile) .q-dialog__inner--minimized > div {
  max-height: none;
}
</style>
