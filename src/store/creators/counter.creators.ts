import type { Dispatch } from 'redux';
import { fromCounterActions } from './../actions';

export const increment =
  () => async (dispatch: Dispatch<fromCounterActions.Action>) => {
    dispatch({ type: fromCounterActions.CountActionTypes.COUNTER_INCREMENT });
  };

export const decrement =
  () => async (dispatch: Dispatch<fromCounterActions.Action>) => {
    dispatch({ type: fromCounterActions.CountActionTypes.COUNTER_DECREMENT });
  };
