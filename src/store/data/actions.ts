import { ActionTree } from "vuex";
import { StateInterface } from "../index";
import { DataStateInterface, DataPokeAPIInterface } from "./state";
import axios from "axios";

const actions: ActionTree<DataStateInterface, StateInterface> = {
  async getPokeData({ commit, state }): Promise<void> {
    // Is data locate in localStorage?
    const dataLocal = localStorage.getItem("data");

    if (dataLocal) {
      // Yes, get data from localStorage
      const data = JSON.parse(dataLocal);
      commit("setPokeData", data);
      return;
    }
    
    const urlBase = state.urlBase;
    try {
      const req = await axios.get(`${urlBase}/?offset=0&limit=1120`);
      const data = req.data;
      const results: [DataPokeAPIInterface] = data && data.results;
      if (!results) return;
      commit("setPokeData", results);
      // Save data in localstorage:
      localStorage.setItem("data", JSON.stringify(results));
      return;
    } catch (error) {
      console.error(`Error in get Poke Data: ${error}`);
      return;
    }
    return;
  },
  toggleFav({ commit }, pokeId: number): void {
    const id = pokeId;
    if (!id) return;
    commit("setToggleFavs", id);
    return;
  },
};

export default actions;
