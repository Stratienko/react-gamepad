import { GamepadsSubscriber, IGamepadService } from "."

export class GamepadService implements IGamepadService {
  private activeGamepads: Gamepad[] = []
  private subscriptions: GamepadsSubscriber[] = []
  private animationFrameId: number | null = null
  private cancelSubscription(index: number): void {
    this.subscriptions = this.subscriptions.filter((_el, i) => i !== index)
  }

  public init(): GamepadService{
    if (!this.animationFrameId) {
      window.addEventListener('gamepadconnected', (event) => {
        const { gamepad } = event as GamepadEvent

        const pollGamepads = () => {
          for (const subscription of this.subscriptions) {
            subscription(navigator.getGamepads())
          }

          this.animationFrameId = window.requestAnimationFrame(pollGamepads)
        }

        this.activeGamepads = [...this.activeGamepads, gamepad]

        if (!this.animationFrameId) pollGamepads()
      })

      window.addEventListener('gamepaddisconnected', (event) => {
        const { gamepad } = event as GamepadEvent

        this.activeGamepads = this.activeGamepads.filter(
          ({ index }) => index !== gamepad.index
        )

        if (this.animationFrameId && this.activeGamepads.length === 0) {
          window.cancelAnimationFrame(this.animationFrameId)

          this.animationFrameId = null;
        }
      })
    }

    return this
  }

  public subscribe(subscriber: GamepadsSubscriber) {
    const subscriberIndex = this.subscriptions.length

    this.subscriptions = [...this.subscriptions, subscriber]

    return {
      cancel: () => this.cancelSubscription(subscriberIndex)
    }
  }
}
