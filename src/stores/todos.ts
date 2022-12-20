import create from 'zustand';

interface Todo {
  id: string;
  title: string;
}

interface TodoStore {
  todos: Todo[];
  actions: {
    addTodo: (todo: Todo) => void;
    removeTodo: (id: string) => void;
  };
}

const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  actions: {
    addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
    removeTodo: (id) => set((state) => ({ todos: state.todos.filter((item) => item.id !== id) })),
  },
}));

export const useTodos = () => useTodoStore((state) => state.todos);
export const useTodosActions = () => useTodoStore((state) => state.actions);
