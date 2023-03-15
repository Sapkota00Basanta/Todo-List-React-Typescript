// Import Third-Party Modules
import { createContext } from 'react';

// Import User-Defined Modules
import { ITaskState } from '../types/components/Listview.types';

/**
 * This module creates a task state context which handles sharing &
 * accessing task state value among components.
 */
export const TaskContext = createContext<
  [Array<ITaskState>, React.Dispatch<React.SetStateAction<Array<ITaskState>>>]
>([[], () => {}]);
