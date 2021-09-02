import { GetterTree } from "vuex";
import { StateInterface } from "../index";
import { DataStateInterface } from "./state";

const getters: GetterTree<DataStateInterface, StateInterface> = {
  pokeInFav(state) {
    const pokes = state.pokemonAll;
    const fav = pokes && pokes.filter((poke) => poke.fav);
    return fav;
  },
};

export default getters;
