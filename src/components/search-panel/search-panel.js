import React, { Component } from "react";

import "./search-panel.css";

export default class SearchPanel extends Component {
  state = {
    value: ""
  };

  sumbitForm = e => {};

  inputChanged = e => {
    const value = e.target.value;
    this.setState({
      value: value
    });
    const { query } = this.props;
    query(value);
    console.log(value);
  };

  render() {
    return (
      <form onSubmit={this.sumbitForm}>
        <div className="form-row">
          <div className="col-7">
            <input
              className="form-control align-middle"
              type="text"
              placeholder="Поиск"
              onChange={this.inputChanged}
              value={this.state.value}
            />
          </div>
          <div className="col">
            <button
              className="btn btn-outline-primary my-2 my-sm-0 align-middle"
              type="submit"
            >
              Найти
            </button>
          </div>
        </div>
      </form>
    );
  }
}
