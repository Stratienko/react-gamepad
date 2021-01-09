import { GamepadList } from '../..';
import { GamepadService } from './gamepad-service';

type SubscriptionCanceller = { cancel: () => void };
export type GamepadsSubscriber = (gamepads: GamepadList) => void;

export interface IGamepadService {
  init(): void;
  subscribe(subscriber: GamepadsSubscriber): SubscriptionCanceller;
}

export default new GamepadService();
