import { MutationTree } from "vuex";
import { GeneralStateInterface } from "./state";

const mutation: MutationTree<GeneralStateInterface> = {
  changeLoading(state: GeneralStateInterface, payload: boolean) {
    if (payload === undefined || payload === null) return;
    state.loading = payload;
  },
};

export default mutation;
