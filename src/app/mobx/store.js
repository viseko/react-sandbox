import {observable, action, computed, makeObservable} from "mobx";

class TodoStore {
  constructor() {
    makeObservable(this, {
      todos: observable,
      addTodo: action,
      toggleTodo: action,
      completedTodos: computed
    });
  }

  todos = [];

  addTodo(title) {
    this.todos.push({title, completed: false});
  };

  toggleTodo(index) {
    const todo = this.todos[index];
    if (todo) {
      todo.completed = !todo.completed;
    }
  }

  get completedTodos() {
    return this.todos.filter(todo => todo.completed);
  };
}

const store = new TodoStore();
export default store;