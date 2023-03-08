// Import Third-Party Modules
import React from 'react';
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
      <Routes>
        <Route path="/" element={<Listview />} />
        <Route path="/focus" element={<Focus />} />
      </Routes>
    </BrowserRouter>
  );
};
