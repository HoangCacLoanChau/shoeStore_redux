import React, { Component } from "react";
import Item from "./Item";
import { connect } from "react-redux";

class ListShoe extends Component {
  renderListShoe = () => {
    return this.props.shoeList.map((x, index) => {
      return <Item item={x} key={index} />;
    });
  };
  render() {
    return <div className="col-6 row">{this.renderListShoe()}</div>;
  }
}

let mapStateToProps = (state) => {
  return {
    shoeList: state.shoeReducer.shoeArr,
  };
};
export default connect(mapStateToProps)(ListShoe);
