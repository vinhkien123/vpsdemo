const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const server = require('http').Server(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 4000
const router = require('express').Router()
var path = require('path');
const socketModule = require('./sockets/socket');
const realtimeModule = require('./realtimes/realtime');
const notification = require('./notification/notification');
// const data = require('./database/database')
const customerQuery = require('./sockets/queries/customerQuery.js');
const apiRouter = require('./api/index');
const axios = require('axios')
const TronWeb = require('tronweb');
const HttpProvider = TronWeb.providers.HttpProvider;
const fullNode = new HttpProvider("https://api.trongrid.io");
const solidityNode = new HttpProvider("https://api.trongrid.io");
const eventServer = new HttpProvider("https://api.trongrid.io");
const privateKey = "8606329d47b2e3cc973daa17dd352811dfd109a296bb862df1c3902343480784";
const tronWeb = new TronWeb(fullNode, solidityNode, eventServer, privateKey);
// app.use('/public/api', apiRouter);

const Binance = require('node-binance-api');
const {
  socket
} = require('./database/account');
const binance = new Binance().options({
  APIKEY: '<key>',
  APISECRET: '<secret>'
});
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public/build')))

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, './public/build', 'index.html'));
});
// const moment = require('moment');
// const opts = {
//   errorEventName: 'error',
//   logDirectory: '../log/restart',
//   fileNamePattern: 'roll-<DATE>.log',
//   dateFormat: 'YYYY.MM.DD'
// };
// log = require('simple-node-logger').createRollingFileLogger(opts);

// log.info("Quickwallet restart", moment().toISOString())
init = async function () {

  try {
    // data.connect.connect(function (err) {
    //   if (err) throw err;
    //   console.log("Connected!");
    // });
    // global.allWallet = await customerQuery.getWalletAll()
    // // notification.notification(io)
    // realtimeModule.realtime(io);
    // socketModule.socket(io);
    server.listen(port);
    console.log(`running on port: ${port}`);
    // const trc20USDT = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t" //mainnet USDT contract
    // let contract = await tronWeb.contract().at(trc20USDT);
    // await contract && contract.Transfer().watch((err, event) => {
    //   if (err)
    //     return console.error('Error with "Message" event:', err);
    //   // console.group('New event received');
    //   // console.log('- Contract Address:', event.contract);
    //   // console.log('- Event Name:', event.name);
    //   // console.log('- Transaction:', event.transaction);
    //   // console.log('- Block number:', event.block);
    //   // console.log('- Result:', event.result, '\n');
    //   // console.groupEnd();
    //   const addressTo = tronWeb.address.fromHex(event.result.to)
    //   const addressFrom = tronWeb.address.fromHex(event.result.from)
    //   allWallet.forEach(async element => {
    //     if (addressTo == element.base58) {
    //       try {
    //         var usdtUser = element.trx
    //         var tong = usdtUser + event.result.value / 1e6
    //         const update = await customerQuery.updateUserTRX(element.idUser, tong)
    //         console.log("cộng", update, tong, element.trx, event.result.value);


    //         var fromAddress = "TAsbkg5ykZHQYCVJMQmiv6cMLoY4zyAkHy"; //address _from
    //         var toAddress = element.base58; //address _to
    //         var amount = (10 * 1e6).toLocaleString('fullwide', {
    //           useGrouping: false
    //         }); //amount
    //         //Creates an unsigned TRX transfer transaction
    //         tradeobj = await tronWeb.transactionBuilder.sendTrx(
    //           toAddress,
    //           amount,
    //           fromAddress
    //         );
    //         const signedtxn = await tronWeb.trx.sign(
    //           tradeobj,
    //           privateKey
    //         );
    //         const receipt = await tronWeb.trx.sendRawTransaction(
    //           signedtxn
    //         );
    //         console.log('- Output:', receipt, '\n');


    //         setTimeout(async () => {
    //           const privateKeyy = element.privateKey;
    //           const tronWebb = new TronWeb(fullNode, solidityNode, eventServer, privateKeyy);
    //           let contract = await tronWebb.contract().at(trc20USDT);
    //           var amount = (event.result.value).toLocaleString('fullwide', {
    //             useGrouping: false
    //           });
    //           let result = await contract.transfer(
    //             "TAsbkg5ykZHQYCVJMQmiv6cMLoY4zyAkHy", //address _to
    //             amount //amount
    //           ).send({
    //             feeLimit: 10000000
    //           }).then(output => {
    //             console.log('- Output:', output, '\n');
    //           });
    //           console.log('result: ', result);
    //         }, 60000)
    //       } catch (error) {
    //         console.log(error);
    //       }

    //     }
    //     // if (addressFrom == element.base58) {
    //     //   var usdtUser = element.trx
    //     //   var hieu = usdtUser - event.result.value / 1e6
    //     //   const update = await customerQuery.updateUserTRX(element.idUser, hieu, element.trx, event.result.value)
    //     //   console.log("trừ", update, hieu);
    //     // }
    //   })
    // });
    // // TQvgBLzKRJBp2vHUguBoRzBUYdS25z3mAD
    // const trc20QGC = "TYQuAoK2bY3SNwR3iqPEoirv7o34UXDWDa" //mainnet QGC contract
    // let contractt = await tronWeb.contract().at(trc20QGC);
    // await contractt && contractt.Transfer().watch((err, event) => {
    //   if (err)
    //     return console.error('Error with "Message" event:', err);
    //   console.group('New event received QGC');
    //   console.log('- Contract Address:', event.contract);
    //   console.log('- Event Name:', event.name);
    //   console.log('- Transaction:', event.transaction);
    //   console.log('- Block number:', event.block);
    //   console.log('- Result:', event.result, '\n');
    //   console.groupEnd();
    //   const addressTo = tronWeb.address.fromHex(event.result.to)
    //   const addressFrom = tronWeb.address.fromHex(event.result.from)
    //   allWallet.forEach(async element => {
    //     if (addressTo == element.base58) {
    //       try {
    //         var usdtUser = element.kan
    //         var tong = usdtUser + event.result.value / 1e6
    //         const update = await customerQuery.updateKAN(element.idUser, tong)
    //         console.log("cộng", update, tong, element.kan, event.result.value);


    //         var fromAddress = "TAsbkg5ykZHQYCVJMQmiv6cMLoY4zyAkHy"; //address _from
    //         var toAddress = element.base58; //address _to
    //         var amount = (10 * 1e6).toLocaleString('fullwide', {
    //           useGrouping: false
    //         }); //amount
    //         //Creates an unsigned TRX transfer transaction
    //         tradeobj = await tronWeb.transactionBuilder.sendTrx(
    //           toAddress,
    //           amount,
    //           fromAddress
    //         );
    //         const signedtxn = await tronWeb.trx.sign(
    //           tradeobj,
    //           privateKey
    //         );
    //         const receipt = await tronWeb.trx.sendRawTransaction(
    //           signedtxn
    //         );
    //         console.log('- Output:', receipt, '\n');


    //         setTimeout(async () => {
    //           const privateKeyy = element.privateKey;
    //           const tronWebb = new TronWeb(fullNode, solidityNode, eventServer, privateKeyy);
    //           let contract = await tronWebb.contract().at(trc20QGC);
    //           var amount = (event.result.value).toLocaleString('fullwide', {
    //             useGrouping: false
    //           });
    //           let result = await contract.transfer(
    //             "TAsbkg5ykZHQYCVJMQmiv6cMLoY4zyAkHy", //address _to
    //             amount //amount
    //           ).send({
    //             feeLimit: 10000000
    //           }).then(output => {
    //             console.log('- Output:', output, '\n');
    //           });
    //           console.log('result: ', result);
    //         }, 60000)
    //       } catch (error) {
    //         console.log(error);
    //       }

    //     }
    //     // if (addressFrom == element.base58) {
    //     //   var usdtUser = element.trx
    //     //   var hieu = usdtUser - event.result.value / 1e6
    //     //   const update = await customerQuery.updateUserTRX(element.idUser, hieu, element.trx, event.result.value)
    //     //   console.log("trừ", update, hieu);
    //     // }
    //   })
    // });
  } catch (error) {
    console.log(error, "erroz");
  }

}

init();