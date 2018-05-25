import { REDUCER_NAME } from "../constants";

let initialState = {
  data: "Oi"
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REDUCER_NAME + "SET_DATA":
      return {
        ...state,
        data: action.data
      };
    default:
      return state;
  }
};
