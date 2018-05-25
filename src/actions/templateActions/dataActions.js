import { setData } from "./actionTypes";

export const setDataDelay = () => async dispatch => {
  setTimeout(() => {
    dispatch(setData("Teste"));
  }, 2000);
};
