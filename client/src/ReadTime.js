import React from "react";

class ReadTime extends React.Component {
  state = { startTimeKey: null, deadlineKey: null };

  componentDidMount() {
    const { drizzle } = this.props;

    const contract = drizzle.contracts.Election;

    const startTimeKey = contract.methods["startTime"].cacheCall();
    const deadlineKey = contract.methods["deadline"].cacheCall();

    this.setState({ startTimeKey, deadlineKey });
  }

  render() {
    const { Election } = this.props.drizzleState.contracts;

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