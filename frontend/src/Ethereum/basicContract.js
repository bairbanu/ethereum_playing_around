import web3 from './web3'

const address = '0x8a8eb727648c1f3eb307da3f44a1492f3f3c0541'

const ABI = [
  {
    constant: true,
    inputs: [],
    name: "test",
    outputs: [
      {
        name: "",
        type: "string"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "newTest",
        type: "string"
      }
    ],
    name: "setTest",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor"
  }
]

export default new web3.eth.Contract(ABI, address)