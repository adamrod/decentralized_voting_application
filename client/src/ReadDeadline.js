import React from "react";

class ReadDeadline extends React.Component {
  state = { dataKey1: null, dataKey2: null };

  componentDidMount() {
    const { drizzle } = this.props;

    const contract = drizzle.contracts.Election;

    // let drizzle know we want to watch the `candidate` method
    const dataKey1 = contract.methods["startTime"].cacheCall();
    const dataKey2 = contract.methods["deadline"].cacheCall();

    // save the `dataKey` to local component state for later reference
    this.setState({ dataKey1, dataKey2 });
  }

  render() {
    // get the contract state from drizzleState
    const { Election } = this.props.drizzleState.contracts;

    // using the saved `dataKey`, get the variable we're interested in
    const startTime = Election.startTime[this.state.dataKey1];
    const deadline = Election.deadline[this.state.dataKey2];

    return (
      <React.Fragment>
        <p>StartTime: {startTime && startTime.value}</p>
        <p>Deadline: {deadline && deadline.value}</p>
      </React.Fragment>
    );
  }
}

export default ReadDeadline;