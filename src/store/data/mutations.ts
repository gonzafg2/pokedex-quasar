import { MutationTree } from "vuex";
import { DataStateInterface, DataPokeAPIInterface } from "./state";

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
};

export default mutation;
