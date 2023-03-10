// Import Third-Party Modules
import React from 'react';

// Import User-Defined Modules
import { IFocusProps } from '../../types/components/Focus.types';

/**
 * This module consist of focus view displaying single focused todo list
 * @returns Focus View Component
 */
export const Focus: React.FC<IFocusProps> = ({
  focusedTask: task,
  shuffleFocusedTask,
  updateTaskCompletion,
}) => {
  /**
   * This method handles the marking of any incomplete task as complete.
   */
  const handleMarkComplete = () => {
    task && updateTaskCompletion(task.id, true);
  };

  return task ? (
    <div>
      {task.label}
      <div>
        <button onClick={handleMarkComplete}>Mark as Complete</button>
      </div>
      <button onClick={shuffleFocusedTask}> Nope! </button>
    </div>
  ) : (
    <div>No incomplete tasks. yay!</div>
  );
};
