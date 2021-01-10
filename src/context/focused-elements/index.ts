import React from 'react';

export type TFocusedElementsContext = {
  focused: number;
  focusableItems: number[];
  addFocusableItem: (focusIndex: number) => void;
  removeFocusableItem: (focusIndex: number) => void;
};

const FocusedElementsContext = React.createContext<TFocusedElementsContext>({
  focused: 0,
  focusableItems: [],
  addFocusableItem: () => undefined,
  removeFocusableItem: () => undefined,
});

export default FocusedElementsContext;
