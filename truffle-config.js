require("dotenv").config();
var HDWalletProvider = require("@truffle/hdwallet-provider");

var mnemonic = process.env.MNEMONIC;
var publicMainnetNode = "https://public-node.rsk.co";

module.exports = {
  networks: {
    rskMainnet: {
      provider: () => new HDWalletProvider(mnemonic, publicMainnetNode),
      network_id: 30,

      networkCheckTimeout: 1e9,
    },
  },
  compilers: {
    solc: {
      version: "0.8.17",
      evmVersion: "byzantium",
    },
  },
};
