import { GamepadFocusProvider } from './gamepad-focus-provider';

export type GamepadFocusProviderProps = {
  focusIndex: number;
};

export type ProvidedFocus = {
  isFocused: boolean;
};

export default GamepadFocusProvider;
