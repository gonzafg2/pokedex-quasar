export interface GeneralStateInterface {
  loading: boolean;
}

function state(): GeneralStateInterface {
  return {
    loading: false
  }
};

export default state;
