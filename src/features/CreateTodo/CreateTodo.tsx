import { PlusCircleIcon } from '@heroicons/react/24/outline';
import * as React from 'react';

import { useTodosActions } from '~/stores/todos';

export function CreateTodo() {
  const { addTodo } = useTodosActions();
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleTodo = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (!inputRef?.current?.value) return;

    addTodo({ title: inputRef.current.value });
    inputRef.current.value = '';
  };

  return (
    <div className="w-fit mx-auto p-3 rounded border bg-gray-200 border-gray-900/50 ">
      <form onSubmit={handleTodo} className="flex items-center relative">
        <input
          type="text"
          placeholder="Add item"
          className="pl-2 pr-6 py-1 outline-none w-fill"
          ref={inputRef}
        />
        <button type="submit" className="absolute right-2">
          <PlusCircleIcon className="h-6 w-6 fill-none" />
        </button>
      </form>
    </div>
  );
}
