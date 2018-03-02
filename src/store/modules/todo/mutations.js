import {
  ADD,
  REMOVE,
  TOGGLE_EDIT,
  UPDATE,
} from './mutation-types';

export default {
  /**
   * Mutation which will add a new todo to the array of todos.
   *
   * @param {Object} state The state of the application.
   * @param {String} todo  The new todo item.
   */
  [ADD](state, todo) {
    // Create a copy of the todos array and grab the last item.
    const lastTodo = state.all.slice(-1).pop();

    state.all.push({
      title: todo,
      completed: false,
      id: lastTodo ? lastTodo.id + 1 : 1,
      isEdited: false,
    });
  },

  /**
   * Mutation which will remove a todo.
   *
   * @param {Object} state The state of the application.
   * @param {Object} todo  The todo to be removed.
   */
  [REMOVE](state, todo) {
    state.all = state.all.filter(item => item !== todo);
  },

  /**
   * Mutation which will edit a todo.
   *
   * @param {Object} state The state of the application.
   * @param {Object} todo  The todo to be set to edit
   */
  [TOGGLE_EDIT](state, todo) {
    todo.isEdited = !todo.isEdited;
  },

  /**
   * Update the todo.
   *
   * @param {Object} state The state of the application.
   * @param {Object} todo  The todo to be updated.
   * @param {String} title The new title.
   */
  [UPDATE](state, { todo, title }) {
    todo.title = title;
  }
}
