import { XCircleIcon } from '@heroicons/react/24/outline';

import { useTodosActions } from '~/stores/todos';
import { TodoInterface } from '~/types';

export function Todo({ id, title }: TodoInterface) {
  const { removeTodo } = useTodosActions();

  const handleRemove = () => {
    removeTodo(id);
  };

  return (
    <div className="flex items-center justify-between rounded border p-3 mb-2">
      <span>{title}</span>
      <button type="button" onClick={handleRemove}>
        <XCircleIcon className="w-6 h-6 text-pink-600" />
      </button>
    </div>
  );
}
