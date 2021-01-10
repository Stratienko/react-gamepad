import React from 'react';
import 'react-gamepad/dist/index.css';
import { GamepadArea, FocusableItem } from 'react-gamepad'

const App = () => {
  return (
    <GamepadArea>
       <FocusableItem focusIndex={0}>Hello</FocusableItem>
       <FocusableItem focusIndex={1}>World</FocusableItem>
    </GamepadArea>
  )
}

export default App
