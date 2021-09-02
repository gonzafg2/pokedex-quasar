import { ActionTree } from "vuex";
import { StateInterface } from "../index";
import { DataStateInterface, DataPokeAPIInterface } from "./state";
import axios from "axios";

const actions: ActionTree<DataStateInterface, StateInterface> = {
  async getPokeData({ commit, state }): Promise<void> {
    const urlBase = state.urlBase;
    try {
      const req = await axios.get(`${urlBase}/?offset=0&limit=1120`);
      const data = req.data;
      const results: [DataPokeAPIInterface] = data && data.results;
      if (!results) return;
      commit("setPokeData", results);
    } catch (error) {
      console.error(`Error in get Poke Data: ${error}`);
      return;
    }
    return;
  },
};

export default actions;
