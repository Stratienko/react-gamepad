import React, { useContext, useEffect } from 'react';
import { FocusableItemProps } from '.';
import FocusedElementsContext from '../../context/focused-elements';

export const FocusableItem: React.FC<FocusableItemProps> = ({
  focusIndex,
  children,
}) => {
  const context = useContext(FocusedElementsContext);
  const isFocused = context.focused === focusIndex;

  useEffect(() => {
    context.addFocusableItem(focusIndex);

    return () => {
      context.removeFocusableItem(focusIndex);
    };
  }, []);

  if (isFocused)
    return (
      <div>
        FOCUSED!
        <div>{children}</div>
      </div>
    );

  return (children || null) as React.ReactElement<any, any> | null;
};
