export enum CountActionTypes {
  COUNTER_INCREMENT = '[Counter] Increment',
  COUNTER_DECREMENT = '[Counter] Decrement',
}

export interface CounterIncrementAction {
  readonly type: CountActionTypes.COUNTER_INCREMENT;
}

export interface CounterDecrementAction {
  readonly type: CountActionTypes.COUNTER_DECREMENT;
}

export type Action = CounterIncrementAction | CounterDecrementAction;
