import { INCREMENT, DECREMENT } from './constant';
import { increment, decrement } from '../../utils/counterUtils';

export const initialState = {
  counter: 0,
};

export default function homeContainerReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: increment(state.counter) }
    case DECREMENT:
      return { ...state, counter: decrement(state.counter) }
    default:
      return state;
  }
}
