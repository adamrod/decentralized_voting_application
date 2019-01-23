import React from "react";

class Vote extends React.Component {
  state = { stackId: null };

  handleKeyDown = e => {
    if (e.keyCode === 13) {
      this.vote(e.target.value);
    }
  };

  vote = value => {
    const { drizzle, drizzleState } = this.props;
    const contract = drizzle.contracts.Election;

    const stackId = contract.methods["vote"].cacheSend(value, {
      from: drizzleState.accounts[0]
    });

    this.setState({ stackId });
  };

  getTxStatus = () => {
    const { transactions, transactionStack } = this.props.drizzleState;

    const txHash = transactionStack[this.state.stackId];

    if (!txHash) return null;
    return `Transaction status: ${transactions[txHash].status}`;
  };

  render() {
    return (
      <div>
        <input type="text" onKeyDown={this.handleKeyDown} />
        <div>{this.getTxStatus()}</div>
      </div>
    );
  }
}

export default Vote;