import { XCircleIcon } from '@heroicons/react/24/outline';
import { clsx } from 'clsx';
import { useState } from 'react';

import { useTodosActions } from '~/stores/todos';
import { TodoInterface as TodoProps } from '~/types';

export function Todo({ id, title }: TodoProps) {
  const [isComplete, setIsComplete] = useState(false);
  const { removeTodo } = useTodosActions();

  const handleRemove = () => {
    removeTodo(id);
  };

  return (
    <div
      className={clsx('flex items-center justify-between rounded border p-3 mb-2', {
        'opacity-60': isComplete,
      })}
    >
      <div>
        <input type="checkbox" className="mr-4" onInput={() => setIsComplete((state) => !state)} />
        <span>{title}</span>
      </div>
      <button type="button" onClick={handleRemove}>
        <XCircleIcon className="w-6 h-6 text-pink-600" />
      </button>
    </div>
  );
}
