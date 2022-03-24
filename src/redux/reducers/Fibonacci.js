import { ADD_NUMBER } from "../ActionTypes";
import { Add_number_to_array, detect_fibonacci } from "./utils";

const ArraySize = {
  i: 50,
  j: 50,
};

const initState = {
  matrix: new Array(ArraySize.i)
    .fill(0)
    .map(() => new Array(ArraySize.j).fill(undefined)),
  i_change: null,
  j_change: null,
  value: null,
};

export const Fibonacci = (state = initState, action) => {
  switch (action.type) {
    case ADD_NUMBER:
      let tmpMatrix = Add_number_to_array(state.matrix, action);
      state.matrix = detect_fibonacci(
        tmpMatrix,
        action.cell_information.i,
        action.cell_information.j
      );

      return {
        ...state,
      };

    default:
      return state;
  }
};
