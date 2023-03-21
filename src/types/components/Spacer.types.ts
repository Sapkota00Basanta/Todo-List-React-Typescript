/**
 * This module consists of all the type definations for Spacer Component
 */
export type ISpacerProps =
  | {
      flex: number;
      height?: never;
      width?: never;
    }
  | {
      flex?: never;
      height: number;
      width?: never;
    }
  | {
      flex?: never;
      height?: never;
      width: number;
    };
