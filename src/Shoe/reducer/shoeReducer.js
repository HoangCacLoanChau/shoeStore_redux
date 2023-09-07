import { data } from "../data";

const initialState = {
  shoeList: data,
  cart: [],
  detailShoe: {},
};

export let shoeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
