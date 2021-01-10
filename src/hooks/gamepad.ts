import { useState, useEffect } from 'react';
import {
  GamepadButtons,
  GamepadIndex,
  GamepadAxes,
  GamepadButtonEvents,
} from '..';
import GamepadService from '../services/gamepad-service';
import {
  takeGamepad,
  takeGamepadButtons,
  takeGamepadAxes,
  mapGamepadButtons,
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
 * @param {number}accuracy - number of digits after the decimal point
 * @param {GamepadButtonEvents}events - gamepad button event handlers
 * @return {GamepadButtons | undefined}gamepad's buttons if present
 */
export function useGamepadButtons(
  index: GamepadIndex,
  accuracy?: number,
  events?: GamepadButtonEvents,
): GamepadButtons | undefined {
  const gamepad = useGamepad(index);
  const [buttons, setButtons] = useState<GamepadButtons>();
  const providedEvents = Object.keys(events || {});

  useEffect(() => {
    if (gamepad) {
      const nextButtons = takeGamepadButtons(gamepad, accuracy);

      if (JSON.stringify(buttons) !== JSON.stringify(nextButtons)) {
        setButtons(nextButtons);
      }
    }
  }, [gamepad]);

  useEffect(() => {
    if (buttons && events) {
      const mapped = mapGamepadButtons(buttons);

      providedEvents.forEach((buttonName) => {
        if (events[buttonName]) {
          const eventButton = mapped.find(({ name }) => buttonName === name);

          if (eventButton && eventButton.value !== 0) {
            const event = events[buttonName] as (button: GamepadButton) => void;

            event({
              value: eventButton.value,
              pressed: eventButton.pressed,
              touched: eventButton.touched,
            });
          }
        }
      });
    }
  }, [buttons]);

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
  accuracy?: number,
): GamepadAxes | undefined {
  const gamepad = useGamepad(index);
  const [axes, setAxes] = useState<GamepadAxes>();

  useEffect(() => {
    if (gamepad) {
      const nextAxes = takeGamepadAxes(gamepad, accuracy);

      if (JSON.stringify(axes) !== JSON.stringify(nextAxes)) {
        setAxes(nextAxes);
      }
    }
  }, [gamepad]);

  return axes;
}
