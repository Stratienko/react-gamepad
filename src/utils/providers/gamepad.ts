import { GamepadIndex, GamepadList, GamepadButtons, MappedGamepadButtons } from "../.."
import GAMEPAD_BUTTON_MAPPINGS from "../../mappings"

/**
 * Transforms iterable to array
 * @param {Iterable}target
 * @returns {Array}array
 */
function toRegularArray<T>(target: Iterable<T>): Array<T> {
  const resultArray: T[] = []

  for (const el of target) {
    resultArray.push(el)
  }

  return resultArray
}

/**
 * Selects gamepad from gamepad list by its index
 * @param {GamepadIndex}index - gamepad index
 * @param {GamepadList}gamepads - gamepad list to take from
 * @return {Gamepad | undefined} returns gamepad or null
 */
export function takeGamepad(
  index: GamepadIndex,
  gamepads: GamepadList
): Gamepad | null {
  const gp = toRegularArray(gamepads).filter(
    (gamepad) => gamepad && gamepad.index === index
  )[0]

  return gp
}
/**
 * Returns gamepad buttons array and gamepad mapping
 * @param {Gamepad}gamepad - Gamepad object
 * @return {GamepadButtons}gamepad buttons and mapping
 */
export function takeButtons({
  buttons, mapping
}: Gamepad): GamepadButtons {
  return {
    mapping,
    buttons: toRegularArray(buttons),
  }
}

/**
 * Adds names for the buttons;
 * @param {GamepadButtons}buttons - gamepad buttons to map from
 * @return {MappedGamepadButtons}mapped buttons
 */
export function mapGamepadButtons({
  mapping, buttons
}: GamepadButtons): MappedGamepadButtons {
  return buttons.map(({value, pressed, touched}, index) => {
    return {
      value,
      pressed,
      touched,
      index,
      name: GAMEPAD_BUTTON_MAPPINGS[mapping][index]
    }
  })
}
