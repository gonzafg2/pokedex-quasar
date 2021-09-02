import { MutationTree } from "vuex";
import { GeneralStateInterface } from "./state";

const mutation: MutationTree<GeneralStateInterface> = {
  changeLoading(state: GeneralStateInterface, payload: boolean): void {
    if (payload === undefined || payload === null) return;
    state.loading = payload;
    return;
  },
  changePokeActive(state: GeneralStateInterface, payload: boolean): void {
    if (payload === undefined || payload === null) return;
    state.pokeActive = payload;

    return;
  },
};

export default mutation;
