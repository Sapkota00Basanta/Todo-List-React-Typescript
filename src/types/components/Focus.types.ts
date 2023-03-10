import React from 'react';
import { ITaskState } from './Listview.types';

/**
 * This module consists of all the type decleration for Focus Component
 */
export interface IFocusProps {
  tasks: Array<ITaskState>;
  setTasks: React.Dispatch<React.SetStateAction<Array<ITaskState>>>;
  updateTaskCompletion: (taskId: string, isComplete: boolean) => void;
}
