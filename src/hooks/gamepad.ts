import { useState, useEffect } from 'react';
import { GamepadButtons, GamepadIndex, GamepadAxes } from '..';
import GamepadService from '../services/gamepad-service';
import {
  takeGamepad,
  takeGamepadButtons,
  takeGamepadAxes,
} from '../utils/gamepad';

/**
 * Subscribes to the gamepad changes
 * @param {GamepadIndex}index - gamepad index
 * @returns {Gamepad | null}gamepad if present
 */
export function useGamepad(index: GamepadIndex): Gamepad | null {
  const [gamepad, setGamepad] = useState<Gamepad | null>(null);

  useEffect(() => {
    GamepadService.init().subscribe((gamepads) => {
      const nextGp = takeGamepad(index, gamepads);

      if (nextGp && (!gamepad || gamepad.timestamp !== nextGp.timestamp)) {
        setGamepad(nextGp);
      }
    });
  }, []);

  return gamepad;
}

/**
 * Subscribes to the gamepad's buttons values
 * @param {GamepadIndex}index - gamepad index
 * @return {GamepadButtons | undefined}gamepad's buttons if present
 */
export function useGamepadButtons(
  index: GamepadIndex,
  accuracy?: number
): GamepadButtons | undefined {
  const gamepad = useGamepad(index);
  const [buttons, setButtons] = useState<GamepadButtons>();

  useEffect(() => {
    if (gamepad) {
      const nextButtons = takeGamepadButtons(gamepad, accuracy);

      setButtons(nextButtons);
    }
  }, [gamepad]);

  return buttons;
}

/**
 * Subscribes to the gamepad's axes values
 * @param {GamepadIndex}index - gamepad index
 * @param {number}accuracy - number of digits after the decimal point
 * @return {GamepadAxes | undefined}gamepad's axes if present
 */
export function useGamepadAxes(
  index: GamepadIndex,
  accuracy?: number
): GamepadAxes | undefined {
  const gamepad = useGamepad(index);
  const [axes, setAxes] = useState<GamepadAxes>();

  useEffect(() => {
    if (gamepad) {
      const nextAxes = takeGamepadAxes(gamepad, accuracy);

      setAxes(nextAxes);
    }
  }, [gamepad]);

  return axes;
}
