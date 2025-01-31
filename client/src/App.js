import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import ReadTime from "./ReadTime";
import ReadCandidates from "./ReadCandidates";
import Vote from "./Vote";

class App extends Component {
  state = { loading: true, drizzleState: null };

  componentDidMount() {
    const { drizzle } = this.props;

    // subscribe to changes in the store
    this.unsubscribe = drizzle.store.subscribe(() => {

      // every time the store updates, grab the state from drizzle
      const drizzleState = drizzle.store.getState();

      // check to see if it's ready, if so, update local component state
      if (drizzleState.drizzleStatus.initialized) {
        this.setState({ loading: false, drizzleState });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    if (this.state.loading) return "Loading Drizzle...";
    return (
      <div className="App">
        <h1>Decentralized election!</h1>
        <ReadTime
          drizzle={this.props.drizzle}
          drizzleState={this.state.drizzleState}
        /> <br/>
        <ReadCandidates
          drizzle={this.props.drizzle}
          drizzleState={this.state.drizzleState}
        /> <br/>
        <Vote
          drizzle={this.props.drizzle}
          drizzleState={this.state.drizzleState}
        />
      </div>
    );
  }
}

export default App;
