import React, { Component } from 'react';
import './App.css';

import web3 from './Ethereum/web3'
import deployedContractInstance from './Ethereum/basicContract'

class App extends Component {
  state = {
    message: 'Loading from smart contract...',
    value: ''
  }

  async componentDidMount() {
    const message = await deployedContractInstance.methods.test().call()
    this.setState({ message })
  }

  onSubmit = async event => {
    event.preventDefault()

    const accounts = await web3.eth.getAccounts()

    await deployedContractInstance.methods.setTest(this.state.value).send({
      from: accounts[0],
      gas: '1000000'
    })

    const message = await deployedContractInstance.methods.test().call()
    this.setState({ message })
  }

  render() {
    return (
      <div>
        <h1>This is the message: { this.state.message } </h1>

        <form onSubmit={ this.onSubmit }>
          <label> Change message: </label>
          <input type="text" value={this.state.value} onChange={ event => this.setState({ value: event.target.value }) } /> 
          <button> Submit </button>
        </form>
      </div>
    );
  }
}

export default App;
