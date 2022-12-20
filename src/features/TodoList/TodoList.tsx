import { useTodos } from '~/stores/todos';

import { Todo } from '../Todo/Todo';

export function TodoList() {
  const todos = useTodos();

  return (
    <div className="max-w-xl mx-auto rounded mt-10">
      {todos.map((item) => (
        <Todo key={item.id} id={item.id} title={item.title} />
      ))}
    </div>
  );
}
