require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drum olympic smooth elegant note remain company harvest brand equal genuine'; 
let testAccounts = [
"0xf1be7c4e404eba41903a3e8737d5d2a6c95ebcb6079cf32c84e460596c7b2ce4",
"0xba8854b229e7216cb862df6080dbdce62abb6e67a12effb417e0af7280345676",
"0x288883ecf92c2159349371f4cd76bd9fd81bcf15e82f1c32e9f3aab64fbf6ffa",
"0xb64c10ad6cbd967e958e6e9c45ae609b5b5421d6e5dedd2965c45e2ddc87e7b3",
"0xd64a1c8794982001391dd1643fc02a9479b96c147ba5239874c62355d6f67f64",
"0x93f9e0ad8e9bea716794836b389b570c35ae8b3e2d28c93784904cf1d9495c35",
"0xa4462c7830439fa2d7ae4f8d03b721fbb2a8ebd6fc0ab6d2e45ecb35645c511a",
"0x5d6b2fd54b6e6dcd45ab9c17b762f5cbd0a1063479176cec6408a0456acb576d",
"0xa4c876e3a42aead54642302d49a218c2d5da1bd290f2e2aa834e0ec98d4d590a",
"0x6220568b6d2ddcc488ab40198a83777bbd7821535fdf25c75a2d92797a8af1f5"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


