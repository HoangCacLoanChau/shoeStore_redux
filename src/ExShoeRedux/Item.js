import React, { Component } from "react";
import { connect } from "react-redux";
import { ADD_TO_CART, GET_DETAIL } from "./constant/shoeConstant";

class Item extends Component {
  render() {
    let { image, name } = this.props.item;
    return (
      <div className="card text-left col-4">
        <img className="card-img-top " src={image} alt="" />
        <div className="card-body ">
          <h4 className="card-title">{name}</h4>
          <p className="card-text">Body</p>
          <button
            className="btn btn-danger mr-2"
            onClick={() => {
              this.props.handleAddToCart(this.props.item);
            }}
          >
            ADD
          </button>
          <button
            className="btn btn-info"
            data-toggle="modal"
            data-target="#Modal"
            onClick={() => {
              this.props.handleGetDetail(this.props.item);
            }}
          >
            DETAIL
          </button>
        </div>
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    handleAddToCart: (shoe) => {
      let action = {
        type: ADD_TO_CART,
        payload: shoe,
      };
      dispatch(action);
    },
    handleGetDetail: (shoe) => {
      let action = {
        type: GET_DETAIL,
        payload: shoe,
      };
      dispatch(action);
    },
  };
};
export default connect(null, mapDispatchToProps)(Item);
