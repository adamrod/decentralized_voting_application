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

    var startTimeDate = null;
    var deadlineDate = null;
    if (startTime && deadline)
    {
      var startTimeDate = new Date(startTime.value * 1000);
      var deadlineDate = new Date(deadline.value * 1000);
    }

    return (
      <React.Fragment>
        <p>Election starts: {deadlineDate && startTimeDate.toString()}</p>
        <p>Election ends: {deadlineDate && deadlineDate.toString()}</p>
      </React.Fragment>
    );
  }
}

export default ReadTime;