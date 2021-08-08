import { INCREMENT, DECREMENT } from './constant';

export function incrementAction() {
  return {
    type: INCREMENT,
  };
}
export const decrementAction = counter => {
  return {
    type: DECREMENT,
  };
}
