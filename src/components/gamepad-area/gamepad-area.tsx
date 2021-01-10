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

  useGamepadButtonEvents({
    gamepadIndex: 0,
    accuracy: 1,
    LEFT: () => moveFocus('prev'),
    RIGHT: () => moveFocus('next'),
  });

  const moveFocus = (direction: 'prev' | 'next'): void => {
    const { focused, focusableItems } = state;
    const isFirstElement = focused === 0;
    const isLastElement = focused === focusableItems[focusableItems.length - 1];

    switch (direction) {
      case 'prev':
        !isFirstElement && setState({ focusableItems, focused: focused - 1 });
        break;
      default:
        !isLastElement && setState({ focusableItems, focused: focused + 1 });
    }
  };

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
