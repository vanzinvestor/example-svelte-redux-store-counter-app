import { fromCounterActions } from '../actions';

interface CountState {
  count: number;
}

const initialCounterState: CountState = {
  count: 0,
};

export const counterReducer = (
  state: CountState = initialCounterState,
  action: fromCounterActions.Action
): CountState => {
  switch (action.type) {
    case fromCounterActions.CountActionTypes.COUNTER_INCREMENT:
      return { ...state, count: state.count + 1 };

    case fromCounterActions.CountActionTypes.COUNTER_DECREMENT:
      return { ...state, count: state.count - 1 };

    default:
      return state;
  }
};
