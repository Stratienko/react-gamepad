import GamepadProvider from './providers/gamepad-provider'
import GamepadService from './services/gamepad-service/index';
import { takeGamepad, mapGamepadButtons, takeButtons } from './utils/providers/gamepad';

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

export { GamepadService, GamepadProvider, takeGamepad, takeButtons, mapGamepadButtons };
