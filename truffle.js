// Allows us to use ES6 in our migrations and tests.
require('babel-register');

module.exports = {
  networks: {
    "development": {
      host: '192.168.0.105',
      port: 8545,
      network_id: '*' // Match any network id
    },
    "prod": {
    network_id: 42,
    host: '************', //aws instance details
    port: 8000

    },
    "testnet": {
      network_id: 2,        // Official Ethereum test network
      host: "178.25.19.88", // Random IP for example purposes (do not use)
      port: 80
    },
    "raspberry": {
      network_id: '*',
      host: "*",
      port: 8545
    }
  }
}
