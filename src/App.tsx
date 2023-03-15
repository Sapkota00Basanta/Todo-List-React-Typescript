// Import Third-Party Modules
import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';

// Import User-Defined Modules
import { Focus } from './components/Focus/Focus';
import { Listview } from './components/Listview/Listview';
import { TaskContext } from './contexts/taskStore';
import { useLocalStorage } from './hooks/useLocalStorage';
import { IAppProps } from './types/App.types';
import { ITaskState } from './types/components/Listview.types';

/**
 * This module is main app component where we assign all the navigation routes to component
 * @returns App Component
 */
export const App: React.FC<IAppProps> = () => {
  const [tasks, setTasks] = useLocalStorage<Array<ITaskState>>('tasks', []);

  return (
    <BrowserRouter>
      <TaskContext.Provider value={[tasks, setTasks]}>
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
          <Route path="/" element={<Listview />} />
          <Route path="/focus" element={<Focus />} />
        </Routes>
      </TaskContext.Provider>
    </BrowserRouter>
  );
};
