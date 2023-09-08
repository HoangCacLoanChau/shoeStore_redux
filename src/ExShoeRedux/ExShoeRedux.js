import React, { Component } from "react";
import CartShoe from "./CartShoe";
import ListShoe from "./ListShoe";
import DetailShoe from "./DetailShoe";
export default class ExShoeRedux extends Component {
  render() {
    return (
      <div>
        <div className="row ">
          <CartShoe />
          <ListShoe />
        </div>
        <DetailShoe />
      </div>
    );
  }
}
