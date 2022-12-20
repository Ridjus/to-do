import { nanoid } from 'nanoid';
import create from 'zustand';

interface Todo {
  id?: string;
  title: string;
}

interface TodoStore {
  todos: Todo[];
  actions: {
    addTodo: (todo: Todo) => void;
  };
}

const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  actions: {
    addTodo: (todo) => set((state) => ({ todos: [...state.todos, { id: nanoid(), ...todo }] })),
  },
}));

export const useTodos = () => useTodoStore((state) => state.todos);
export const useTodosActions = () => useTodoStore((state) => state.actions);
