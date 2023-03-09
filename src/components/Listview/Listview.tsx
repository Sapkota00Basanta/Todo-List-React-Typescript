// Import Third-Party Modules
import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import { nanoid } from 'nanoid';

// Import User-Defined Modules
import { IListViewProps } from '../../types/components/Listview.types';
import { ITaskState } from '../../types/components/Listview.types';

/**
 * This module is an UI Component for viewing all todo list task and field to add one
 * @returns Listview Component
 */
export const Listview: React.FC<IListViewProps> = () => {
  const [tasks, setTasks] = useState<Array<ITaskState>>([]);
  const [newTaskLabel, setNewTaskLabel] = useState<string>('');

  /**
   * This method handles the event change on input field to update the value
   * @param event ChangeEvent of HTML Input
   */
  const handleNewTaskLabelChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setNewTaskLabel(event.target.value);
  };

  /**
   * This method handles the key press change to update the tasks state
   * @param event KeyboardEvent of Input Type
   */
  const handleNewTaskLabelKeyDown = (
    event: KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key.toLowerCase() === 'enter' && newTaskLabel !== '') {
      setTasks((task) => [
        ...task,
        { id: nanoid(), label: newTaskLabel, isComplete: false },
      ]);
      setNewTaskLabel('');
    }
  };

  /**
   * This method is a higher order functoin, which handles the marking a specific task as complete or incomplte
   * @param selectedTask Todo list task
   * @returns ChnageEventHandler
   */
  const handleTaskCompleteChange =
    (selectedTask: ITaskState) => (event: ChangeEvent<HTMLInputElement>) => {
      setTasks((tasks) =>
        tasks.map((task) => {
          if (task.id === selectedTask.id) {
            return {
              ...task,
              isComplete: event.target.checked,
            };
          }
          return task;
        })
      );
    };

  /**
   * This method handles clearing of all the completed tasks
   */
  const handleTasksCompleteClearClick = () => {
    setTasks((tasks) => tasks.filter((task) => !task.isComplete));
  };

  /**
   * This method is a higher order function which handles to delete selected task from tasks array
   * @param selectedTask Selected task to delete
   * @returns Event Handler which filters out task with matching id
   */
  const handleTaskDeleteClick = (selectedTask: ITaskState) => () => {
    setTasks((tasks) => tasks.filter((task) => task.id !== selectedTask.id));
  };

  return (
    <div>
      <div>
        {tasks.map((eachTask) => (
          <div key={eachTask.id}>
            <input
              type="checkbox"
              checked={eachTask.isComplete}
              onChange={handleTaskCompleteChange(eachTask)}
            />{' '}
            {eachTask.label}
            <button onClick={handleTaskDeleteClick(eachTask)}>Delete</button>
          </div>
        ))}
      </div>
      <input
        value={newTaskLabel}
        onChange={handleNewTaskLabelChange}
        onKeyDown={handleNewTaskLabelKeyDown}
      />
      <div>
        <button onClick={handleTasksCompleteClearClick}>
          Clear Complete Task
        </button>
      </div>
    </div>
  );
};
