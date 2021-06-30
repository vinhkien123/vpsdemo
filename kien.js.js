const TronWeb = require('tronweb');
const HttpProvider = TronWeb.providers.HttpProvider;
const fullNode = new HttpProvider(apiTron);
const solidityNode = new HttpProvider(apiTron);
const eventServer = new HttpProvider(apiTron);
const privateKey = "c88f4fabb9192c73547244304a7631c9ef23b10895b11fdfd62fa9d89839ac2b";
const tronWeb = new TronWeb(fullNode, solidityNode, eventServer, privateKey);

///// tạo ví
var walletsUSDT = await tronWeb.createAccount()

////// token BMK : TLKY611FoinVuyCRC4h3GJkmuaXfKZr9kW

//// nhận tự động usdt
 const trc20ContractAddress = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t" //mainnet USDT contract
 let contract = await tronWeb.contract().at(trc20ContractAddress);
await contract && contract.Transfer().watch((err, event) => {
    if (err)
        return console.error('Error with "Message" event:', err);
    console.group('New event received');
    console.log('- Contract Address:', event.contract);
    console.log('- Event Name:', event.name);
    console.log('- Transaction:', event.transaction);
    console.log('- Block number:', event.block);
    console.log('- Result:', event.result, '\n');
    console.groupEnd();
 

    
});