require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area frame food grief rice stereo purchase install civil army general'; 
let testAccounts = [
"0x33e8fffe7cf9179f6542af611b7dd2ab111ac1e683e222c611e11a242f29b9ab",
"0x7db4f51c490c3a7831ddb71bef2174587775d9c333e5dbc4f75733139efd1164",
"0x8d9b9664fc7ff6dac135b62de61715c1195ef1598c74407d677dd94967ae9e69",
"0x4e4075f52860a2c5e4b89d65e886ce1768450e367e7018a20bbfdac49f1a0a71",
"0xcddad967a6eb0c57b7c5fce4ce305403dee4cfd33f683e9f9d06a301094416d1",
"0x15790a9aca485c737fab8a45d34a9a94b564389d98fd22e2b3fff5dfd1f7301d",
"0xede069df43322587a00de1b629d779c89cfe5170a3c46929a21185b9b0dac390",
"0x0d406090cd5babd9266503799e55cc4691a944072e0d0096bad865181f597fe5",
"0x8d77752da2e24ad2dd246e352b45a7a70a5c18505411ae2f831522f03cccfca2",
"0x79ddfd4730707d843c6107cda6698684f08db66b0cd87c31e8557bd751981234"
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


