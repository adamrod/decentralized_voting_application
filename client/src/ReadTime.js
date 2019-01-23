import React from "react";

class ReadTime extends React.Component {
  state = { startTimeKey: null, deadlineKey: null };

  componentDidMount() {
    const { drizzle } = this.props;

    const contract = drizzle.contracts.Election;

    // let drizzle know we want to watch the `candidate` method
    const startTimeKey = contract.methods["startTime"].cacheCall();
    const deadlineKey = contract.methods["deadline"].cacheCall();

    // save the `dataKey` to local component state for later reference
    this.setState({ startTimeKey, deadlineKey });
  }

  render() {
    // get the contract state from drizzleState
    const { Election } = this.props.drizzleState.contracts;

    // using the saved `dataKey`, get the variable we're interested in
    const startTime = Election.startTime[this.state.startTimeKey];
    const deadline = Election.deadline[this.state.deadlineKey];

    return (
      <React.Fragment>
        <p>StartTime: {startTime && startTime.value}</p>
        <p>Deadline: {deadline && deadline.value}</p>
      </React.Fragment>
    );
  }
}

export default ReadTime;