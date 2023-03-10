// Import Third-Party Modules
import React from 'react';

// Import User-Defined Modules
import { IFocusProps } from '../../types/components/Focus.types';

/**
 * This module consist of focus view displaying single focused todo list
 * @returns Focus View Component
 */
export const Focus: React.FC<IFocusProps> = ({ tasks }) => {
  return tasks[0] ? <>{tasks[0].label}</> : <>No tasks found.</>;
};
