export interface DataStateInterface {
  urlBase: string;
  pokemonAll: DataPokeInterface[] | null;
  searchWord: string;
  pokeDataId: DataPokeIdInterface | null;
}
export interface DataPokeAPIInterface {
  name: string;
  url: string;
}
export interface DataPokeInterface {
  id: number;
  name: string;
  url: string;
  fav: boolean;
}
export interface DataPokeIdInterface {
  id: number;
  name: string;
  img: string;
  weight: number;
  height: number;
  types: string[];
}

function state(): DataStateInterface {
  return {
    urlBase: "https://pokeapi.co/api/v2/pokemon",
    pokemonAll: null,
    searchWord: "",
    pokeDataId: null,
  };
}

export default state;
