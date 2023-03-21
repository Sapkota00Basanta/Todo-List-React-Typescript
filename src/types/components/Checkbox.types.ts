// Import Third-Party Modules
import { ComponentProps } from 'react';
import { StyledComponent } from 'styled-components';

/**
 * This module consists of all the type definations for
 * Checkbox Component. Here, props type is defined as
 * ComponentProps of Generic StyledComponent of Generic
 * type input, any and {}.
 */
export type ICheckboxProps = ComponentProps<StyledComponent<'input', any, {}>>;
