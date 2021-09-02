import { ActionTree } from "vuex";
import { StateInterface } from "../index";
import {
  DataStateInterface,
  DataPokeAPIInterface,
  DataPokeIdInterface,
} from "./state";
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
  async getPokeDataById({ commit, state }, pokeId: number): Promise<void> {
    const id = pokeId;
    if (!id) return;

    // Is data locate in localStorage?
    const dataLocal = localStorage.getItem(`data-${id}`);

    if (dataLocal) {
      // Yes, get data from localStorage
      const data = JSON.parse(dataLocal);
      commit("setPokeDataById", data);
      return;
    }

    const urlBase = state.urlBase;
    try {
      const req = await axios.get(`${urlBase}/${pokeId}`);
      const data = req.data;

      if (!data) return;

      const name = data.name;
      const weight = data.weight;
      const height = data.height;
      const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
      const types =
        data.types &&
        data.types.map((item: any) => item.type && item.type.name);

      const pokeData: DataPokeIdInterface = {
        id,
        name,
        img,
        weight,
        height,
        types,
      };
      commit("setPokeDataById", pokeData);

      // Save data in localstorage:
      localStorage.setItem(`data-${id}`, JSON.stringify(pokeData));
      return;
    } catch (error) {
      console.error(`Error in get Poke Data: ${error}`);
      return;
    }
    return;
  },
};

export default actions;
