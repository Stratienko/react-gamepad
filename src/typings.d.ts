type SubscriptionCanceller = { cancel: () => void }
export type GamepadList = (Gamepad | null)[]
export type GamepadsSubscriber = (gamepads: GamepadList) => void

export declare class IGamepadService {
  subscribe(subscriber: GamepadsSubscriber): SubscriptionCanceller
}
