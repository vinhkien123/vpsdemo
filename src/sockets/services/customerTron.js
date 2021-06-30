const TronWeb = require('tronweb');
const qrcode = require('qrcode')
const otplib = require('otplib')
const { authenticator } = otplib
const validateToken = require('../functions/validation')
const serviceName = "BlockChain-Farm"
const HttpProvider = TronWeb.providers.HttpProvider;
const fullNode = new HttpProvider("https://api.trongrid.io");
const solidityNode = new HttpProvider("https://api.trongrid.io");
const eventServer = new HttpProvider("https://api.trongrid.io");
const privateKey = "2e485b5e6621b4f60c081e7202fa2fcf9e1a2fedf8ee46ffa99a35e97cdf9365";
const tronWeb = new TronWeb(fullNode, solidityNode, eventServer, privateKey);
const CryptoUtils = require("@tronscan/client/src/utils/crypto");
const TransactionUtils = require("@tronscan/client/src/utils/transactionBuilder");
const customerQuery = require('../queries/customerQuery');
const tokenBLF = "TLk4SnKJ2svN3a3qi48ALy2cDMhQAgkQte"
const jquery = require('jquery')
module.exports = {


    testTron: async (params) => {
  
       //    const a = await tronWeb.trx.getTransactionInfo("816c3e5a0c4c6310b5be8b11c37cdc3378f14032153ec40d497d54f0602b9321");
        // tronWeb.trx.getBalance('TPHUhb3rKpaDcHvt1eTsKcck57m9vYd8Ya').then(result => console.log(result/1e6))
        // const privateKey = "...";
        // const address = "TPHUhb3rKpaDcHvt1eTsKcck57m9vYd8Ya";
        // //Get account information，Query the trx balance by the balance in the return value.
        // let tradeobj = await tronWeb.trx.getAccount(
        //     address,
        // );
        // console.log('- Output:', tradeobj, '\n');
        // Address B transfers 10 USDT from address A to C: B calls transferFrom (A, C, 10)
        // const trc20ContractAddress = "TLk4SnKJ2svN3a3qi48ALy2cDMhQAgkQte";//contract address
        // try {
        //     let contract = await tronWeb.contract().at(trc20ContractAddress);
        //     //Use send to execute a non-pure or modify smart contract method on a given smart contract that modify or change values on the blockchain.
        //     // These methods consume resources(bandwidth and energy) to perform as the changes need to be broadcasted out to the network.
        //     let amout = 1 * 1e18 // 50000
        //     let result = await contract.transfer(
        //         "TMN6UbqkNBDRYS2ifJ6cxVHBfowDwpR888", //address _to
        //         `${amout}`,
        //         // {
        //         //     asdsadsad: " asdasdasdasdasdasd",
        //         //     blockchain : "teltelel succeesss"
        //         // }       //amount
        //     ).send({
        //         feeLimit: 1 * 1e9
        //     }).then(output => { console.log('- Output:', output, '\n'); });
        //     console.log('result: ', result);
        // } catch (error) {
        //     console.error("trigger smart contract error", error)
        // }
        /// parseInt(result._hex)/1e18
        /// getWallet BLF
        // const trc20ContractAddress = "TLk4SnKJ2svN3a3qi48ALy2cDMhQAgkQte";//contract address
        // var address = "TFE7znZeQ4L7LjKFDQZWbFQZibjHZ2p8ni";

        // try {
        //     let contract = await tronWeb.contract().at(trc20ContractAddress);
        //     //Use call to execute a pure or view smart contract method.
        //     // These methods do not modify the blockchain, do not cost anything to execute and are also not broadcasted to the network.
        //     let result = await contract.balanceOf(address).call();
        //     console.log('result: ', result._hex, parseInt(result._hex) / 1e18);
        // } catch (error) {
        //     console.error("trigger smart contract error", error)
        // }




        ////// send token
        // let a = await tronWeb.contract()

        // console.log(a);


        // let contract = await tronWeb.contract.at('410b0dc28465ccdca86e5e2556806d2678da8c3743');
        // contract.eventMethod().watch((err, event) => {
        //     if (err) {
        //         return console.error('Error with "method" event:', err);
        //     }
        //     if (event) {
        //         // some function
        //         return {event}
        //     }
        // });
        // console.log("ok");
        // let param1 = {
        //     data: "Test",

        // }

        ///// create fee limit 
        // let abi = '[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"sender","type":"address"},{"name":"recipient","type":"address"},{"name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"recipient","type":"address"},{"name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"}]';
        // let code = '608060405234801561001057600080fd5b50d3801561001d57600080fd5b50d2801561002a57600080fd5b506040518060400160405280600e81526020017f426c6f636b436861696e4661726d0000000000000000000000000000000000008152506040518060400160405280600381526020017f424c460000000000000000000000000000000000000000000000000000000000815250601282600390805190602001906100af92919061029d565b5081516100c390600490602085019061029d565b506005805460ff191660ff92909216919091179055506100ff9050336100e7610104565b60ff16600a0a64e8d4a510000261010e60201b60201c565b610335565b60055460ff165b90565b6001600160a01b03821661018357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b61019c8160025461022260201b61078c1790919060201c565b6002556001600160a01b038216600090815260208181526040909120546101cc91839061078c610222821b17901c565b6001600160a01b0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b60008282018381101561029657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106102de57805160ff191683800117855561030b565b8280016001018555821561030b579182015b8281111561030b5782518255916020019190600101906102f0565b5061031792915061031b565b5090565b61010b91905b808211156103175760008155600101610321565b6108ad80620003456000396000f3fe608060405234801561001057600080fd5b50d3801561001d57600080fd5b50d2801561002a57600080fd5b50600436106100b35760003560e01c806306fdde03146100b8578063095ea7b31461013557806318160ddd1461017557806323b872dd1461018f578063313ce567146101c557806339509351146101e357806370a082311461020f57806395d89b4114610235578063a457c2d71461023d578063a9059cbb14610269578063dd62ed3e14610295575b600080fd5b6100c06102c3565b6040805160208082528351818301528351919283929083019185019080838360005b838110156100fa5781810151838201526020016100e2565b50505050905090810190601f1680156101275780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101616004803603604081101561014b57600080fd5b506001600160a01b038135169060200135610359565b604080519115158252519081900360200190f35b61017d61036f565b60408051918252519081900360200190f35b610161600480360360608110156101a557600080fd5b506001600160a01b03813581169160208101359091169060400135610375565b6101cd6103cc565b6040805160ff9092168252519081900360200190f35b610161600480360360408110156101f957600080fd5b506001600160a01b0381351690602001356103d5565b61017d6004803603602081101561022557600080fd5b50356001600160a01b0316610411565b6100c061042c565b6101616004803603604081101561025357600080fd5b506001600160a01b03813516906020013561048d565b6101616004803603604081101561027f57600080fd5b506001600160a01b0381351690602001356104c9565b61017d600480360360408110156102ab57600080fd5b506001600160a01b03813581169160200135166104d6565b60038054604080516020601f600260001961010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561034f5780601f106103245761010080835404028352916020019161034f565b820191906000526020600020905b81548152906001019060200180831161033257829003601f168201915b5050505050905090565b6000610366338484610501565b50600192915050565b60025490565b60006103828484846105ed565b6001600160a01b0384166000908152600160209081526040808320338085529252909120546103c29186916103bd908663ffffffff61072f16565b610501565b5060019392505050565b60055460ff1690565b3360008181526001602090815260408083206001600160a01b038716845290915281205490916103669185906103bd908663ffffffff61078c16565b6001600160a01b031660009081526020819052604090205490565b60048054604080516020601f600260001961010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561034f5780601f106103245761010080835404028352916020019161034f565b3360008181526001602090815260408083206001600160a01b038716845290915281205490916103669185906103bd908663ffffffff61072f16565b60006103663384846105ed565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b0383166105465760405162461bcd60e51b81526004018080602001828103825260248152602001806108566024913960400191505060405180910390fd5b6001600160a01b03821661058b5760405162461bcd60e51b815260040180806020018281038252602281526020018061080f6022913960400191505060405180910390fd5b6001600160a01b03808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b0383166106325760405162461bcd60e51b81526004018080602001828103825260258152602001806108316025913960400191505060405180910390fd5b6001600160a01b0382166106775760405162461bcd60e51b81526004018080602001828103825260238152602001806107ec6023913960400191505060405180910390fd5b6001600160a01b0383166000908152602081905260409020546106a0908263ffffffff61072f16565b6001600160a01b0380851660009081526020819052604080822093909355908416815220546106d5908263ffffffff61078c16565b6001600160a01b038084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600082821115610786576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b6000828201838110156107e4576040805162461bcd60e51b815260206004820152601b60248201527a536166654d6174683a206164646974696f6e206f766572666c6f7760281b604482015290519081900360640190fd5b939250505056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f2061646472657373a26474726f6e58203855978bd59f2f197dec0e43651d4a7395cabce9e5f9343a3fd126404e9066f564736f6c634300050a0031';
        // let contract_instance = await tronWeb.contract().new({
        //     abi: JSON.parse(abi),
        //     bytecode: code,
        //     feeLimit: 1e6,  // Set fee limit
        //     callValue: 0,
        //     userFeePercentage: 30,
        //     originEnergyLimit: 1e6,
        //     // parameters: ["asfasfaff"]
        // })
        // console.log("ok");
        // console.log(contract_instance.address);

        //// get symbol
        // const trc20ContractAddress = "TLk4SnKJ2svN3a3qi48ALy2cDMhQAgkQte";//contract address

        // try {
        //     let contract = await tronWeb.contract().at(trc20ContractAddress);
        //     //Use call to execute a pure or view smart contract method.
        //     // These methods do not modify the blockchain, do not cost anything to execute and are also not broadcasted to the network.
        //     let result = await contract.symbol().call();
        //     console.log('result: ', result);
        // } catch(error) {
        //     console.error("trigger smart contract error",error)
        // }
        /// get total token

        // const trc20ContractAddress = "TLk4SnKJ2svN3a3qi48ALy2cDMhQAgkQte";//contract address

        // try {
        //     let contract = await tronWeb.contract().at(trc20ContractAddress);
        //     //Use call to execute a pure or view smart contract method.
        //     // These methods do not modify the blockchain, do not cost anything to execute and are also not broadcasted to the network.
        //     let result = await contract.totalSupply().call();
        //     console.log('result: ', result);
        // } catch(error) {
        //     console.error("trigger smart contract error",error)
        // }


        // //// transfer
        // const trc20ContractAddress = "TLk4SnKJ2svN3a3qi48ALy2cDMhQAgkQte";//contract address
        // var address = "TPHUhb3rKpaDcHvt1eTsKcck57m9vYd8Ya";

        // try {
        //     let contract = await tronWeb.contract().at(trc20ContractAddress);
        //     //Use send to execute a non-pure or modify smart contract method on a given smart contract that modify or change values on the blockchain.
        //     // These methods consume resources(bandwidth and energy) to perform as the changes need to be broadcasted out to the network.
        //     let amout = 1 * 1e18 // 50000
        //     let result = await contract.transfer(
        //         "TYHPz6UBJxxnfFZCHsZhrqbxnjHaAwVaxB", //address _to
        //         `${amout}`,
        //         // {
        //         //     asdsadsad: " asdasdasdasdasdasd",
        //         //     blockchain : "teltelel succeesss"
        //         // }       //amount
        //     ).send({
        //         feeLimit: 1 * 1e9
        //     }).then(output => { console.log('- Output:', output, '\n'); });
        //     console.log('result: ', result);
        // } catch (error) {
        //     console.error("trigger smart contract error", error)
        // }




        ///// get coin wallet tron

        // const trc20ContractAddress = "TLk4SnKJ2svN3a3qi48ALy2cDMhQAgkQte";//contract address
        // const address = "TFE7znZeQ4L7LjKFDQZWbFQZibjHZ2p8ni"
        // try {
        //     let contract = await tronWeb.contract().at(trc20ContractAddress);
        //     //Use call to execute a pure or view smart contract method.
        //     // These methods do not modify the blockchain, do not cost anything to execute and are also not broadcasted to the network.
        //     let result = await contract.balanceOf("TPHUhb3rKpaDcHvt1eTsKcck57m9vYd8Ya").call();
        //     console.log('result: ', result);
        //     return result
        // } catch (error) {

        //     console.error("trigger smart contract error", error)
        //     return error
        // }

        // console.log("aaa");
        // const token = "TLk4SnKJ2svN3a3qi48ALy2cDMhQAgkQte";
        // const fromAddress = CryptoUtils.pkToAddress(privateKey);
        // const toAddress = "TFE7znZeQ4L7LjKFDQZWbFQZibjHZ2p8ni";
        // const amount = 1;

        // let transaction = TransactionUtils.buildTransferTransaction(token, fromAddress, toAddress, amount);

        // let signedTransaction = CryptoUtils.signTransaction(privateKey, transaction);
        // console.log(signedTransaction);
    },
}