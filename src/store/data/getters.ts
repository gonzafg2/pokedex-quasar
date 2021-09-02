import { GetterTree } from "vuex";
import { StateInterface } from "../index";
import { DataStateInterface } from "./state";

const getters: GetterTree<DataStateInterface, StateInterface> = {
  pokeInFav(state) {
    const pokes = state.pokemonAll;
    if (!pokes || !pokes.length) return [];

    const searchWord = state.searchWord;
    const pokeFav = pokes.filter((poke) => poke.fav);

    if (!searchWord) return pokeFav;

    const fav = pokeFav.filter((poke) => poke.name.includes(searchWord));
    return fav;
  },
  pokeInSearch(state) {
    const pokes = state.pokemonAll;
    if (!pokes || !pokes.length) return [];

    const searchWord = state.searchWord;
    const search = pokes.filter((poke) => poke.name.includes(searchWord));
    return search;
  },
  pokeIsInFav(state) {
    return (id: number): boolean => {
      const pokes = state.pokemonAll;
      if (!pokes || !pokes.length) return false;

      const poke = pokes.find((poke) => poke.id === id);
      if (!poke) return false;

      return poke.fav;
    };
  },
};

export default getters;
