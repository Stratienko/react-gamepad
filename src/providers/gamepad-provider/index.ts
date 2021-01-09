import { GamepadIndex } from '../..';
import { GamepadProvider } from './gamepad-provider';

export type GamepadProviderProps = {
  gamepad_index: GamepadIndex;
};

export type ProvidedGamepad = {
  gamepad: Gamepad | null;
};

export default GamepadProvider;
