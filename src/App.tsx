// Import Third-Party Modules
import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

// Import User-Defined Modules
import { Focus } from './components/Focus/Focus';
import { Listview } from './components/Listview/Listview';
import { TaskContext } from './contexts/taskStore';
import { useLocalStorage } from './hooks/useLocalStorage';
import { globalColorsObject, GlobalStyles } from './styles';
import { IAppProps } from './types/App.types';
import { ITaskState } from './types/components/Listview.types';

// Styled Components Definations
const LayoutContainerTag = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 35px;
`;

const HTMLNavTag = styled.nav`
  display: flex;
  margin-bottom: 45px;
`;

const RouterNavLinkTag = styled(NavLink)`
  height: 62px;
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background: #000;
  text-decoration: none;

  &:first-child {
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
  }

  &:last-child {
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
  }

  /* We can add styles to nested element based on className */
  &.active {
    background-color: ${globalColorsObject.primaryColor};
    color: #000;
  }
`;

/**
 * This module is main app component where we assign all the navigation routes to component
 * @returns App Component
 */
export const App: React.FC<IAppProps> = () => {
  const [tasks, setTasks] = useLocalStorage<Array<ITaskState>>('tasks', []);

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <TaskContext.Provider value={[tasks, setTasks]}>
          <LayoutContainerTag>
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
          </LayoutContainerTag>
        </TaskContext.Provider>
      </BrowserRouter>
    </>
  );
};
