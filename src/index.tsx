import GamepadProvider from './providers/gamepad-provider';
import GamepadService from './services/gamepad-service';
import {
  takeGamepad,
  mapGamepadButtons,
  takeGamepadButtons,
  takeGamepadAxes,
} from './utils/gamepad';
import { useGamepad, useGamepadButtons, useGamepadAxes } from './hooks/gamepad';
import GamepadArea from './components/gamepad-area';
import GamepadFocusProvider from './providers/gamepad-focus-provider/index';

export type ButtonNames =
  | 'A'
  | 'B'
  | 'X'
  | 'Y'
  | 'LB'
  | 'RB'
  | 'LT'
  | 'RT'
  | 'VIEW'
  | 'MENU'
  | 'LS'
  | 'RS'
  | 'UP'
  | 'DOWN'
  | 'LEFT'
  | 'RIGHT'
  | 'XBOX';
export type GamepadButtonEvents = {
  [key in ButtonNames]?: (button: GamepadButton) => void;
};
export type GamepadIndex = 0 | 1 | 2 | 3;
export type GamepadList = (Gamepad | null)[];
export type GamepadButtons = {
  mapping: GamepadMappingType;
  id: string;
  buttons: GamepadButton[];
};
export type MappedGamepadButtons = (GamepadButton & {
  name: string;
  index: number;
})[];
export type GamepadAxes = {
  [key in 'lx' | 'ly' | 'rx' | 'ry']: number;
};

export {
  GamepadService,
  GamepadProvider,
  takeGamepad,
  takeGamepadButtons,
  takeGamepadAxes,
  mapGamepadButtons,
  useGamepad,
  useGamepadButtons,
  useGamepadAxes,
  GamepadArea,
  GamepadFocusProvider,
};
