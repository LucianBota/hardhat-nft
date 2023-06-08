require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();
require("solidity-coverage");
require("hardhat-deploy");
// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || "";
const SEPOLIA_RPC_URL =
	process.env.SEPOLIA_RPC_URL ||
	"https://eth-sepolia.g.alchemy.com/v2/K-l5Smlq_VKhZDl-yWYT3nh5soOMQ0a3";
const PRIVATE_KEY =
	process.env.PRIVATE_KEY ||
	"c8febc74f968d2fd094aa2b00370a31a99d7ceb657ee2dfb7b0139cc9187a03a";
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "";

module.exports = {
	defaultNetwork: "hardhat",
	networks: {
		hardhat: {},
		sepolia: {
			url: SEPOLIA_RPC_URL,
			accounts: [PRIVATE_KEY],
			chainId: 11155111,
		},
		localhost: {
			url: "http://localhost:8545",
			chainId: 31337,
		},
	},
	solidity: {
		compilers: [
			{
				version: "0.8.8",
			},
			{
				version: "0.6.6",
			},
		],
	},
	etherscan: {
		apiKey: ETHERSCAN_API_KEY,
	},
	gasReporter: {
		enabled: true,
		currency: "USD",
		outputFile: "gas-report.txt",
		noColors: true,
		coinmarketcap: COINMARKETCAP_API_KEY,
	},
	namedAccounts: {
		deployer: {
			default: 0, // here this will by default take the first account as deployer
			1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
		},
	},
};
