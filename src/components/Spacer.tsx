// Import Third-Party Modules
import React from 'react';

// Import User-Defined Modules
import { ISpacerProps } from '../types/components/Spacer.types';

/**
 * This module is a simple spacer div component used for adding
 * spaces between components either horizontally or vertically.
 * Without having to use margin for adding space.
 * @returns Spacer Div Component
 */
export const Spacer: React.FC<ISpacerProps> = ({ height, width, flex }) => {
  return <div style={{ height: `${height}rem`, width: `${width}rem`, flex }} />;
};
