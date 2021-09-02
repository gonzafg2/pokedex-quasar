export interface GeneralStateInterface {
  loading: boolean;
  pokeActive: boolean;
}

function state(): GeneralStateInterface {
  return {
    loading: false,
    pokeActive: false,
  }
};

export default state;
