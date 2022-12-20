import { PencilSquareIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { clsx } from 'clsx';
import React, { useEffect, useRef, useState } from 'react';

import { useTodosActions } from '~/stores/todos';
import { TodoInterface as TodoProps } from '~/types';

export function Todo({ id, title }: TodoProps) {
  const { removeTodo, editTodo } = useTodosActions();
  const titleRef = useRef<HTMLInputElement>(null);
  const [editableTitle, setEditableTitle] = useState(title);
  const [isInEditMode, setIsInEditMode] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!titleRef.current) return;

    titleRef.current.focus();
  }, [isInEditMode]);

  const handleRemove = () => {
    removeTodo(id);
  };

  const handleEditMode = () => {
    setIsInEditMode(true);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditableTitle(e.currentTarget.value);
  };

  const handleEdit = () => {
    if (!editableTitle) {
      setEditableTitle(title);
      return;
    }

    editTodo({ id, title: editableTitle });
    setIsInEditMode(false);
  };

  const handleEditOnEnter = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleEdit();
    }
  };

  return (
    <div
      className={clsx('flex items-center justify-between rounded border p-3 mb-2', {
        'opacity-60': isComplete,
      })}
    >
      <div>
        <input type="checkbox" className="mr-4" onInput={() => setIsComplete((state) => !state)} />
        {isInEditMode ? (
          <input
            ref={titleRef}
            onBlur={handleEdit}
            onInput={handleTitleChange}
            onKeyUp={handleEditOnEnter}
            value={editableTitle}
          />
        ) : (
          <span>{title}</span>
        )}
      </div>
      <div className="flex items-center">
        <button type="button" onClick={handleEditMode}>
          <PencilSquareIcon className="w-6 h-6 text-blue-600 mr-3" />
        </button>
        <button type="button" onClick={handleRemove}>
          <XCircleIcon className="w-6 h-6 text-pink-600" />
        </button>
      </div>
    </div>
  );
}
