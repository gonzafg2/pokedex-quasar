import { store } from "quasar/wrappers";
import { InjectionKey } from "vue";
import {
  createStore,
  Store as VuexStore,
  useStore as vuexUseStore,
} from "vuex";

import data from "./data";
import general from "./general";
import { DataStateInterface } from "./data/state";
import { GeneralStateInterface } from "./general/state";

export interface StateInterface {
  data: DataStateInterface;
  general: GeneralStateInterface;
}

// provide typings for `this.$store`
declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $store: VuexStore<StateInterface>;
  }
}

// provide typings for `useStore` helper
export const storeKey: InjectionKey<VuexStore<StateInterface>> =
  Symbol("vuex-key");

export default store(function () {
  const Store = createStore<StateInterface>({
    modules: {
      data,
      general,
    },
    strict: !!process.env.DEBUGGING,
  });

  return Store;
});

export function useStore() {
  return vuexUseStore(storeKey);
}
