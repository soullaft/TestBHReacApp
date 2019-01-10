import React, { Component } from "react";

import Candidate from "../candidate";

import "./candidates-list.css";

export default class CandidatesList extends Component {
  render() {
    const { candidatesData, deleteCandidate } = this.props;
    const newArray = candidatesData.map(candidate => {
      return (
        <Candidate
          candidateData={candidate}
          key={candidate.id}
          deleteCandidate={deleteCandidate}
        />
      );
    });

    //return <div className="candidates-list">{newArray}</div>;

    return <div className="candidates-list">{newArray}</div>;
  }
}
