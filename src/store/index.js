import Vue from 'vue';
import Vuex from 'vuex';

// Import modules...
import todo from './modules/todo';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';
const persistedStateConfig = {
  key: 'store',
};

export default new Vuex.Store({
  /**
   * The modules that are available on the Vuex store.
   */
  modules: {
    /**
     * The todo module.
     */
    todo,
  },

  /**
   * If strict mode should be enabled.
   */
  strict: debug,
});
