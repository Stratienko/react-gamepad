import { GamepadProvider } from './gamepad-provider'

export type GamepadProviderProps = {
  gamepad_index: number;
}

export type ProvidedGamepad = {
  gamepad?: Gamepad;
}

export default GamepadProvider
