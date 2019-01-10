import React, { Component } from "react";

import "./candidate.css";

export default class Candidate extends Component {
  state = {
    isReadOnly: true,
    changeButtonText: "Изменить данные",
    deleteButtonText: "Удалить",
    fio: this.props.candidateData.name,
    dBirth: this.props.candidateData.dBirth,
    phoneNumber: this.props.candidateData.phone,
    comment: this.props.candidateData.comment
  };

  onSubmitData = e => {
    const event = e.target.id;
    var text, deleteText;

    const { changeButtonText } = this.state;

    if (changeButtonText === "Изменить данные") {
      text = "Сохранить изменения";
      deleteText = "Отмена";
    } else {
      text = "Изменить данные";
      deleteText = "Удалить";
    }

    if (event === "change") {
      this.setState(({ isReadOnly, changeButtonText }) => {
        return {
          isReadOnly: !isReadOnly,
          changeButtonText: text,
          deleteButtonText: deleteText
        };
      });
    } else if (event === "delete") {
      const { deleteButtonText } = this.state;
      if (deleteButtonText === "Удалить") {
        //Delete action

        const { deleteCandidate, candidateData } = this.props;

        deleteCandidate(candidateData.id);
      } else {
        this.setState(({ isReadOnly, fio }) => {
          return {
            isReadOnly: !isReadOnly,
            changeButtonText: text,
            deleteButtonText: deleteText
          };
        });
      }
    }

    e.preventDefault();
  };

  render() {
    const { fio, dBirth, phoneNumber, comment } = this.state;

    return (
      <form
        className="candidate container shadow p-3 mb-5 bg-white rounded text-center"
        onSubmit={this.onSubmitData}
      >
        <div className="form-group">
          <img
            src="https://cs9.pikabu.ru/post_img/2017/03/19/7/og_og_1489918070278225806.jpg"
            alt="candidate photo"
            data-toggle="tooltip"
            data-placement="bottom"
            title={comment}
          />
        </div>
        <div className="form-group text-left">
          <label htmlFor="text">ФИО</label>
          <input
            type="text"
            className="form-control"
            id="text"
            aria-describedby="text"
            placeholder="Введите ФИО"
            readOnly={this.state.isReadOnly}
            value={fio}
            onChange={this.fioEdited}
          />
        </div>

        <div className="form-group text-left">
          <label htmlFor="date">Дата рождения</label>
          <input
            type="date"
            className="form-control"
            id="date"
            aria-describedby="date"
            readOnly={this.state.isReadOnly}
            value={dBirth}
          />
        </div>
        <div className="form-group text-left">
          <label htmlFor="phone">Номер телефона</label>
          <input
            type="phone"
            className="form-control"
            id="phone"
            aria-describedby="phone"
            readOnly={this.state.isReadOnly}
            value={phoneNumber}
          />
        </div>

        <div className="row">
          <div className="col-sm-12">
            <div className="text-center">
              <button
                className="btn btn-primary mr-3"
                id="change"
                onClick={this.onSubmitData}
              >
                {this.state.changeButtonText}
              </button>

              <button
                className="btn btn-danger ml-3"
                id="delete"
                onClick={this.onSubmitData}
              >
                {this.state.deleteButtonText}
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

//shadow p-3 mb-5 bg-white rounded text-center border border-primary
