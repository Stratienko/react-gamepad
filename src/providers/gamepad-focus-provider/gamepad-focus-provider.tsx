import { useContext, useEffect } from 'react';
import { GamepadFocusProviderProps, ProvidedFocus } from '.';
import FocusedElementsContext from '../../context/focused-elements';
import { ProviderComponent } from '../types';

export const GamepadFocusProvider: ProviderComponent<
  GamepadFocusProviderProps,
  ProvidedFocus
> = ({ focusIndex, children }) => {
  const context = useContext(FocusedElementsContext);
  const isFocused = context.focused === focusIndex;

  useEffect(() => {
    context.addFocusableItem(focusIndex);

    return () => {
      context.removeFocusableItem(focusIndex);
    };
  }, []);

  return children({ isFocused });
};
