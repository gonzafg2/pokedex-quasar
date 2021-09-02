import { MutationTree } from "vuex";
import {
  DataStateInterface,
  DataPokeInterface,
  DataPokeAPIInterface,
} from "./state";

const mutation: MutationTree<DataStateInterface> = {
  setPokeData(state: DataStateInterface, payload: any): void {
    if (!payload || !payload.length) return;
    const data = payload;

    // Exist fav property?
    const isFavProp = data[0] && data[0].hasOwnProperty("fav");

    if (!isFavProp) {
      const dataPoke = data.map((item: DataPokeAPIInterface, i: number) => {
        return {
          id: i + 1,
          name: item.name,
          url: item.url,
          fav: false,
        };
      });
      dataPoke ? (state.pokemonAll = dataPoke) : (state.pokemonAll = null);
      return;
    }
    state.pokemonAll = data;
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
    // Update data in localStorage:
    localStorage.setItem("data", JSON.stringify(pokemonAll));
    return;
  },
  setSearch(state: DataStateInterface, payload: string): void {
    state.searchWord = payload;
    return;
  },
};

export default mutation;
