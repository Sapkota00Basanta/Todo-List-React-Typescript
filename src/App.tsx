// Import Third-Party Modules
import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

// Import User-Defined Modules
import { Focus } from './screens/Focus/Focus';
import { Listview } from './screens/Listview/Listview';
import { TaskContext } from './contexts/taskStore';
import { useLocalStorage } from './hooks/useLocalStorage';
import { globalColorsObject, GlobalStyles } from './styles';
import { IAppProps } from './types/App.types';
import { ITaskState } from './types/screens/Listview.types';

// Styled Components Definations
const AppLayoutContainerTag = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2.1875rem;
`;

const HTMLNavTag = styled.nav`
  display: flex;
  margin-bottom: 2.8125rem;
`;

const RouterNavLinkTag = styled(NavLink)`
  height: 3.875rem;
  width: 7.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background: #000;
  text-decoration: none;

  &:first-child {
    border-top-left-radius: 0.9375rem;
    border-bottom-left-radius: 0.9375rem;
  }

  &:last-child {
    border-top-right-radius: 0.9375rem;
    border-bottom-right-radius: 0.9375rem;
  }

  /* We can add styles to nested element based on className */
  &.active {
    background: ${globalColorsObject.primaryColor};
    color: #000;
  }
`;

/**
 * This module is main app component where we assign all the navigation routes to screen component
 * @returns App Component
 */
export const App: React.FC<IAppProps> = () => {
  const [tasks, setTasks] = useLocalStorage<Array<ITaskState>>('tasks', []);

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <TaskContext.Provider value={[tasks, setTasks]}>
          <AppLayoutContainerTag>
            <HTMLNavTag>
              {/* By default active class is added to Navlink in react router version 6 */}
              <RouterNavLinkTag to="/" end>
                List
              </RouterNavLinkTag>
              <RouterNavLinkTag to="/focus">Focus</RouterNavLinkTag>
            </HTMLNavTag>
            <Routes>
              <Route path="/" element={<Listview />} />
              <Route path="/focus" element={<Focus />} />
            </Routes>
          </AppLayoutContainerTag>
        </TaskContext.Provider>
      </BrowserRouter>
    </>
  );
};
