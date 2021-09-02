import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { DataStateInterface } from './state';

const actions: ActionTree<DataStateInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default actions;
