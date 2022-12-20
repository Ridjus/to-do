import { useTodos } from '~/stores/todos';

import { Todo } from '../Todo/Todo';

export function TodoList() {
  const todos = useTodos();

  return (
    <>
      {todos.map((item) => (
        <Todo key={item.id} title={item.title} />
      ))}
    </>
  );
}
