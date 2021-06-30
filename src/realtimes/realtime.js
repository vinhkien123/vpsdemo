const coinApi = require('./services/getCoinApi')
const coinConvert = require('./services/coinConvert');
const customRealTime = require('./services/customRealTime');
const jwt = require('jsonwebtoken')
const data = require('../database/account');
const Binance = require('node-binance-api');
const binance = new Binance().options({
    APIKEY: '<key>',
    APISECRET: '<secret>'
});
const {
    socket
} = require('../sockets/socket');
// const apiPasser = require('./apiPasser');
const TronWeb = require('tronweb');
const HttpProvider = TronWeb.providers.HttpProvider;
const fullNode = new HttpProvider("https://api.trongrid.io");
const solidityNode = new HttpProvider("https://api.trongrid.io");
const eventServer = new HttpProvider("https://api.trongrid.io");
const axios = require('axios')
const privateKey = "DAD2A7BBAC4A468B256F14ACCBE3E4D594762A021E2308D259A19702F2D073CD";
const tronWeb = new TronWeb(fullNode, solidityNode, eventServer, privateKey);
let online = []


realtime = async function (io) {
    var flagConnect = false;
    // var a = await binance.prevDay("TRXUSDT");
    // setInterval(async () => {
    //     b = await binance.prevDay("TRXUSDT");
    // }, 60000)

    //Listening for connection client.
    io.on('connection', async function (socketIo) {
        try {
              let flag = true
              online.forEach((user) => {
                  if (user == socketIo.id) {
                      flag = false
                  }
              })
              if (flag) {
                  online.push(socketIo.id)
              }

              io.local.emit('checkOnline', online.length)
          
            // var a = await binance.prevDay("TRXUSDT");
            io.local.emit("check","ok")
           binance.websockets.prevDay('TRXUSDT', (error, response) => {
   
               socketIo.emit('trx', response)
           });
            socketIo.on('disconnect', () => {
                if (!socketIo.id) return;
                let updateOnline = online.filter(item => item != socketIo.id)
                online = updateOnline
                io.local.emit('checkOnline', online.length)

            })
        } catch (error) {
            console.log(error);
        }

    });
}

module.exports.realtime = realtime