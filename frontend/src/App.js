import React, { Component } from 'react';
import './App.css';

import web3 from './Ethereum/web3'
import deployedContractInstance from './Ethereum/basicContract'

class App extends Component {
  state = {
    message: 'Loading from smart contract...'
  }

  async componentDidMount() {
    const message = await deployedContractInstance.methods.test().call()
    this.setState({ message })
  }

  render() {
    return (
      <h1>Hello World! This is the message: { this.state.message } </h1>
    );
  }
}

export default App;
