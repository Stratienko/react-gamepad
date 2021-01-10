import React, { useState } from 'react';
import FocusedElementsContext, {
  TFocusedElementsContext,
} from '../../context/focused-elements';

type GamepadAreaState = Omit<
  TFocusedElementsContext,
  'addFocusableItem' | 'removeFocusableItem'
>;

export const GamepadArea: React.FC = ({ children }) => {
  const [state, setState] = useState<GamepadAreaState>({
    focused: 0,
    focusableItems: [],
  });

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
