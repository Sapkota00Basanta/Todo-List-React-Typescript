import React from 'react';
import { ITaskState } from './Listview.types';

/**
 * This module consists of all the type decleration for Focus Component
 */
export interface IFocusProps {
  addTask: (task: Pick<ITaskState, 'label'>) => void;
  focusedTask?: ITaskState;
  tasks: Array<ITaskState>;
  shuffleFocusedTask: () => void;
  setTasks: React.Dispatch<React.SetStateAction<Array<ITaskState>>>;
  updateTaskCompletion: (taskId: string, isComplete: boolean) => void;
}
