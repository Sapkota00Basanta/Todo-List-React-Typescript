// Import Third-Party Modules
import { shuffle } from 'lodash';
import { nanoid } from 'nanoid';
import { useContext, useState } from 'react';

// Import User-Defined Modules
import { TaskContext } from '../contexts/taskStore';
import { ITaskState } from '../types/components/Listview.types';
import { IUseTaskStoreHookReturnTypes } from '../types/hooks/useTaskStore.types';

/**
 * This module handles storing and managing tasks related state data.
 * @returns TasksObjectAPI
 */
export const useTaskStore = (): IUseTaskStoreHookReturnTypes => {
  const [tasks, setTasks] = useContext(TaskContext);
  const [focusedTaskId, setFocusedTaskId] = useState<string | undefined>(
    undefined
  );

  /**
   * This method handles adding a new task to tasks state array &
   * assign the new task id as focused task id if there are none.
   * @param task ItaskState value with only label field
   */
  const addTask = (task: Pick<ITaskState, 'label'>) => {
    const id = nanoid();
    setTasks((tasks) => [
      ...tasks,
      { id, label: task.label, isComplete: false },
    ]);
    if (!focusedTaskId) setFocusedTaskId(id);
  };

  /**
   * This method handles the event listener
   * state data management of child component for marking a task as complete
   * @param taskId Unique task id
   * @param isComplete Boolena complete value
   */
  const updateTaskCompletion = (taskId: string, isComplete: boolean) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, isComplete };
        }
        return task;
      })
    );
  };

  /**
   * This selects among the list of tasks which are incomplete randomly
   */
  const focusedTask = tasks.filter((task) => task.id === focusedTaskId)[0];

  /**
   * This method handles shuffling among the incomplete set of tasks & select one and return it's id
   */
  const shuffleFocusedTask = () => {
    setFocusedTaskId(shuffle(tasks.filter((task) => !task.isComplete))[0]?.id);
  };

  const tasksPropsObjectAPI = {
    addTask,
    focusedTask,
    tasks,
    setTasks,
    shuffleFocusedTask,
    updateTaskCompletion,
  };

  return tasksPropsObjectAPI;
};
