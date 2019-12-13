import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      name: "",
      type: "",
      count: "",
      price: ""
    };

    this.state = this.initialState;
  }

  submitForm = () => {
    const newState = { ...this.state };
    newState.count = parseInt(newState.count);
    newState.price = parseFloat(newState.price);
    this.props.update(newState);
    this.setState(this.initialState);
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    const { name, type, price, count } = this.state;

    return (
      <div className="form-row">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Type"
            name="type"
            value={type}
            onChange={this.handleChange}
          />
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Count"
            name="count"
            value={count}
            onChange={this.handleChange}
          />
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Price"
            name="price"
            value={price}
            onChange={this.handleChange}
          />
        </div>
        <button className="btn btn-primary" onClick={() => this.submitForm()}>
          Submit
        </button>
      </div>
    );
  }
}

export default Form;
