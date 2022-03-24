import { ADD_NUMBER  } from "../ActionTypes";

export const add_number= (cell_information) => {
    return {
      type: ADD_NUMBER,
      cell_information
    };
  };


  