export interface DataStateInterface {
  prop: boolean;
}

function state(): DataStateInterface {
  return {
    prop: false
  }
};

export default state;
