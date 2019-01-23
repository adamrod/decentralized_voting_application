import React from "react";

class Vote extends React.Component {
  state = { stackId: null };

  vote = () => {
    console.log(document.getElementById("ID_input").value);
    const { drizzle, drizzleState } = this.props;
    const contract = drizzle.contracts.Election;

    const stackId = contract.methods["vote"].cacheSend(document.getElementById("ID_input").value, {
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
      <React.Fragment>
        <div>
          ID: <input type="number" min="0" id="ID_input" /> <button type="button" onClick={this.vote}>Vote</button>
          <div>{this.getTxStatus()}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default Vote;