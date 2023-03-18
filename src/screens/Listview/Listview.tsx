// Import Third-Party Modules
import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import styled from 'styled-components';

// Import User-Defined Modules
import { TextButton } from '../../components/TextButton';
import { useTaskStore } from '../../hooks/useTaskStore';
import { IListViewProps, ITaskState } from '../../types/screens/Listview.types';

// Styled Components Definations
const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const TodoListConatiner = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 0.9375rem;
`;

/**
 * This module is an UI Screen Component for viewing all todo list task and field to add one
 * @returns Listview Screen Component
 */
export const Listview: React.FC<IListViewProps> = () => {
  const { addTask, tasks, setTasks, updateTaskCompletion } = useTaskStore();
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
      addTask({ label: newTaskLabel });
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
      updateTaskCompletion(selectedTask.id, event.target.checked);
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
    <ListContainer>
      <TodoListConatiner>
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
      </TodoListConatiner>
      <input
        value={newTaskLabel}
        onChange={handleNewTaskLabelChange}
        onKeyDown={handleNewTaskLabelKeyDown}
      />
      <TextButton onClick={handleTasksCompleteClearClick}>
        Clear Complete Task
      </TextButton>
    </ListContainer>
  );
};