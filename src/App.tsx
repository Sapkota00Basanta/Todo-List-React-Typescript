// Import Third-Party Modules
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Focus } from './components/Focus/Focus';

// Import User-Defined Modules
import { Listview } from './components/Listview/Listview';
import { IAppProps } from './types/App.types';
import { ITaskState } from './types/components/Listview.types';

/**
 * This module is main app component where we assign all the navigation routes to component
 * @returns App Component
 */
export const App: React.FC<IAppProps> = () => {
  const [tasks, setTasks] = useState<Array<ITaskState>>([]);

  /**
   * This method handles the event listener state data management of child component for marking a task as complete
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

  const tasksPropsObject = { tasks, setTasks, updateTaskCompletion };

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
