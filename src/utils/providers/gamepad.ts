import { GamepadList } from '../../typings'

/**
 *
 * @param target
 */
function toRegularArray<T>(target: Iterable<T>): Array<T> {
  const resultArray: T[] = []

  for (const el of target) {
    resultArray.push(el)
  }

  return resultArray
}

/**
 *
 * @param index
 * @param gamepads
 */
export function takeGamepad(
  index: number,
  gamepads: GamepadList
): Gamepad | undefined {
  const gp = toRegularArray(gamepads).filter(
    (gamepad) => gamepad && gamepad.index === index
  )[0]

  return gp as Gamepad | undefined
}
