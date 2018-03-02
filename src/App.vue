<template>
  <div id="app">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col col-10">
          <div class="card">
            <h4 class="card-header bg-dark text-white">
              Handling Forms in your Application with Vuex
            </h4>
            <div class="card-body">
              <form @submit.prevent="addTodo">
                <div class="form-group">
                  <input
                    class="form-control"
                    v-model="todo"
                    placeholder="The title of the todo"
                  >
                </div>
                <div class="form-group">
                  <button class="btn btn-dark">
                    Add todo
                  </button>
                </div>
              </form>
              <div class="list-group">
                <div
                  v-for="todo in todos"
                  class="list-group-item"
                >
                  <form
                    @submit.prevent="toggleEditTodo(todo)"
                    v-if="todo.isEdited"
                  >
                    <div
                      class="input-group"
                    >
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Insert the title of the todo"
                        :value="todo.title"
                        @input="updateTodo({todo, title: $event.target.value})"
                      >
                      <div class="input-group-btn">
                        <button
                          class="btn btn-primary"
                          type="submit"
                        >
                          <i class="fa fa-save"></i>
                        </button>
                        <button
                          class="btn btn-danger"
                          @click="removeTodo(todo)"
                        >
                          <i class="fa fa-trash"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                  <div
                    class="d-flex align-items-center justify-content-between"
                    v-else
                  >
                    <div>{{ todo.title }}</div>
                    <div class="btn-group">
                      <button
                        class="btn btn-primary"
                        @click="toggleEditTodo(todo)"
                      >
                        <i class="fa fa-pencil"></i>
                      </button>
                      <button
                        class="btn btn-danger"
                        @click="removeTodo(todo)"
                      >
                        <i class="fa fa-trash"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapMutations, mapState } from 'vuex';

  export default {
    /**
     * The name of the application.
     */
    name: 'my-app',

    /**
     * The data this Vue instance can use.
     *
     * @returns {Object} The view model
     */
    data() {
      return {
        todo: '',
      };
    },

    /**
     * The computed properties this Vue instance can use.
     */
    computed: {
      ...mapState({
        todos: state => state.todo.all,
      })
    },

    /**
     * The methods that can be used by this Vue instance.
     */
    methods: {
      ...mapMutations({
        removeTodo: 'todo/REMOVE',
        toggleEditTodo: 'todo/TOGGLE_EDIT',
        updateTodo: 'todo/UPDATE',
      }),

      /**
       * Used to add a new todo.
       */
      addTodo() {
        if (!this.todo) {
          return false;
        }

        this.$store.commit('todo/ADD', this.todo);

        this.todo = '';
      },
    },
  };
</script>
