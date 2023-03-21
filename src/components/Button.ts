// Import Third-Party Modules
import styled from 'styled-components';
import { globalColorsObject } from '../styles';

/**
 * This module simply exports styled button component
 */
export const Button = styled.button`
  border: none;
  border-radius: 0.9375rem;
  background: ${globalColorsObject.primaryColor};
  color: #000;
  height: 2.625rem;
  padding-left: 1.875rem;
  padding-right: 1.875rem;
`;
