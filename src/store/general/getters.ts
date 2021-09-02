import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { GeneralStateInterface } from './state';

const getters: GetterTree<GeneralStateInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default getters;
