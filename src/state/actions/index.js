export const DECREMENT = 'DECREMENT';
export function decrement() {
  return {
    type: DECREMENT,
    payload: null,
  };
}

export const INCREMENT = 'INCREMENT';
export function increment() {
  return {
    type: INCREMENT,
    payload: null,
  };
}
