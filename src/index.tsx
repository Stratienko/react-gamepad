import GamepadProvider from './providers/gamepad-provider';
import GamepadService from './services/gamepad-service';
import {
  takeGamepad,
  mapGamepadButtons,
  takeButtons,
  takeGamepadAxes,
} from './utils/gamepad';
import { useGamepad, useGamepadButtons, useGamepadAxes } from './hooks/gamepad';

export type GamepadIndex = 0 | 1 | 2 | 3
export type GamepadList = (Gamepad | null)[]
export type GamepadButtons = {
  mapping: GamepadMappingType;
  buttons: GamepadButton[];
}
export type MappedGamepadButtons = (GamepadButton & {
  name: string;
  index: number;
})[]
export type GamepadAxes = {
  [key in 'lx' | 'ly' | 'rx' | 'ry']: number;
};

export {
  GamepadService,
  GamepadProvider,
  takeGamepad,
  takeButtons,
  takeGamepadAxes,
  mapGamepadButtons,
  useGamepad,
  useGamepadButtons,
  useGamepadAxes,
};
