import { MutationTree } from "vuex";
import {
  DataStateInterface,
  DataPokeInterface,
  DataPokeAPIInterface,
} from "./state";

const mutation: MutationTree<DataStateInterface> = {
  setPokeData(
    state: DataStateInterface,
    payload: [DataPokeAPIInterface]
  ): void {
    if (!payload.length) return;

    const dataPoke = payload.map((item: DataPokeAPIInterface, i: number) => {
      return {
        id: i + 1,
        name: item.name,
        url: item.url,
        fav: false,
      };
    });
    dataPoke ? (state.pokemonAll = dataPoke) : (state.pokemonAll = null);
    return;
  },
  setToggleFavs(state: DataStateInterface, payload: number): void {
    const idPoke = payload;
    const pokemonAll = state.pokemonAll;
    if (!idPoke || !pokemonAll || !pokemonAll.length) return;

    const poke = pokemonAll.find(
      (pokemon: DataPokeInterface) => pokemon.id === idPoke
    );
    if (!poke) return;

    // If pokemon is in favs, add it, it not, remove it;
    poke.fav ? (poke.fav = false) : (poke.fav = true);
    return;
  },
  setSearch(state: DataStateInterface, payload: string): void {
    state.searchWord = payload;
    return;
  },
};

export default mutation;
