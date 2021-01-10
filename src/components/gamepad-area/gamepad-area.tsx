import React, { useState } from 'react';
import FocusedElementsContext, {
  TFocusedElementsContext,
} from '../../context/focused-elements';
import { useGamepadButtonEvents } from '../../hooks/gamepad';

type GamepadAreaState = Omit<
  TFocusedElementsContext,
  'addFocusableItem' | 'removeFocusableItem'
>;

export const GamepadArea: React.FC = ({ children }) => {
  const [state, setState] = useState<GamepadAreaState>({
    focused: 0,
    focusableItems: [],
  });

  const { focused, focusableItems } = state;
  const prev = () => (focused === 0 ? focused : focused - 1);
  const next = () =>
    focused === focusableItems[focusableItems.length - 1]
      ? focused
      : focused + 1;

  useGamepadButtonEvents({
    gamepadIndex: 0,
    accuracy: 1,
    LEFT: () => moveFocus(prev()),
    RIGHT: () => moveFocus(next()),
  });

  const moveFocus = (focused: number): void =>
    setState({ focusableItems, focused });

  const addFocusableItem = (gamepadIndex: number): void => {
    const { focused, focusableItems } = state;

    setState({
      focused,
      focusableItems: [...focusableItems, gamepadIndex],
    });
  };

  const removeFocusableItem = (gamepadIndex: number): void => {
    const { focused, focusableItems } = state;

    setState({
      focused,
      focusableItems: focusableItems.filter(
        (gpIndex) => gpIndex !== gamepadIndex,
      ),
    });
  };

  return children ? (
    <FocusedElementsContext.Provider
      value={{ ...state, addFocusableItem, removeFocusableItem }}
    >
      {children}
    </FocusedElementsContext.Provider>
  ) : null;
};
