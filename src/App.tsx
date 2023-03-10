// Import Third-Party Modules
import { shuffle } from 'lodash';
import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';

// Import User-Defined Modules
import { Focus } from './components/Focus/Focus';
import { Listview } from './components/Listview/Listview';
import { IAppProps } from './types/App.types';
import { ITaskState } from './types/components/Listview.types';

/**
 * This module is main app component where we assign all the navigation routes to component
 * @returns App Component
 */
export const App: React.FC<IAppProps> = () => {
  const [tasks, setTasks] = useState<Array<ITaskState>>([]);
  const [focusedTaskId, setFocusedTaskId] = useState<string | undefined>(
    undefined
  );

  /**
   * This method handles adding a new task to tasks state array &
   * assign the new task id as focused task id if there are none.
   * @param task ItaskState value with only label field
   */
  const addTask = (task: Pick<ITaskState, 'label'>) => {
    const id = nanoid();
    setTasks((tasks) => [
      ...tasks,
      { id, label: task.label, isComplete: false },
    ]);
    if (!focusedTaskId) setFocusedTaskId(id);
  };

  /**
   * This method handles the event listener
   * state data management of child component for marking a task as complete
   * @param taskId Unique task id
   * @param isComplete Boolena complete value
   */
  const updateTaskCompletion = (taskId: string, isComplete: boolean) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, isComplete };
        }
        return task;
      })
    );
  };

  /**
   * This selects among the list of tasks which are incomplete randomly
   */
  const focusedTask = tasks.filter((task) => task.id === focusedTaskId)[0];

  /**
   * This method handles shuffling among the incomplete set of tasks & select one and return it's id
   */
  const shuffleFocusedTask = () => {
    setFocusedTaskId(shuffle(tasks.filter((task) => !task.isComplete))[0]?.id);
  };

  const tasksPropsObject = {
    addTask,
    focusedTask,
    tasks,
    setTasks,
    shuffleFocusedTask,
    updateTaskCompletion,
  };

  return (
    <BrowserRouter>
      <nav>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            fontWeight: isActive ? 'bold' : 'normal',
          })}
          end
        >
          List
        </NavLink>{' '}
        -{' '}
        <NavLink
          to="/focus"
          style={({ isActive }) => ({
            fontWeight: isActive ? 'bold' : 'normal',
          })}
        >
          Focus
        </NavLink>
      </nav>
      <br />
      <Routes>
        <Route path="/" element={<Listview {...tasksPropsObject} />} />
        <Route path="/focus" element={<Focus {...tasksPropsObject} />} />
      </Routes>
    </BrowserRouter>
  );
};
