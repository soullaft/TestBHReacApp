import React, { Component } from "react";

import SearchPanel from "../search-panel/";

import "./navigation-bar.css";

export default class NavigationBar extends Component {
  state = {
    currentPage: null
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="dropdown">
          <div
            className="userProfile btn btn-secondary dropdown-toggle"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img
              src="https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1"
              alt="user image"
            />
          </div>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">
              Мой профиль
            </a>
            <a className="dropdown-item" href="#">
              Настройки
            </a>
          </div>
        </div>
        <a className="navbar-brand text-primary" href="#">
          BEERHUNTERS
          <i className="fas fa-beer" style={{ margin: "10px" }} />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#" id="main">
                Главная <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#" id="candidates">
                Кандидаты <span className="sr-only" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Чат
              </a>
            </li>
          </ul>

          <SearchPanel query={this.props.query} />

          <div />
        </div>
      </nav>
    );
  }
}
