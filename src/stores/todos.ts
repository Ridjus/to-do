import create from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { TodoInterface } from '~/types';

interface State {
  todos: TodoInterface[];
}

interface Actions {
  actions: {
    addTodo: (todo: TodoInterface) => void;
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
