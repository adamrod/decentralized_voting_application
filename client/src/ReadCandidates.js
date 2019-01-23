import React from "react";

class ReadCandidates extends React.Component {
  state = { dataKey: null };

  componentDidMount() {
    const { drizzle } = this.props;

    const contract = drizzle.contracts.Election;

    // let drizzle know we want to watch the `candidate` method
    const dataKey = contract.methods["candidates"].cacheCall(0);

    // save the `dataKey` to local component state for later reference
    this.setState({ dataKey });
  }

  render() {
    // get the contract state from drizzleState
    const { Election } = this.props.drizzleState.contracts;

    // using the saved `dataKey`, get the variable we're interested in
    const candidate = Election.candidates[this.state.dataKey];

    return (
      <React.Fragment>
        <p>Candidate: {candidate && candidate.value[1]}</p>
      </React.Fragment>
    );
  }
}

export default ReadCandidates;