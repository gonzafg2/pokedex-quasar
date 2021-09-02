export interface DataStateInterface {
  urlBase: string;
  pokemonAll: DataPokeInterface[] | null;
  searchWord: string;
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

function state(): DataStateInterface {
  return {
    urlBase: "https://pokeapi.co/api/v2/pokemon",
    pokemonAll: null,
    searchWord: "",
  };
}

export default state;
