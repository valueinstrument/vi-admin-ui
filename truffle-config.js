const path = require("path");
const mnemonic = require('./mnemonic');
const HDWalletProvider = require( 'truffle-hdwallet-provider' );

module.exports = {
  contracts_build_directory: path.join(__dirname, "app/src/contracts"),
  networks: {
    develop: {
      // host: "127.0.0.1",
      // port: 8545,
      // network_id: "*"
      provider: function() {
        return new HDWalletProvider( mnemonic.getMnemonic(), 'http://127.0.0.1:8545/' );
      },
      network_id: "*",
    }
  },
  compilers: {
      solc: {
        settings: {
          optimizer: {
            enabled: true
          }
        }
      }
    }
};
