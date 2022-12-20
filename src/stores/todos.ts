import create from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface Todo {
  id: string;
  title: string;
}

interface State {
  todos: Todo[];
}

interface Actions {
  actions: {
    addTodo: (todo: Todo) => void;
    removeTodo: (id: string) => void;
  };
}

const useTodoStore = create(
  immer<State & Actions>((set) => ({
    todos: [],
    actions: {
      addTodo: (todo) =>
        set((state) => {
          state.todos.push(todo);
        }),
      removeTodo: (id) =>
        set((state) => {
          state.todos = state.todos.filter((item) => item.id !== id);
        }),
    },
  }))
);

export const useTodos = () => useTodoStore((state) => state.todos);
export const useTodosActions = () => useTodoStore((state) => state.actions);
