import { ButtonNames } from '..';
import { standard } from './standard';

export type ButtonMapping = {
  [key: number]: ButtonNames;
};

const GAMEPAD_BUTTON_MAPPINGS = {
  standard,
};

export default GAMEPAD_BUTTON_MAPPINGS;
