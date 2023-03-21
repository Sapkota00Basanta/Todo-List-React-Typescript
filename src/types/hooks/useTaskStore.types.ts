// Import User-Defined Modules
import { ITaskState } from '../screens/Listview.types';

/**
 * This module consists of all the type decleration
 * for useTaskStore custom Hook.
 */
export interface IUseTaskStoreHookReturnTypes {
  addTask: (task: Pick<ITaskState, 'label'>) => void;
  focusedTask?: ITaskState;
  tasks: Array<ITaskState>;
  shuffleFocusedTask: () => void;
  setTasks: React.Dispatch<React.SetStateAction<Array<ITaskState>>>;
  updateTaskCompletion: (taskId: string, isComplete: boolean) => void;
}
