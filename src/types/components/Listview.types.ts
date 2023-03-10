/**
 * This module consists of all the type decleration for Listview Component
 */
export interface IListViewProps {
  tasks: Array<ITaskState>;
  setTasks: React.Dispatch<React.SetStateAction<Array<ITaskState>>>;
  updateTaskCompletion: (taskId: string, isComplete: boolean) => void;
}

export interface ITaskState {
  id: string;
  label: string;
  isComplete: boolean;
}
