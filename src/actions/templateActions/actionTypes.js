import { REDUCER_NAME } from "../../constants";

export const setData = data => ({
  type: REDUCER_NAME + "SET_DATA",
  data: data
});
