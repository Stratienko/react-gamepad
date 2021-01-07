import * as React from 'react'
import GamepadProvider from './providers/gamepad-provider'
import styles from './styles.module.css'

export const ExampleComponent = () => {
  return (
    <React.Fragment>
      <GamepadProvider gamepad_index={0}>
        {({ gamepad }) => <div className={styles.test}>{gamepad?.id}</div>}
      </GamepadProvider>
      <GamepadProvider gamepad_index={1}>
        {({ gamepad }) => <div className={styles.test}>{gamepad?.id}</div>}
      </GamepadProvider>
    </React.Fragment>
  )
}
