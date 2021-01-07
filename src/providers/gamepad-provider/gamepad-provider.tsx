import { useEffect, useState } from 'react'
import { GamepadProviderProps, ProvidedGamepad } from '.'
import { ProviderComponent } from '../types'
import GamepadService from './../../services/gamepad-service/index'
import { takeGamepad } from './../../utils/providers/gamepad'

export const GamepadProvider: ProviderComponent<
  GamepadProviderProps,
  ProvidedGamepad
> = ({ gamepad_index, children }) => {
  const [gamepad, setGamepad] = useState<Gamepad | null>(null)

  useEffect(() => {
    GamepadService.init().subscribe((gamepads) => {
      setGamepad(takeGamepad(gamepad_index, gamepads))
    })
  }, [])

  return children({ gamepad })
}
