/**
 * This module consists of all the type definations for Spacer Component
 */
export type ISpacerProps =
  | {
      height: number;
      width?: never;
    }
  | {
      height?: never;
      width: number;
    };
