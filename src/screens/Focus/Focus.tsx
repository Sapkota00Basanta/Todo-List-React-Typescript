// Import Third-Party Modules
import React from 'react';
import styled from 'styled-components';

// Import User-Defined Modules
import { useTaskStore } from '../../hooks/useTaskStore';
import { IFocusProps } from '../../types/screens/Focus.types';
import { TextButton } from '../../components/TextButton';
import { Button } from '../../components/Button';
import { Spacer } from '../../components/Spacer';

// Styled Component Definations
const FocusContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

const FocusedTaskLabelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  flex: 1;
  padding-bottom: 2.1825rem;
`;

/**
 * This module consist of focus view displaying single focused todo list
 * @returns Focus View screen component
 */
export const Focus: React.FC<IFocusProps> = () => {
  const {
    focusedTask: task,
    shuffleFocusedTask,
    updateTaskCompletion,
  } = useTaskStore();

  /**
   * This method handles the marking of any incomplete task as complete.
   */
  const handleMarkComplete = () => {
    task && updateTaskCompletion(task.id, true);
  };

  return task ? (
    <FocusContainer>
      <FocusedTaskLabelContainer>{task.label}</FocusedTaskLabelContainer>
      <Button onClick={handleMarkComplete}>Mark as Complete</Button>
      <Spacer height={2.1825} />
      <TextButton onClick={shuffleFocusedTask}> Nope! </TextButton>
    </FocusContainer>
  ) : (
    <div>No incomplete tasks. yay!</div>
  );
};
