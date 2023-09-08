import React, { Component } from "react";
import { connect } from "react-redux";

class DetailShoe extends Component {
  render() {
    let { name, image } = this.props.detailShoe;
    return (
      <div>
        <div
          className="modal fade"
          id="Modal"
          tabIndex={-1}
          aria-labelledby="ModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="ModalLabel">
                  {name}
                </h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="card border-0">
                  <img className="card-img-top " src={image} alt="" />
                  <div className="card-body ">
                    <h4 className="card-title">{name}</h4>
                    <p className="card-text">Body</p>
                  </div>
                </div>
              </div>
              <div className="modal-footer"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    detailShoe: state.shoeReducer.detail,
  };
};
export default connect(mapStateToProps)(DetailShoe);
