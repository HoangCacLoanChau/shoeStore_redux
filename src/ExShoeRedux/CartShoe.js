import React, { Component } from "react";
import { connect } from "react-redux";
import { CHANGE_QUANTITY, REMOVE_ITEM } from "./constant/shoeConstant";
class CartShoe extends Component {
  render() {
    let renderCart = () => {
      return this.props.cartList.map((item, index) => {
        let { id, name, price, image, soLuong } = item;
        return (
          <tr key={index}>
            <td>{name}</td>
            <td>{price}</td>
            <td>
              <img src={image} width={100} alt="" />
            </td>
            <td>
              <button
                className="btn btn-dark"
                onClick={() => {
                  this.props.handleChangeSoLuong(id, false);
                }}
              >
                -
              </button>
              <span className="mx-3">{soLuong}</span>
              <button
                className="btn btn-success"
                onClick={() => {
                  this.props.handleChangeSoLuong(id, true);
                }}
              >
                +
              </button>
            </td>
            <td>
              <button
                className="btn btn-danger ml-2"
                onClick={() => {
                  this.props.handleRemove(id);
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        );
      });
    };
    return (
      <div className="col-6">
        <table className="table">
          <thead>
            <th>name</th>
            <th>price</th>
            <th>Image</th>
            <th>so Luong</th>
            <th>Action</th>
          </thead>
          <tbody>{renderCart()}</tbody>
        </table>
      </div>
    );
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    handleChangeSoLuong: (id, option) => {
      let action = {
        type: CHANGE_QUANTITY,
        payload: {
          id,
          option,
        },
      };
      dispatch(action);
    },
    handleRemove: (id) => {
      let action = {
        type: REMOVE_ITEM,
        payload: id,
      };
      dispatch(action);
    },
  };
};
let mapStateToProps = (state) => {
  return {
    cartList: state.shoeReducer.cart,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartShoe);
