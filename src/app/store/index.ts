import { createStore } from 'vuex';
import { state } from './state';
import { getters } from './getters';
import { mutations } from './mutations';
import { actions } from './actions';

import * as interfaces from './interfaces';

export default createStore({
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
});

export { interfaces };
