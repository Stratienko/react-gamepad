import { GamepadProviderProps, ProvidedGamepad } from '.';
import { ProviderComponent } from '../types';
import { useGamepad } from '../../hooks/gamepad';

export const GamepadProvider: ProviderComponent<
  GamepadProviderProps,
  ProvidedGamepad
> = ({ gamepad_index, children }) => {
  const gamepad = useGamepad(gamepad_index);

  return children({ gamepad });
};
