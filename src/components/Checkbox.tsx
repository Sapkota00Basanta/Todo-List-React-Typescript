// Import Third-Party Modules
import React from 'react';
import styled from 'styled-components';

// Import User-Defined Modules
import { ICheckboxProps } from '../types/components/Checkbox.types';
import { globalColorsObject } from '../styles';

// Styled Components Definations
/**
 * Checkbox container to hold both hidden and customized
 * styled checkbox
 */
const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

/**
 * Native checkbox html element which is basically hidden
 * Since, it is not highly customizable.
 */
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  // Hide checkbox visually but remain accessible to screen readers.
  // Source: https://polished.js.org/docs/#hidevisually
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

/**
 * Custom checkbox styles applied to div which replaces
 * native checkbox.
 */
const StyledCheckbox = styled.div<{ checked: boolean }>`
  display: inline-block;
  width: 1.5625rem;
  height: 1.5625rem;
  background: ${(props) =>
    props.checked ? globalColorsObject.primaryColor : 'none'};
  border: 0.1875rem solid ${globalColorsObject.primaryColor};
  border-radius: 1.5625rem;
  transition: all 100ms;
`;

/**
 * This module consist of custom styled checkbox replacing
 * the native checkbox html element.
 * @returns Customized Checkbox Element
 */
export const Checkbox: React.FC<ICheckboxProps> = ({
  className,
  checked,
  ...props
}) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked} />
  </CheckboxContainer>
);
