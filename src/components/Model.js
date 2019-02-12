import React, { Component } from "react";
import PropTypes from "prop-types";

class Model extends Component {
  state = {
    count: 0,
    total: 0
  };

  isAdd = price => {
    const { total } = this.state;
    this.setState({ total: total + price });
  };
  isDelete = price => {
    const { total } = this.state;
    if (total === 0) {
      this.setState({
        total: 0
      });
    } else {
      this.setState({ total: total - price });
    }
  };

  render() {
    const { id, name, price, currency, image } = this.props.data;
    return (
      <div className="row">
        <div className="col-6">
          <img src={image} alt="" />
          <h3>{name}</h3>
          <p>
            {currency} {price}
          </p>
          <button
            className="btn btn-primary btn-sm"
            onClick={() => this.isAdd(price)}
          >
            Add
          </button>
          <button
            className="btn btn-danger btn-sm m-2"
            onClick={() => this.isDelete(price)}
          >
            Remove
          </button>
          Rs:
          <span className="badge badge-primary m-2">{this.state.total}</span>
        </div>
      </div>
    );
  }
}

Model.propTypes = {
  data: PropTypes.object.isRequired
};

export default Model;
