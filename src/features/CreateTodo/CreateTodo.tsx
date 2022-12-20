import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { nanoid } from 'nanoid';
import * as React from 'react';

import { useTodosActions } from '~/stores/todos';

export function CreateTodo() {
  const { addTodo } = useTodosActions();
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleTodo = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (!inputRef?.current?.value) return;

    addTodo({ title: inputRef.current.value, id: nanoid() });
    inputRef.current.value = '';
  };

  return (
    <div className="max-w-xl mx-auto rounded border bg-gray-200 border-gray-900 overflow-hidden">
      <form onSubmit={handleTodo} className="flex items-center relative">
        <input
          type="text"
          placeholder="Add item"
          className="pl-3 pr-6 py-3 outline-none w-full"
          ref={inputRef}
        />
        <button type="submit" className="absolute right-2">
          <PlusCircleIcon className="h-6 w-6 fill-none" />
        </button>
      </form>
    </div>
  );
}
