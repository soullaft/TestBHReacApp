import React, { Component } from "react";

import NavigationBar from "../navigation-bar";
import CandidatesList from "../candidates-list";
import Pagination from "../pagination";

import "./app.css";

export default class App extends Component {
  id = 1;

  state = {
    candidatesData: [
      this.createUser(
        "Кучин Игорь Владимирович",
        "1998-07-15",
        "89991584716",
        "Boss 50 lv"
      ),
      this.createUser(
        "Владимир Репной Попович",
        "1997-01-27",
        "89272351242",
        "Crooc 1 lv"
      ),
      this.createUser(
        "Радномное ФИО #1",
        "2002-11-7",
        "89991942573",
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
      ),
      this.createUser(
        "Радномное ФИО #2",
        "1995-04-28",
        "89172593206",
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
      )
    ],
    query: null
  };

  createUser(name, dBirth, phone, text) {
    return {
      id: this.id++,
      name: name,
      dBirth: new Date(dBirth).toISOString().substr(0, 10),
      phone: phone,
      comment: text
    };
  }

  setQuery = text => {
    this.setState({
      query: text
    });
  };

  search = text => {
    const { candidatesData } = this.state;

    if (!text) {
      return candidatesData;
    }

    const newArray = candidatesData.filter(
      el => el.name.toLowerCase().indexOf(text.toLowerCase()) !== -1
    );

    return newArray;
  };

  delete = id => {
    this.setState(({ candidatesData }) => {
      return {
        candidatesData: this.state.candidatesData.filter(el => el.id !== id)
      };
    });
  };

  render() {
    const array = this.search(this.state.query);

    return (
      <div>
        <NavigationBar query={this.setQuery} />
        <CandidatesList candidatesData={array} deleteCandidate={this.delete} />
        <Pagination />
      </div>
    );
  }
}
