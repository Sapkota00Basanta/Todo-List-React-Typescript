// Import Third-Party Modules
import React from 'react';
import { NavLink } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Focus } from './components/Focus/Focus';

// Import User-Defined Modules
import { Listview } from './components/Listview/Listview';
import { IAppProps } from './types/App.types';

/**
 * This module is main app component where we assign all the navigation routes to component
 * @returns App Component
 */
export const App: React.FC<IAppProps> = () => {
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
        <Route path="/" element={<Listview />} />
        <Route path="/focus" element={<Focus />} />
      </Routes>
    </BrowserRouter>
  );
};
