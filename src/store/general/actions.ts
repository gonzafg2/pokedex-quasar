import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { GeneralStateInterface } from './state';

const actions: ActionTree<GeneralStateInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default actions;
