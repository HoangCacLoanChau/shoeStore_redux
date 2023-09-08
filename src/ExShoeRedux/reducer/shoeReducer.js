// snippet : rxreducer
import {
  ADD_TO_CART,
  CHANGE_QUANTITY,
  GET_DETAIL,
  GIAM,
  REMOVE_ITEM,
  TANG,
} from "../constant/shoeConstant";
import { data } from "../data";
// xoá default thêm tên class
const initialState = {
  shoeArr: data,
  cart: [],
  detail: {},
};
// thay vì object  tên action gồm type và payload thì ở đây để obj no name thôi
export let shoeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    ///////////////////////////////////////
    case ADD_TO_CART: {
      let cloneCart = [...state.cart];
      let index = cloneCart.findIndex((x) => {
        return x.id === payload.id;
      });
      if (index === -1) {
        let newShoe = { ...payload, soLuong: 1 };
        cloneCart.push(newShoe);
        console.log(cloneCart);
      } else {
        cloneCart[index].soLuong += 1;
      }
      // this.setState
      return { ...state, cart: cloneCart };
    }
    ///////////////////////////////////////////////
    case CHANGE_QUANTITY: {
      let cloneCart = [...state.cart];
      let i = cloneCart.findIndex((x) => {
        return x.id === payload.id;
      });
      payload.option === TANG && cloneCart[i].soLuong++;
      payload.option === GIAM &&
        cloneCart[i].soLuong-- &&
        cloneCart[i].soLuong === 0 &&
        cloneCart.splice(i, 1);
      return { ...state, cart: cloneCart };
    }
    ///////////////////////////////////////////////
    case REMOVE_ITEM: {
      let cloneCart = [...state.cart];
      let index2 = cloneCart.findIndex((x) => {
        return x.id === payload;
      });

      cloneCart.splice(index2, 1);
      return { ...state, cart: cloneCart };
    }

    ////////////////////////////////////////////////////
    case GET_DETAIL:
      state.detail = payload;
      return { ...state };
    default:
      return state;
  }
};
