import { CreateTodo } from './features/CreateTodo/CreateTodo';
import { TodoList } from './features/TodoList/TodoList';

export function App() {
  return (
    <div className="h-screen w-screen p-4 ">
      <div className="mx-auto">
        <CreateTodo />
        <TodoList />
      </div>
    </div>
  );
}
