import React from "react";

class ReadCandidates extends React.Component {
  state = { candidateKeyList: [] };

  componentDidMount() {
    const { drizzle } = this.props;

    const contract = drizzle.contracts.Election;

    contract.methods.candidatesCount().call().then((candidatesCount) => {
      var candidateKeyList = [];
      for (var i = 0; i < candidatesCount; i++) {
        const candidateKey = contract.methods["candidates"].cacheCall(i);
        candidateKeyList.push(candidateKey);
      }
      this.setState({ candidateKeyList });
    });
  }

  render() {
    const { Election } = this.props.drizzleState.contracts;

    const candidatesCount = this.state.candidateKeyList.length;
    var candidates = [];
    for (var i = 0; i < candidatesCount; i++) {
      candidates.push(Election.candidates[this.state.candidateKeyList[i]]);
    }
     
    return (
      <React.Fragment>
      <table align="center">
        <thead align="left">
          <tr>
            <th>Candidate</th>
            <th>Votes</th>
          </tr>
        </thead>
        <tbody align="left">
          <tr>
            <td>{candidates[0] && candidates[0].value[1]}</td>
            <td>{candidates[0] && candidates[0].value[2]}</td>
          </tr>
          <tr>
            <td>{candidates[1] && candidates[1].value[1]}</td>
            <td>{candidates[1] && candidates[1].value[2]}</td>
          </tr>
        </tbody>
      </table>
      </React.Fragment>
    );
  }
}

export default ReadCandidates;