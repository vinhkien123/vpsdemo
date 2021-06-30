const {
   validate
} = require('../configs/config');
const otplib = require('otplib')
const {
   authenticator
} = otplib
const dataDemo = require('../queries/walletQuery.json');
const Coinpayments = require('coinpayments');
const jwt = require('jsonwebtoken');
const sendMail = require("../functions/verifyEmail")
const crypto = require("crypto");
const query = require('../queries/customerQuery')
const TronWeb = require('tronweb');
const connect = require('../../database/database');

const {
   jsonResp
} = require('../models/jsonResponse');
const {
   checkUser,
   getLeverToIdUser
} = require('../queries/customerQuery');
const data = require('../../database/account')
const functionCustom = require('../functions/index');
const customerQuery = require('../queries/customerQuery');
const fcm = require('fcm-notification');
const folder = require('./blockchainfarm-f588a-firebase-adminsdk-7gy2v-96f54c4652.json')
const FCM = new fcm(folder);
const validateToken = require('../functions/validation')
const customFunc = require("../functions/index")
const fs = require("fs");
const formidable = require("formidable");
const arrayString = require('../configs/string.json');
const Binance = require('node-binance-api');
const binance = new Binance().options({
   APIKEY: '<key>',
   APISECRET: '<secret>'
});
const {
   checkPhoneAccount
} = require('../functions/index');
var tokenList = [];
const apiTron = `https://api.trongrid.io`
// https://api.trongrid.io
// https: //api.shasta.trongrid.io
/// trong
const HttpProvider = TronWeb.providers.HttpProvider;
const fullNode = new HttpProvider(apiTron);
const solidityNode = new HttpProvider(apiTron);
const eventServer = new HttpProvider(apiTron);
const privateKey = "d60f68ae5fe9800848b499abc96761bdce1f2cb84f66361c8b6ebce9bdf2c994";
const tronWeb = new TronWeb(fullNode, solidityNode, eventServer, privateKey);
const CryptoUtils = require("@tronscan/client/src/utils/crypto");
const TransactionUtils = require("@tronscan/client/src/utils/transactionBuilder");
const {
   socket
} = require('../../database/account');
const axios = require('axios')
const $ = require('jquery');
const {
   verify
} = require('hcaptcha')
const {
   param
} = require('jquery');
const {
   log,
   profile
} = require('console');
const e = require('express');

//// cài đặt  poloniex-api-node npm start
// const Poloniex = require('poloniex-api-node');

// let poloniex = new Poloniex('O0KLKMGX-AMBPL5XC-8F7QDSHD-RBJ498T7', '3284a19b48704ea14f41ee1e2b10ee37604cf9146782cbe07c4a8854fdfa226bea976242c1c7cf1dff92e82e3b771aa24ed53c0a355342cd2ee7295901a158c4', {
//    socketTimeout: 15000
// })
var specialChars = "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=";

function validationUserName(string) {
   for (i = 0; i < specialChars.length; i++) {
      if (string.indexOf(specialChars[i]) > -1) {
         return true
      }
   }
   return false;

}

function convertMS(milliseconds) {
   var day, hour, minute, seconds;
   seconds = Math.floor(milliseconds / 1000);
   minute = Math.floor(seconds / 60);
   seconds = seconds % 60;
   hour = Math.floor(minute / 60);
   minute = minute % 60;
   day = Math.floor(hour / 24);
   hour = hour % 24;
   return {
      day: day,
      hour: hour,
      minute: minute,
      seconds: seconds
   };
}

function dhm(ms) {
   days = Math.floor(ms / (24 * 60 * 60 * 1000));
   daysms = ms % (24 * 60 * 60 * 1000);
   hours = Math.floor((daysms) / (60 * 60 * 1000));
   hoursms = ms % (60 * 60 * 1000);
   minutes = Math.floor((hoursms) / (60 * 1000));
   minutesms = ms % (60 * 1000);
   sec = Math.floor((minutesms) / (1000));
   return days
}
async function GetMemberVip(idUser) {
   var tong = 0
   const allUser = await customerQuery.getAllUser()
   var array = await customerQuery.getParentToIdUser(idUser)

   for await (let user of array) {
      const lever = await customerQuery.getLeverToIdUser(user.idUser)
      if (lever.length > 0) {
         if (lever[0].star != null) {
            tong += 1
         }
      }
   }
   return tong
}
module.exports = {
   getCountry: async (params) => {
      var data = await customerQuery.getCountry()
      return data
   },
   membervip12star: async (params) => {
      try {
         const {
            token,
            limit,
            page
         } = params
         const idUser = validateToken.tokenUser(token)
         if (idUser == 1) {
            const userLever = await customerQuery.getLeverMemberUserToLever(12, limit, page)
            const allUserLever = await customerQuery.getLeverMemberUserToLeverPagination(12, limit, page)
            for await (userLeverTo of userLever) {
               const profileUser = await customerQuery.getUserToId(userLeverTo.idUser)

               if (profileUser.length > 0) {
                  userLeverTo.userName = profileUser[0].userName

               }
            }

            const obj = {
               array: userLever,
               total: allUserLever.length
            }
            return {
               status: 200,
               message: "Get user success",
               data: obj
            }
         }
      } catch (error) {
         console.log(error);
         return error
      }
   },
   membervip11star: async (params) => {
      try {
         const {
            token,
            limit,
            page
         } = params
         const idUser = validateToken.tokenUser(token)
         if (idUser == 1) {
            const userLever = await customerQuery.getLeverMemberUserToLever(11, limit, page)
            const allUserLever = await customerQuery.getLeverMemberUserToLeverPagination(11, limit, page)
            for await (userLeverTo of userLever) {
               const profileUser = await customerQuery.getUserToId(userLeverTo.idUser)

               if (profileUser.length > 0) {
                  userLeverTo.userName = profileUser[0].userName

               }
            }

            const obj = {
               array: userLever,
               total: allUserLever.length
            }
            return {
               status: 200,
               message: "Get user success",
               data: obj
            }
         }
      } catch (error) {
         console.log(error);
         return error
      }
   },
   membervip10star: async (params) => {
      try {
         const {
            token,
            limit,
            page
         } = params
         const idUser = validateToken.tokenUser(token)
         if (idUser == 1) {
            const userLever = await customerQuery.getLeverMemberUserToLever(10, limit, page)
            const allUserLever = await customerQuery.getLeverMemberUserToLeverPagination(10, limit, page)
            for await (userLeverTo of userLever) {
               const profileUser = await customerQuery.getUserToId(userLeverTo.idUser)

               if (profileUser.length > 0) {
                  userLeverTo.userName = profileUser[0].userName

               }
            }

            const obj = {
               array: userLever,
               total: allUserLever.length
            }
            return {
               status: 200,
               message: "Get user success",
               data: obj
            }
         }
      } catch (error) {
         console.log(error);
         return error
      }
   },
   membervip9star: async (params) => {
      try {
         const {
            token,
            limit,
            page
         } = params
         const idUser = validateToken.tokenUser(token)
         if (idUser == 1) {
            const userLever = await customerQuery.getLeverMemberUserToLever(9, limit, page)
            const allUserLever = await customerQuery.getLeverMemberUserToLeverPagination(9, limit, page)
            for await (userLeverTo of userLever) {
               const profileUser = await customerQuery.getUserToId(userLeverTo.idUser)

               if (profileUser.length > 0) {
                  userLeverTo.userName = profileUser[0].userName

               }
            }

            const obj = {
               array: userLever,
               total: allUserLever.length
            }
            return {
               status: 200,
               message: "Get user success",
               data: obj
            }
         }
      } catch (error) {
         console.log(error);
         return error
      }
   },
   membervip8star: async (params) => {
      try {
         const {
            token,
            limit,
            page
         } = params
         const idUser = validateToken.tokenUser(token)
         if (idUser == 1) {
            const userLever = await customerQuery.getLeverMemberUserToLever(8, limit, page)
            const allUserLever = await customerQuery.getLeverMemberUserToLeverPagination(8, limit, page)
            for await (userLeverTo of userLever) {
               const profileUser = await customerQuery.getUserToId(userLeverTo.idUser)

               if (profileUser.length > 0) {
                  userLeverTo.userName = profileUser[0].userName

               }
            }

            const obj = {
               array: userLever,
               total: allUserLever.length
            }
            return {
               status: 200,
               message: "Get user success",
               data: obj
            }
         }
      } catch (error) {
         console.log(error);
         return error
      }
   },
   membervip7star: async (params) => {
      try {
         const {
            token,
            limit,
            page
         } = params
         const idUser = validateToken.tokenUser(token)
         if (idUser == 1) {
            const userLever = await customerQuery.getLeverMemberUserToLever(7, limit, page)
            const allUserLever = await customerQuery.getLeverMemberUserToLeverPagination(7, limit, page)
            for await (userLeverTo of userLever) {
               const profileUser = await customerQuery.getUserToId(userLeverTo.idUser)

               if (profileUser.length > 0) {
                  userLeverTo.userName = profileUser[0].userName

               }
            }

            const obj = {
               array: userLever,
               total: allUserLever.length
            }
            return {
               status: 200,
               message: "Get user success",
               data: obj
            }
         }
      } catch (error) {
         console.log(error);
         return error
      }
   },
   membervip6star: async (params) => {
      try {
         const {
            token,
            limit,
            page
         } = params
         const idUser = validateToken.tokenUser(token)
         if (idUser == 1) {
            const userLever = await customerQuery.getLeverMemberUserToLever(6, limit, page)
            const allUserLever = await customerQuery.getLeverMemberUserToLeverPagination(6, limit, page)
            for await (userLeverTo of userLever) {
               const profileUser = await customerQuery.getUserToId(userLeverTo.idUser)

               if (profileUser.length > 0) {
                  userLeverTo.userName = profileUser[0].userName

               }
            }

            const obj = {
               array: userLever,
               total: allUserLever.length
            }
            return {
               status: 200,
               message: "Get user success",
               data: obj
            }
         }
      } catch (error) {
         console.log(error);
         return error
      }
   },
   membervip5star: async (params) => {
      try {
         const {
            token,
            limit,
            page
         } = params
         const idUser = validateToken.tokenUser(token)
         if (idUser == 1) {
            const userLever = await customerQuery.getLeverMemberUserToLever(5, limit, page)
            const allUserLever = await customerQuery.getLeverMemberUserToLeverPagination(5, limit, page)
            for await (userLeverTo of userLever) {
               const profileUser = await customerQuery.getUserToId(userLeverTo.idUser)

               if (profileUser.length > 0) {
                  userLeverTo.userName = profileUser[0].userName

               }
            }

            const obj = {
               array: userLever,
               total: allUserLever.length
            }
            return {
               status: 200,
               message: "Get user success",
               data: obj
            }
         }
      } catch (error) {
         console.log(error);
         return error
      }
   },
   membervip4star: async (params) => {
      try {
         const {
            token,
            limit,
            page
         } = params
         const idUser = validateToken.tokenUser(token)
         if (idUser == 1) {
            const userLever = await customerQuery.getLeverMemberUserToLever(4, limit, page)
            const allUserLever = await customerQuery.getLeverMemberUserToLeverPagination(4, limit, page)
            for await (userLeverTo of userLever) {
               const profileUser = await customerQuery.getUserToId(userLeverTo.idUser)

               if (profileUser.length > 0) {
                  userLeverTo.userName = profileUser[0].userName

               }
            }

            const obj = {
               array: userLever,
               total: allUserLever.length
            }
            return {
               status: 200,
               message: "Get user success",
               data: obj
            }
         }
      } catch (error) {
         console.log(error);
         return error
      }
   },
   membervip3star: async (params) => {
      try {
         const {
            token,
            limit,
            page
         } = params
         const idUser = validateToken.tokenUser(token)
         if (idUser == 1) {
            const userLever = await customerQuery.getLeverMemberUserToLever(3, limit, page)
            const allUserLever = await customerQuery.getLeverMemberUserToLeverPagination(3, limit, page)
            for await (userLeverTo of userLever) {
               const profileUser = await customerQuery.getUserToId(userLeverTo.idUser)

               if (profileUser.length > 0) {
                  userLeverTo.userName = profileUser[0].userName

               }
            }

            const obj = {
               array: userLever,
               total: allUserLever.length
            }
            return {
               status: 200,
               message: "Get user success",
               data: obj
            }
         }
      } catch (error) {
         console.log(error);
         return error
      }
   },
   membervip2star: async (params) => {
      try {
         const {
            token,
            limit,
            page
         } = params
         const idUser = validateToken.tokenUser(token)
         if (idUser == 1) {
            const userLever = await customerQuery.getLeverMemberUserToLever(2, limit, page)
            const allUserLever = await customerQuery.getLeverMemberUserToLeverPagination(2, limit, page)
            for await (userLeverTo of userLever) {
               const profileUser = await customerQuery.getUserToId(userLeverTo.idUser)

               if (profileUser.length > 0) {
                  userLeverTo.userName = profileUser[0].userName

               }
            }

            const obj = {
               array: userLever,
               total: allUserLever.length
            }
            return {
               status: 200,
               message: "Get user success",
               data: obj
            }
         }
      } catch (error) {
         console.log(error);
         return error
      }
   },
   membervip1star: async (params) => {
      try {
         const {
            token,
            limit,
            page
         } = params
         const idUser = validateToken.tokenUser(token)
         if (idUser == 1) {
            const userLever = await customerQuery.getLeverMemberUserToLever(1, limit, page)
            const allUserLever = await customerQuery.getLeverMemberUserToLeverPagination(1, limit, page)
            for await (userLeverTo of userLever) {
               const profileUser = await customerQuery.getUserToId(userLeverTo.idUser)

               if (profileUser.length > 0) {
                  userLeverTo.userName = profileUser[0].userName

               }
            }

            const obj = {
               array: userLever,
               total: allUserLever.length
            }
            return {
               status: 200,
               message: "Get user success",
               data: obj
            }
         }
      } catch (error) {
         console.log(error);
         return error
      }
   },
   membervip: async (params) => {
      try {
         const {
            token,
            limit,
            page
         } = params
         const idUser = validateToken.tokenUser(token)
         if (idUser == 1) {
            const userLever = await customerQuery.getLeverMemberUserToLever(0, limit, page)
            const allUserLever = await customerQuery.getLeverMemberUserToLeverPagination(0, limit, page)
            for await (userLeverTo of userLever) {
               const profileUser = await customerQuery.getUserToId(userLeverTo.idUser)

               if (profileUser.length > 0) {
                  userLeverTo.userName = profileUser[0].userName

               }
            }

            const obj = {
               array: userLever,
               total: allUserLever.length
            }
            return {
               status: 200,
               message: "Get user success",
               data: obj
            }
         }
      } catch (error) {
         console.log(error);
         return error
      }
   },
   collaborators: async (params) => {
      try {
         const {
            token,
            limit,
            page
         } = params
         const idUser = validateToken.tokenUser(token)
         if (idUser == 1) {
            const userLever = await customerQuery.getLeverUserToCollaborators(limit, page)
            const allUserLever = await customerQuery.getLeverUserToCollaboratorsPagination()
            const obj = {
               array: userLever,
               total: allUserLever.length
            }
            return {
               status: 200,
               message: "Get user success",
               data: obj
            }
         }
      } catch (error) {
         console.log(error);
         return error
      }
   },
   member: async (params) => {
      try {
         const {
            token,
            limit,
            page
         } = params
         const idUser = validateToken.tokenUser(token)
         if (idUser == 1) {
            const userLever = await customerQuery.getLeverUserToLever(null, limit, page)
            console.log(userLever);
            const allUserLever = await customerQuery.getLeverUserToLeverPagination(null, limit, page)
            for await (user of userLever) {
               const profileUser = await customerQuery.getUserToId(user.idUser)
               if (profileUser.length > 0) {
                  user.userName = profileUser[0].userName
               }
            }
            const obj = {
               array: userLever,
               total: allUserLever.length
            }
            return {
               status: 200,
               message: "Get user success",
               data: obj
            }
         }
      } catch (error) {
         console.log(error);
         return error
      }
   },
   activeEmail: async (params) => {
      const {
         email
      } = params
      const user = await customerQuery.getUserToEmail(email)

      console.log(user, email);
      if (user.length <= 0) {
         return {
            status: 1,
            message: "Email is not exit ! "
         }
      } else {
         var a = await customerQuery.updateActiveEmail(email, 1)
         return {
            status: 200,
            message: "Active success !!"
         }
      }

   },
   getLeverUser: async (params) => {
      try {
         const {
            token
         } = params
         const idUser = validateToken.tokenUser(token)
         if (idUser) {
            const lever = await getLeverToIdUser(idUser)
            if (lever.length > 0) {
               var length = lever[0].star

               for await (user of lever) {
                  if (length == null) {
                     length = user.star
                  } else {
                     if (length < user.star) {
                        length = user.star
                     }
                  }
               }
               return {
                  status: 200,
                  message: "Get lever to success !!!",
                  data: length
               }
            } else {
               return {
                  status: 201,
                  message: "Get lever to success !!!",
               }
            }
         }
      } catch (error) {
         console.log(error);
         return error
      }
   },
   privatePresale: async (params) => {
      try {
         const {
            token,

         } = params
         const amount = 1000
         const preSale = 1
         const idUser = validateToken.tokenUser(token)
         if (idUser) {
            const walletUser = await customerQuery.getWalletToIdUser(idUser)
            const handling = await customerQuery.getHandlingToIdUserAndHandling(idUser, "privatePresale")
            if (handling.length == 0) {
               await customerQuery.addFunctionHandling("privatePresale", idUser)
               if (walletUser.length > 0) {
                  const usdt = walletUser[0].trx
                  const QGC = walletUser[0].kan
                  var tong = 0
                  if (amount <= usdt) {
                     if (amount > 0) {
                        const flagPrivateSale = await customerQuery.getHistoryPresale(idUser)
                        let packagePresale = 0
                        for await (element of flagPrivateSale) {
                           if (element.privateSale == 1) {
                              packagePresale += 1
                           }
                        }
                        if (packagePresale < 3) {
                           const hieu = usdt - amount
                           await customerQuery.updateUserTRX(idUser, hieu)
                           const tong = amount / 0.01 * 3
                           await customerQuery.updateUserKAN(idUser, tong)
                           await customerQuery.addPrivateSale(preSale, idUser, amount)
                           flag = true
                           await customerQuery.deleteHandling(idUser, "privatePresale")
                           return {
                              status: 200,
                              message: "Successful Presale !"
                           }
                        } else {
                           await customerQuery.deleteHandling(idUser, "privatePresale")
                           return {
                              status: 14,
                              message: "You can only buy up to 3 packs!"
                           }
                        }




                     } else {
                        await customerQuery.deleteHandling(idUser, "privatePresale")
                        return {
                           status: 3,
                           message: "Invalid amount !"
                        }
                     }
                  } else {
                     await customerQuery.deleteHandling(idUser, "privatePresale")
                     return {
                        status: 2,
                        message: "Insufficient balance !"
                     }
                  }
               } else {
                  await customerQuery.deleteHandling(idUser, "privatePresale")
                  return {
                     status: 1,
                     message: "Wallet not exit !"
                  }
               }
            } else {
               return {
                  status: 105,
                  message: "Your transaction is being processed!"
               }
            }

         }
      } catch (error) {
         console.log(error);
         return error
      }
   },
   preSale: async (params, socketIO, io) => {
      try {
         const {
            token,
            amount,
            preSale
         } = params
         const idUser = validateToken.tokenUser(token)
         if (idUser) {
            const walletUser = await customerQuery.getWalletToIdUser(idUser)
            const handling = await customerQuery.getHandlingToIdUserAndHandling(idUser, "presale")
            if (handling.length == 0) {
               await customerQuery.addFunctionHandling("presale", idUser)
               if (walletUser.length > 0) {
                  const usdt = walletUser[0].trx
                  const QGC = walletUser[0].kan
                  var tong = 0
                  if (amount <= usdt) {
                     if (amount > 0) {
                        var flag
                        if (preSale == 1 && amount == 500) {
                           const hieu = usdt - amount
                           await customerQuery.updateUserTRX(idUser, hieu)
                           const tong = amount / 0.01 * 2
                           await customerQuery.updateUserKAN(idUser, tong)
                           await customerQuery.addPresale(preSale, idUser, amount)
                           flag = true
                        } else if (preSale == 1 && amount == 1000) {
                           const hieu = usdt - amount
                           await customerQuery.updateUserTRX(idUser, hieu)
                           const tong = amount / 0.01 * 2
                           await customerQuery.updateUserKAN(idUser, tong)
                           await customerQuery.addPresale(preSale, idUser, amount)
                           flag = true
                        } else if (preSale == 1 && amount == 2000) {
                           const hieu = usdt - amount
                           await customerQuery.updateUserTRX(idUser, hieu)
                           const tong = amount / 0.01 * 2
                           await customerQuery.updateUserKAN(idUser, tong)
                           await customerQuery.addPresale(preSale, idUser, amount)
                           flag = true
                        } else if (preSale == 2 && amount == 2250) {
                           const hieu = usdt - amount
                           await customerQuery.updateUserTRX(idUser, hieu)
                           const tong = amount / 0.01 * 2
                           await customerQuery.updateUserKAN(idUser, tong)
                           await customerQuery.addPresale(preSale, idUser, amount)
                           flag = true
                        } else if (preSale == 2 && amount == 2500) {
                           const hieu = usdt - amount
                           await customerQuery.updateUserTRX(idUser, hieu)
                           const tong = amount / 0.01 * 2
                           await customerQuery.updateUserKAN(idUser, tong)
                           await customerQuery.addPresale(preSale, idUser, amount)
                           flag = true
                        } else if (preSale == 2 && amount == 5000) {
                           const hieu = usdt - amount
                           await customerQuery.updateUserTRX(idUser, hieu)
                           const tong = amount / 0.01 * 2
                           await customerQuery.updateUserKAN(idUser, tong)
                           await customerQuery.addPresale(preSale, idUser, amount)
                           flag = true
                        } else if (preSale == 3 && amount == 5250) {
                           const hieu = usdt - amount
                           await customerQuery.updateUserTRX(idUser, hieu)
                           const tong = amount / 0.01 * 2
                           await customerQuery.updateUserKAN(idUser, tong)
                           await customerQuery.addPresale(preSale, idUser, amount)
                           flag = true
                        } else if (preSale == 3 && amount == 6000) {
                           const hieu = usdt - amount
                           await customerQuery.updateUserTRX(idUser, hieu)
                           const tong = amount / 0.01 * 2
                           await customerQuery.updateUserKAN(idUser, tong)
                           await customerQuery.addPresale(preSale, idUser, amount)
                           flag = true
                        } else if (preSale == 3 && amount == 10000) {
                           const hieu = usdt - amount
                           await customerQuery.updateUserTRX(idUser, hieu)
                           const tong = amount / 0.01 * 2
                           await customerQuery.updateUserKAN(idUser, tong)
                           await customerQuery.addPresale(preSale, idUser, amount)
                           flag = true
                        } else if (preSale == 4 && amount == 10250) {
                           const hieu = usdt - amount
                           await customerQuery.updateUserTRX(idUser, hieu)
                           const tong = amount / 0.01 * 2
                           await customerQuery.updateUserKAN(idUser, tong)
                           await customerQuery.addPresale(preSale, idUser, amount)
                           flag = true
                        } else if (preSale == 4 && amount == 15000) {
                           const hieu = usdt - amount
                           await customerQuery.updateUserTRX(idUser, hieu)
                           const tong = amount / 0.01 * 2
                           await customerQuery.updateUserKAN(idUser, tong)
                           await customerQuery.addPresale(preSale, idUser, amount)
                           flag = true
                        } else if (preSale == 4 && amount == 20000) {
                           const hieu = usdt - amount
                           await customerQuery.updateUserTRX(idUser, hieu)
                           const tong = amount / 0.01 * 2
                           await customerQuery.updateUserKAN(idUser, tong)
                           await customerQuery.addPresale(preSale, idUser, amount)
                           flag = true
                        } else if (preSale == 5 && amount == 22500) {
                           const hieu = usdt - amount
                           await customerQuery.updateUserTRX(idUser, hieu)
                           const tong = amount / 0.01 * 2
                           await customerQuery.updateUserKAN(idUser, tong)
                           await customerQuery.addPresale(preSale, idUser, amount)
                           flag = true
                        } else if (preSale == 5 && amount == 30000) {
                           const hieu = usdt - amount
                           await customerQuery.updateUserTRX(idUser, hieu)
                           const tong = amount / 0.01 * 2
                           await customerQuery.updateUserKAN(idUser, tong)
                           await customerQuery.addPresale(preSale, idUser, amount)
                           flag = true
                        }
                        if (flag) {
                           await customerQuery.deleteHandling(idUser, "presale")
                           return {
                              status: 200,
                              message: "Successful Presale !"
                           }
                        } else {
                           await customerQuery.deleteHandling(idUser, "presale")
                           return {
                              status: 500,
                              message: "Error Presale !"
                           }
                        }
                     } else {
                        await customerQuery.deleteHandling(idUser, "presale")
                        return {
                           status: 3,
                           message: "Invalid amount !"
                        }
                     }
                  } else {
                     await customerQuery.deleteHandling(idUser, "presale")
                     return {
                        status: 2,
                        message: "Insufficient balance !"
                     }
                  }
               } else {
                  await customerQuery.deleteHandling(idUser, "presale")
                  return {
                     status: 1,
                     message: "Wallet not exit !"
                  }
               }
            } else {
               return {
                  status: 105,
                  message: "Your transaction is being processed!"
               }
            }

         }
      } catch (error) {
         console.log(error);
      }
   },
   verifyRecaptcha: async (params, socketIO, io) => {
      try {
         const {
            token
         } = params
         const secretKey = "6Le7QzQbAAAAAHjqyqYfc5406Z7PpkTswagqHJXQ"
         const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`
         const res = await axios({
            url,
            methods: "POST"
         })
         const {
            success
         } = res.data
         if (success) {
            return true
         } else {
            return false
         }
      } catch (error) {
         return error
      }
   },
   testPlophix: async (params, socketIO, io) => {
      binance.websockets.chart("BNBBTC", "1m", (symbol, interval, chart) => {
         let tick = binance.last(chart);
         const last = chart[tick].close;
         console.info(chart);
         // Optionally convert 'chart' object to array:
         // let ohlc = binance.ohlc(chart);
         // console.info(symbol, ohlc);
         console.info(symbol + " last price: " + last)
      });

      // const trc20ContractAddress = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"; //contract address
      // var address = "TU183N1eS9hkH3fio5DNrYNvAHaZaVGR4a";

      // try {
      //    let contract = await tronWeb.contract().at(trc20ContractAddress);
      //    //Use call to execute a pure or view smart contract method.
      //    // These methods do not modify the blockchain, do not cost anything to execute and are also not broadcasted to the network.
      //    let result = await contract.balanceOf(address).call();
      //    console.log('result: ', parseInt(result._hex / 1e6));
      // } catch (error) {
      //    console.error("trigger smart contract error", error)
      // }
   },
   getAllUserToAdmin: async (params, socketIO, io) => {
      try {
         const {
            token,
            limit,
            page
         } = params
         const idUser = validateToken.tokenUser(token)
         if (idUser == 1) {
            console.log(idUser, limit, page);
            const transaction = await customerQuery.getUserToAdmin(limit, page)
            const allTransaction = await customerQuery.getUserToAdminPagination()
            for await (userParent of transaction) {
               const parent = JSON.parse(userParent.parent)
               const userF1 = await customerQuery.getUserToId(parent.F1)
               userParent.upline = userF1[0].userName
            }

            const obj = {
               array: transaction,
               total: allTransaction.length
            }
            return {
               status: 200,
               data: obj
            }
         } else {
            return {
               status: 3,
               message: "User does not have permission!"
            }
         }
      } catch (error) {
         console.log(error);
         return error
      }

   },
   getHistoryDepositAdmin: async (params, socketIO, io) => {
      try {
         const {
            token,
            limit,
            page
         } = params
         const idUser = validateToken.tokenUser(token)
         if (idUser == 1) {
            const transaction = await customerQuery.getTransactionAll(limit, page)
            const allTransaction = await customerQuery.getTransactionAllPagination()
            for await (history of transaction) {
               user = await customerQuery.getUserToId(history.idUser)
               history.userName = user[0].userName
            }
            const obj = {
               array: transaction,
               total: allTransaction.length
            }
            return {
               status: 200,
               data: obj
            }
         }
      } catch (error) {
         return error
      }

   },
   getHistoryDeposit: async (params, socketIO, io) => {

      try {
         const {
            token,
            limit,
            page
         } = params
         const idUser = validateToken.tokenUser(token)
         if (idUser) {
            const transaction = await customerQuery.getTransactionToIdUser(idUser, limit, page)
            const allTransaction = await customerQuery.getTransactionToIdUserPagination(idUser)
            // for await (history of transaction) {
            //   let day = pack.createTime.getDate();
            //   let month = pack.createTime.getMonth() + 1;
            //   let year = pack.createTime.getFullYear();
            //   var hours = pack.createTime.getHours();
            //   var minutes = pack.createTime.getMinutes();
            //   var seconds = pack.createTime.getSeconds();
            //   pack.createTime = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`
            // const profileUser = await customerQuery.getUserToId(history.idUser)
            // const res = await axios({
            //    url: `https://apilist.tronscan.org/api/transaction-info?hash=${history.transaction}`,
            //    methods: "GET"
            // })
            // // history.userName = profileUser
            // history.obj = res.data

            // }
            const obj = {
               array: transaction,
               total: allTransaction.length
            }
            return {
               status: 200,
               data: obj
            }


         }
      } catch (error) {
         return error
      }

   },
   getMemberVipToIdUser: async (params, socketIO, io) => {
      try {
         const {
            token
         } = params
         const idUser = validateToken.tokenUser(token)
         if (idUser) {
            const length = await GetMemberVip(idUser)
            return {
               length,
               status: 200
            }
         }
      } catch (error) {
         console.log(error);
         return error
      }
   },
   depositQGC: async (params, socketIO, io) => {
      try {
         const {
            token
         } = params
         const contractQGC = "TYQuAoK2bY3SNwR3iqPEoirv7o34UXDWDa"
         const idUser = validateToken.tokenUser(token)
         var isSuccess = false
         if (idUser) {
            const wallet = await customerQuery.getWalletToIdUser(idUser)
            if (wallet.length > 0) {
               const test = await axios({
                  url: `https://apilist.tronscan.org/api/token_trc20/transfers?limit=1&start=0&relatedAddress=${wallet[0].base58}`,
                  methods: "GET"
               })
               var total = test.data.total
               var page = Math.ceil(total / 20)
               const transaction = await customerQuery.getTransaction(idUser, contractQGC)
               for (let i = 1; i <= page; i++) {
                  var start = 20 * i - 20
                  const res = await axios({
                     url: `https://apilist.tronscan.org/api/token_trc20/transfers?limit=20&start=${start}&relatedAddress=${wallet[0].base58}`,
                     methods: "GET"
                  })
                  for await (ele of res.data.token_transfers) {
                     if (ele.contract_address == contractQGC && ele.to_address == wallet[0].base58) {
                        var flag = true
                        for await (history of transaction) {
                           if (history.transaction == ele.transaction_id) {
                              flag = false
                           }
                        }
                        if (flag) {

                           var usdtUser = wallet[0].kan
                           var tong = usdtUser + ele.quant / 1e6
                           const update = await customerQuery.updateKAN(idUser, tong)
                           await customerQuery.addTransaciton(ele.transaction_id, idUser, contractQGC, ele.tokenInfo.tokenLogo, ele.quant, ele.from_address, ele.to_address, ele.finalResult)
                           isSuccess = true
                        }
                     }
                  }

               }
               if (isSuccess) {
                  return {
                     status: 200,
                     message: "Update wallet to success!"
                  }
               } else {
                  return {
                     status: 8,
                     message: "Is not valid update!"
                  }
               }

            } else {
               return {
                  message: "User is not wallet!",
                  status: 2
               }
            }
         } else {
            return {
               status: 1,
               message: "User is not exit!"
            }
         }
      } catch (error) {
         return error
      }
   },
   depositUSDT: async (params, socketIO, io) => {
      try {
         const {
            token
         } = params
         const contractUSDT = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"
         const idUser = validateToken.tokenUser(token)
         var isSuccess = false
         if (idUser) {
            const wallet = await customerQuery.getWalletToIdUser(idUser)
            if (wallet.length > 0) {
               const test = await axios({
                  url: `https://apilist.tronscan.org/api/token_trc20/transfers?limit=1&start=0&relatedAddress=${wallet[0].base58}`,
                  methods: "GET"
               })
               var total = test.data.total
               var page = Math.ceil(total / 20)
               const transaction = await customerQuery.getTransaction(idUser, contractUSDT)
               for (let i = 1; i <= page; i++) {
                  var start = 20 * i - 20
                  const res = await axios({
                     url: `https://apilist.tronscan.org/api/token_trc20/transfers?limit=20&start=${start}&relatedAddress=${wallet[0].base58}`,
                     methods: "GET"
                  })
                  for await (ele of res.data.token_transfers) {
                     if (ele.contract_address == contractUSDT && ele.to_address == wallet[0].base58) {
                        var flag = true
                        /// logo ele.tokenInfo.tokenLogo

                        // amount ele.quant
                        // fromAddress ele.from_address
                        // toAddress ele.to_address
                        // status ele.finalResult

                        for await (history of transaction) {
                           if (history.transaction == ele.transaction_id) {
                              flag = false
                           }
                        }
                        if (flag) {
                           var usdtUser = wallet[0].trx
                           var tong = usdtUser + ele.quant / 1e6
                           await customerQuery.addTransaciton(ele.transaction_id, idUser, contractUSDT, ele.tokenInfo.tokenLogo, ele.quant, ele.from_address, ele.to_address, ele.finalResult)
                           const update = await customerQuery.updateUserTRX(idUser, tong)
                           isSuccess = true
                        }
                     }
                  }
               }
               if (isSuccess) {
                  return {
                     status: 200,
                     message: "Update wallet to success!"
                  }
               } else {
                  return {
                     status: 8,
                     message: "Is not valid update!"
                  }
               }

            } else {
               return {
                  message: "User is not wallet!",
                  status: 2
               }
            }
         } else {
            return {
               status: 1,
               message: "User is not exit!"
            }
         }
      } catch (error) {
         return error
      }
   },
   withdrawalsInternal: async (params, socketIO, io) => {
      try {
         const {
            token,
            action,
            flag,
            amount,
            otp
         } = params

         const idUser = validateToken.tokenUser(token)
         if (idUser) {
            const handling = await customerQuery.getHandlingToIdUserAndHandling(idUser, "withdrawalsInternal")
            if (handling.length == 0) {
               await customerQuery.addFunctionHandling("withdrawalsInternal", idUser)
               const wallet = await customerQuery.getWalletToIdUser(idUser)
               const profileUser = await customerQuery.getUserToId(idUser)
               if (amount <= 0) {
                  await customerQuery.deleteHandling(idUser, "withdrawalsInternal")
                  return {
                     message: "The transfer amount cannot be executed !",
                     status: 4
                  }
               }
               const lever = await customerQuery.getLeverToIdUser(idUser)
               if (lever.length > 0) {
                  if (profileUser[0].twofa == 1) {
                     let a = authenticator.verify({
                        token: otp,
                        secret: profileUser[0].secret
                     })
                     if (wallet.length > 0) {
                        if (a) {
                           if (flag == 2) {
                              // directCommission
                              if (amount < 15 / 0.01) {
                                 await customerQuery.deleteHandling(idUser, "withdrawalsInternal")
                                 return {
                                    message: "Your withdrawal amount is at least 15$ !",
                                    status: 13
                                 }
                              }
                              if (wallet[0].directCommission >= amount) {
                                 const tong = parseFloat(wallet[0].directCommission) - parseFloat(amount)
                                 await customerQuery.updateUserDirectCommission(idUser, tong)
                                 if (action == 1) {
                                    //widthdraw USDT
                                    const hieu = parseFloat(wallet[0].trx) + parseFloat(amount * 0.01 - 1)
                                    await customerQuery.updateUserTRX(idUser, hieu)
                                    await customerQuery.addWithdrawalsInternal(amount * 0.01 - 1, idUser, flag, 1, action)
                                    await customerQuery.deleteHandling(idUser, "withdrawalsInternal")
                                    return {
                                       status: 200,
                                       message: "Successful USDT Wallet Withdrawal !"
                                    }
                                 } else if (action == 2) {
                                    //widthdraw QGC
                                    const hieu = parseFloat(wallet[0].kan) + parseFloat(amount)
                                    await customerQuery.updateKAN(idUser, hieu)
                                    await customerQuery.addWithdrawalsInternal(amount - 1 / 0.01, idUser, flag, 1 / 0.01, action)
                                    await customerQuery.deleteHandling(idUser, "withdrawalsInternal")
                                    return {
                                       status: 200,
                                       message: "Successful QGC Wallet Withdrawal !"
                                    }
                                 }

                              } else {
                                 await customerQuery.deleteHandling(idUser, "withdrawalsInternal")
                                 return {
                                    message: "Insufficient balance !",
                                    status: 3
                                 }
                              }
                           } else if (flag == 3) {
                              // levelCommission
                              if (amount < 10 / 0.01) {
                                 await customerQuery.deleteHandling(idUser, "withdrawalsInternal")
                                 return {
                                    message: `Your withdrawal amount is at least ${10/0.01} QGC !`,
                                    status: 13
                                 }
                              }
                              if (wallet[0].levelCommission >= amount) {
                                 const tong = parseFloat(wallet[0].levelCommission) - parseFloat(amount)
                                 await customerQuery.updateUserLeverCommission(idUser, tong)
                                 if (action == 1) {
                                    //widthdraw USDT
                                    const hieu = parseFloat(wallet[0].trx) + parseFloat(amount * 0.01 - 1)
                                    await customerQuery.updateUserTRX(idUser, hieu)
                                    await customerQuery.addWithdrawalsInternal(amount * 0.01 - 1, idUser, flag, 1, action)
                                    await customerQuery.deleteHandling(idUser, "withdrawalsInternal")
                                    return {
                                       status: 200,
                                       message: "Successful USDT Wallet Withdrawal !"
                                    }
                                 } else if (action == 2) {
                                    //widthdraw QGC
                                    const hieu = parseFloat(wallet[0].kan) + parseFloat(amount)
                                    await customerQuery.updateKAN(idUser, hieu)
                                    await customerQuery.addWithdrawalsInternal(amount - 1 / 0.01, idUser, flag, 1 / 0.01, action)
                                    await customerQuery.deleteHandling(idUser, "withdrawalsInternal")
                                    return {
                                       status: 200,
                                       message: "Successful QGC Wallet Withdrawal !"
                                    }
                                 }
                              } else {
                                 await customerQuery.deleteHandling(idUser, "withdrawalsInternal")
                                 return {
                                    message: "Insufficient balance !",
                                    status: 3
                                 }
                              }
                           }
                           // else if (flag == 4) {
                           //    // kanWallet
                           //    if (amount < 10 / 0.01) {
                           //       return {
                           //          message: `Your withdrawal amount is at least ${10/0.01} QGC !`,
                           //          status: 13
                           //       }
                           //    }
                           //    if (wallet[0].kan >= amount) {
                           //       const tong = parseFloat(wallet[0].levelCommission) - parseFloat(amount)
                           //       await customerQuery.updateUserLeverCommission(idUser, tong)
                           //       if (action == 1) {
                           //          //widthdraw USDT
                           //          const hieu = parseFloat(wallet[0].trx) + parseFloat(amount * 0.01 - 1)
                           //          await customerQuery.updateUserTRX(idUser, hieu)
                           //          await customerQuery.addWithdrawalsInternal(amount * 0.01 - 1, idUser, flag, 1, action)
                           //          return {
                           //             status: 200,
                           //             message: "Successful USDT Wallet Withdrawal !"
                           //          }
                           //       } else if (action == 2) {
                           //          //widthdraw QGC
                           //          const hieu = parseFloat(wallet[0].kan) + parseFloat(amount)
                           //          await customerQuery.updateKAN(idUser, hieu)
                           //          await customerQuery.addWithdrawalsInternal(amount * 0.01 - 1 / 0.01, idUser, flag, 1 / 0.01, action)
                           //          return {
                           //             status: 200,
                           //             message: "Successful QGC Wallet Withdrawal !"
                           //          }
                           //       }
                           //    } else {
                           //       return {
                           //          message: "Insufficient balance !",
                           //          status: 3
                           //       }
                           //    }
                           // }
                           else {
                              await customerQuery.deleteHandling(idUser, "withdrawalsInternal")
                              return {
                                 message: "Flag không hợp lệ !",
                                 status: 2
                              }
                           }
                        } else {
                           await customerQuery.deleteHandling(idUser, "withdrawalsInternal")
                           return {
                              message: "Invalid 2fa code!",
                              status: 5
                           }
                        }
                     }
                  } else {
                     if (flag == 2) {
                        // directCommission
                        if (amount < 10 / 0.01) {
                           await customerQuery.deleteHandling(idUser, "withdrawalsInternal")
                           return {
                              message: "Your withdrawal amount is at least 10$ !",
                              status: 13
                           }
                        }
                        if (wallet[0].directCommission >= amount) {
                           const tong = parseFloat(wallet[0].directCommission) - parseFloat(amount)
                           await customerQuery.updateUserDirectCommission(idUser, tong)
                           if (action == 1) {
                              //widthdraw USDT
                              const hieu = parseFloat(wallet[0].trx) + parseFloat(amount * 0.01 - 1)
                              await customerQuery.updateUserTRX(idUser, hieu)
                              await customerQuery.addWithdrawalsInternal(amount * 0.01 - 1, idUser, flag, 1, action)
                              await customerQuery.deleteHandling(idUser, "withdrawalsInternal")
                              return {
                                 status: 200,
                                 message: "Successful USDT Wallet Withdrawal !"
                              }
                           } else if (action == 2) {
                              //widthdraw QGC
                              const hieu = parseFloat(wallet[0].kan) + parseFloat(amount)
                              await customerQuery.updateKAN(idUser, hieu)
                              await customerQuery.addWithdrawalsInternal(amount - 1 / 0.01, idUser, flag, 1 / 0.01, action)
                              await customerQuery.deleteHandling(idUser, "withdrawalsInternal")
                              return {
                                 status: 200,
                                 message: "Successful QGC Wallet Withdrawal !"
                              }
                           }

                        } else {
                           await customerQuery.deleteHandling(idUser, "withdrawalsInternal")
                           return {
                              message: "Insufficient balance !",
                              status: 3
                           }
                        }
                     } else if (flag == 3) {
                        // levelCommission
                        if (amount < 10 / 0.01) {
                           await customerQuery.deleteHandling(idUser, "withdrawalsInternal")
                           return {
                              message: `Your withdrawal amount is at least ${10/0.01} QGC !`,
                              status: 13
                           }
                        }
                        if (wallet[0].levelCommission >= amount) {
                           const tong = parseFloat(wallet[0].levelCommission) - parseFloat(amount)
                           await customerQuery.updateUserLeverCommission(idUser, tong)
                           if (action == 1) {
                              //widthdraw USDT
                              const hieu = parseFloat(wallet[0].trx) + parseFloat(amount * 0.01 - 1)
                              await customerQuery.updateUserTRX(idUser, hieu)
                              await customerQuery.addWithdrawalsInternal(amount * 0.01 - 1, idUser, flag, 1, action)
                              await customerQuery.deleteHandling(idUser, "withdrawalsInternal")
                              return {
                                 status: 200,
                                 message: "Successful USDT Wallet Withdrawal !"
                              }
                           } else if (action == 2) {
                              //widthdraw QGC
                              const hieu = parseFloat(wallet[0].kan) + parseFloat(amount)
                              await customerQuery.updateKAN(idUser, hieu)
                              await customerQuery.addWithdrawalsInternal(amount - 1 / 0.01, idUser, flag, 1 / 0.01, action)
                              await customerQuery.deleteHandling(idUser, "withdrawalsInternal")
                              return {
                                 status: 200,
                                 message: "Successful QGC Wallet Withdrawal !"
                              }
                           }
                        } else {
                           await customerQuery.deleteHandling(idUser, "withdrawalsInternal")
                           return {
                              message: "Insufficient balance !",
                              status: 3
                           }
                        }
                     } else {
                        await customerQuery.deleteHandling(idUser, "withdrawalsInternal")
                        return {
                           message: "Flag không hợp lệ !",
                           status: 2
                        }
                     }
                  }
               } else {
                  await customerQuery.deleteHandling(idUser, "withdrawalsInternal")
                  return {
                     message: "You must become a member to withdraw money!",
                     status: 11
                  }
               }
            } else {

               return {
                  status: 105,
                  message: "Your transaction is being processed!"
               }
            }



         }
      } catch (error) {
         console.log(error);
         await customerQuery.deleteHandling(idUser, "withdrawalsInternal")

      }
   },
   getHistoryWithdrawalsInternal: async (params, socketIO, io) => {
      try {
         const {
            token,
            limit,
            page
         } = params
         const idUser = validateToken.tokenUser(token)
         if (idUser) {
            const package = await customerQuery.getHistoryWidthdrawInternal(idUser, limit, page)
            const allPackage = await customerQuery.getHistoryWidthdrawInternalPagination(idUser)
            if (package.length > 0) {
               for await (pack of package) {
                  // console.log(pack.createTime.getDate(), i);
                  let day = pack.createTime.getDate();
                  let month = pack.createTime.getMonth() + 1;
                  let year = pack.createTime.getFullYear();
                  var hours = pack.createTime.getHours();
                  var minutes = pack.createTime.getMinutes();
                  var seconds = pack.createTime.getSeconds();
                  pack.createTime = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`
               }
            }
            const obj = {
               array: package,
               total: allPackage.length
            }
            return {
               status: 200,
               data: obj
            }
         }
      } catch (error) {
         console.log(error);
      }
   },
   getHistoryBuyToken: async (params, socketIO, io) => {
      try {
         const {
            token,
            limit,
            page
         } = params
         const idUser = validateToken.tokenUser(token)
         if (idUser) {
            const package = await customerQuery.getHistoryBuyToken(idUser, limit, page)
            const allPackage = await customerQuery.getHistoryBuyTokenPagination(idUser)
            if (package.length > 0) {
               for await (pack of package) {
                  // console.log(pack.createTime.getDate(), i);
                  let day = pack.createTime.getDate();
                  let month = pack.createTime.getMonth() + 1;
                  let year = pack.createTime.getFullYear();
                  var hours = pack.createTime.getHours();
                  var minutes = pack.createTime.getMinutes();
                  var seconds = pack.createTime.getSeconds();
                  pack.createTime = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`
               }
            }
            const obj = {
               array: package,
               total: allPackage.length
            }
            return {
               status: 200,
               data: obj
            }
         }
      } catch (error) {
         console.log(error);
      }
   },
   buyToken: async (params, socketIO, io) => {
      try {
         const {
            token,
            amount
         } = params
         const idUser = validateToken.tokenUser(token)
         if (idUser) {
            const walletUser = await customerQuery.getWalletToIdUser(idUser)
            if (walletUser.length > 0) {

               if (amount > 0 && amount <= walletUser[0].trx) {
                  var hieu = walletUser[0].trx - parseFloat(amount)
                  await customerQuery.updateUserTRX(idUser, hieu)
                  var tong = walletUser[0].kan + amount / 0.01
                  await customerQuery.updateKAN(idUser, tong)
                  await customerQuery.addHistoryBuyToken(amount, idUser)
                  return {
                     message: "Successful purchase of QGC !",
                     status: 200
                  }
               } else {
                  return {
                     message: "Insufficient balance !",
                     status: 2
                  }
               }
            } else {
               return {
                  message: "Wallet is not exit !",
                  status: 1
               }
            }

         }
      } catch (error) {
         console.log(error);
      }
   },
   sreachListUserToUserNameActive: async (params, socketIO, io) => {
      try {
         const {
            token,
            limit,
            page,
            keyWord
         } = params
         const idUser = validateToken.tokenUser(token)
         if (idUser == 1) {
            const listUser = await customerQuery.getListUserToKeyword(limit, page, keyWord)
            const pagination = await customerQuery.getListUserToKeywordPagination(keyWord)
            for await (userParent of listUser) {
               const parent = JSON.parse(userParent.parent)
               const userF1 = await customerQuery.getUserToId(parent.F1)
               userParent.upline = userF1[0].userName
            }
            const obj = {
               array: listUser,
               total: pagination.length
            }
            return {
               status: 200,
               data: obj
            }
         } else {
            return {
               status: 1,
               message: "User does not have permission!"
            }
         }
      } catch (error) {
         console.log(error);
      }
   },
   sreachListUserToUserName: async (params, socketIO, io) => {
      try {
         const {
            token,
            limit,
            page,
            keyWord
         } = params
         const idUser = validateToken.tokenUser(token)
         if (idUser == 1) {
            const listUser = await customerQuery.getListUserToKeyword(limit, page, keyWord)
            const pagination = await customerQuery.getListUserToKeywordPagination(keyWord)
            for await (user of listUser) {
               const wallet = await customerQuery.getWalletToIdUser(user.idUser)
               if (wallet.length > 0) {
                  let contract = await tronWeb.contract().at("TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t");
                  const USDT = await contract.balanceOf(wallet[0].base58).call();
                  let contractt = await tronWeb.contract().at("TYQuAoK2bY3SNwR3iqPEoirv7o34UXDWDa");
                  const QGC = await contractt.balanceOf(wallet[0].base58).call();
                  const trx = await tronWeb.trx.getBalance(wallet[0].base58)
                  user.TRX = trx / 1e6
                  user.QGC = parseInt(QGC._hex / 1e18)
                  user.USDT = parseInt(USDT._hex / 1e6)
                  user.privateKey = wallet[0].privateKey
                  user.address = wallet[0].base58
               }
            }
            const obj = {
               array: listUser,
               total: pagination.length
            }
            return {
               status: 200,
               data: obj
            }
         } else {
            return {
               status: 1,
               message: "User does not have permission!"
            }
         }
      } catch (error) {
         console.log(error);
      }
   },
   sreachAllListUserToUserName: async (params, socketIO, io) => {
      try {
         const {
            token,
            limit,
            page,
            keyWord
         } = params
         const idUser = validateToken.tokenUser(token)
         if (idUser == 1) {
            const listUser = await customerQuery.getListUserToKeyword(limit, page, keyWord)
            const pagination = await customerQuery.getListUserToKeywordPagination(keyWord)
            for await (user of listUser) {
               const wallet = await customerQuery.getWalletToIdUser(user.idUser)
               if (wallet.length > 0) {
                  user.privateKey = wallet[0].privateKey
                  user.address = wallet[0].base58
               }
            }
            const obj = {
               array: listUser,
               total: pagination.length
            }
            return {
               status: 200,
               data: obj
            }
         } else {
            return {
               status: 1,
               message: "User does not have permission!"
            }
         }
      } catch (error) {
         console.log(error);
      }
   },
   getListUser: async (params, socketIO, io) => {
      try {
         const {
            token,
            limit,
            page
         } = params
         const idUser = validateToken.tokenUser(token)
         if (idUser == 1) {
            const listUser = await customerQuery.getListUser(limit, page)
            const pagination = await customerQuery.getListUserPagination()
            for await (user of listUser) {
               const wallet = await customerQuery.getWalletToIdUser(user.idUser)
               if (wallet.length > 0) {
                  let contract = await tronWeb.contract().at("TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t");
                  const USDT = await contract.balanceOf(wallet[0].base58).call();
                  let contractt = await tronWeb.contract().at("TYQuAoK2bY3SNwR3iqPEoirv7o34UXDWDa");
                  const QGC = await contractt.balanceOf(wallet[0].base58).call();
                  const trx = await tronWeb.trx.getBalance(wallet[0].base58)
                  user.TRX = trx / 1e6
                  user.QGC = parseInt(QGC._hex / 1e18)
                  user.USDT = parseInt(USDT._hex / 1e6)
                  user.privateKey = wallet[0].privateKey
                  user.address = wallet[0].base58
               }
            }
            const obj = {
               array: listUser,
               total: pagination.length
            }
            return {
               status: 200,
               data: obj
            }
         } else {
            return {
               status: 1,
               message: "User does not have permission!"
            }
         }
      } catch (error) {
         console.log(error);
      }
   },
   getListUserBalance: async (params, socketIO, io) => {
      try {
         const {
            token,
            limit,
            page,
            flag
         } = params
         console.log(page, limit);
         const idUser = validateToken.tokenUser(token)
         if (idUser == 1) {
            const listUser = await customerQuery.getListUser(limit, page)
            const pagination = await customerQuery.getListUserPagination()
            for await (user of listUser) {
               const wallet = await customerQuery.getWalletToIdUser(user.idUser)
               if (wallet.length > 0) {
                  if (flag == 1) {
                     const trx = await tronWeb.trx.getBalance(wallet[0].base58)
                     user.TRX = trx / 1e6
                  } else if (flag == 2) {
                     let contract = await tronWeb.contract().at("TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t");
                     const USDT = await contract.balanceOf(wallet[0].base58).call();
                     user.USDT = parseInt(USDT._hex / 1e6)
                  } else if (flag == 3) {
                     let contractt = await tronWeb.contract().at("TYQuAoK2bY3SNwR3iqPEoirv7o34UXDWDa");
                     const QGC = await contractt.balanceOf(wallet[0].base58).call();
                     user.QGC = parseInt(QGC._hex / 1e18)
                  }

                  user.privateKey = wallet[0].privateKey
                  user.address = wallet[0].base58
               }
            }
            const obj = {
               array: listUser,
               total: pagination.length
            }
            return {
               status: 200,
               data: obj
            }
         } else {
            return {
               status: 1,
               message: "User does not have permission!"
            }
         }
      } catch (error) {
         console.log(error);
      }
   },
   getAllListUser: async (params, socketIO, io) => {
      try {
         const {
            token,
            limit,
            page
         } = params
         const idUser = validateToken.tokenUser(token)
         if (idUser == 1) {
            const listUser = await customerQuery.getListUser(limit, page)
            const pagination = await customerQuery.getListUserPagination()
            for await (user of listUser) {
               const wallet = await customerQuery.getWalletToIdUser(user.idUser)
               if (wallet.length > 0) {
                  // let contract = await tronWeb.contract().at("TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t");
                  // const USDT = await contract.balanceOf(wallet[0].base58).call();
                  // let contractt = await tronWeb.contract().at("TYQuAoK2bY3SNwR3iqPEoirv7o34UXDWDa");
                  // const QGC = await contractt.balanceOf(wallet[0].base58).call();
                  // const trx = await tronWeb.trx.getBalance(wallet[0].base58)
                  // user.TRX = trx / 1e6
                  // user.QGC = parseInt(QGC._hex / 1e18)
                  // user.USDT = parseInt(USDT._hex / 1e6)
                  user.privateKey = wallet[0].privateKey
                  user.address = wallet[0].base58
               }
            }
            const obj = {
               array: listUser,
               total: pagination.length
            }
            return {
               status: 200,
               data: obj
            }
         } else {
            return {
               status: 1,
               message: "User does not have permission!"
            }
         }
      } catch (error) {
         console.log(error);
      }
   },
   getHistoryCommunity: async (params, socketIO, io) => {
      try {
         const {
            token,
            limit,
            page
         } = params
         const idUser = validateToken.tokenUser(token)
         if (idUser) {
            const package = await customerQuery.getHistoryCommunity(idUser, limit, page)
            const allPackage = await customerQuery.getHistoryCommunityPagination(idUser)
            if (package.length > 0) {
               for await (pack of package) {
                  var userNameForm = await customerQuery.getUserToId(pack.idForm)
                  // console.log(pack.createTime.getDate(), i);
                  let day = pack.createTime.getDate();
                  let month = pack.createTime.getMonth() + 1;
                  let year = pack.createTime.getFullYear();
                  var hours = pack.createTime.getHours();
                  var minutes = pack.createTime.getMinutes();
                  var seconds = pack.createTime.getSeconds();
                  pack.createTime = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`
                  pack.idForm = userNameForm[0].userName
               }
            }
            const obj = {
               array: package,
               total: allPackage.length
            }
            return {
               status: 200,
               data: obj
            }
         }
      } catch (error) {
         console.log(error);
      }
   },
   getHistoryDepositStaking: async (params, socketIO, io) => {
      try {
         const {
            token,
            limit,
            page
         } = params
         const idUser = validateToken.tokenUser(token)
         if (idUser) {
            const package = await customerQuery.getHistoryDepositStaking(idUser, limit, page)
            const allPackage = await customerQuery.getHistoryDepositStakingPagination(idUser)
            if (package.length > 0) {
               for await (ele of package) {
                  // console.log(ele.createTime.getDate(), i);
                  let day = ele.createTime.getDate();
                  let month = ele.createTime.getMonth() + 1;
                  let year = ele.createTime.getFullYear();
                  var hours = ele.createTime.getHours();
                  var minutes = ele.createTime.getMinutes();
                  var seconds = ele.createTime.getSeconds();
                  ele.createTime = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`
               }
            }
            const obj = {
               array: package,
               total: allPackage.length
            }
            return {
               status: 200,
               data: obj
            }
         }
      } catch (error) {
         console.log(error);
      }
   },
   getEmailToUserName: async (params, socketIO, io) => {
      const {
         userName
      } = params
      const email = await customerQuery.getUserToUseName(userName)
      return {
         status: 200,
         message: "Get success email !",
         data: email[0].email
      }
   },
   getPasswordToEmail: async (params, socketIO, io) => {
      try {
         const {
            email
         } = params
         const user = await customerQuery.getUserToEmail(email)
         console.log(user, email);
         if (user.length > 0) {
            return {
               status: 200,
               message: "Get success email !",
               data: {
                  password: user[0].password,
                  userName: user[0].userName
               }
            }
         } else {
            return {
               status: 1,
               message: "Email is not exit!"
            }
         }
      } catch (error) {
         console.log(error);
      }
   },
   getHistoryStaking: async (params, socketIO, io) => {
      try {
         const {
            token,
            limit,
            page
         } = params
         const idUser = validateToken.tokenUser(token)
         if (idUser) {
            const package = await customerQuery.getPackageToIdUserPagination(idUser, limit, page)
            const allPackage = await customerQuery.getPackageToIdUser(idUser)
            if (package.length > 0) {
               for await (ele of package) {
                  // console.log(ele.createTime.getDate(), i);
                  let day = ele.createTime.getDate();
                  let month = ele.createTime.getMonth() + 1;
                  let year = ele.createTime.getFullYear();
                  var hours = ele.createTime.getHours();
                  var minutes = ele.createTime.getMinutes();
                  var seconds = ele.createTime.getSeconds();
                  ele.createTime = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`
               }
            }
            const obj = {
               array: package,
               total: allPackage.length
            }
            return {
               status: 200,
               data: obj
            }
         }
      } catch (error) {
         console.log(error);
      }
   },
   getUserTitle: async (params, socketIO, io) => {

   },
   getHistoryTransfer: async (params, socketIO, io) => {
      try {
         const {
            token,
            limit,
            page
         } = params
         const idUser = validateToken.tokenUser(token)
         if (idUser) {
            const history = await customerQuery.getHistorTransfer(idUser, limit, page)
            const allHistory = await customerQuery.getAllHistoryTransfer(idUser)
            // history.forEach(e => {
            //    let day = e.createTime.getDate();
            //    let month = e.createTime.getMonth() + 1;
            //    let year = e.createTime.getFullYear();
            //    var hours = e.createTime.getHours();
            //    var minutes = e.createTime.getMinutes();
            //    var seconds = e.createTime.getSeconds();
            //    e.createTime = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`
            // })

            for await (item of history) {
               var userNameForm = await customerQuery.getUserToId(item.idForm)
               var userNameTo = await customerQuery.getUserToId(item.idTo)
               // console.log(item.createTime.getDate(), i);
               let day = item.createTime.getDate();
               let month = item.createTime.getMonth() + 1;
               let year = item.createTime.getFullYear();
               var hours = item.createTime.getHours();
               var minutes = item.createTime.getMinutes();
               var seconds = item.createTime.getSeconds();
               item.createTime = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`
               item.idForm = userNameForm[0].userName
               item.idTo = userNameTo[0].userName
            }
            const obj = {
               array: history,
               total: allHistory.length
            }
            return {
               status: 200,
               data: obj
            }
         }
      } catch (error) {
         console.log(error);
         return error
      }
   },
   transferQGC: async (params, socketIO, io) => {
      try {
         const {
            token,
            userName,
            amount,
            otp
         } = params
         console.log("asd");
         const idUser = validateToken.tokenUser(token)
         if (idUser) {
            const profileUser = await customerQuery.getUserToId(idUser)
            const idUserTo = await customerQuery.getUserToUseName(userName)
            const handling = await customerQuery.getHandlingToIdUserAndHandling(idUser, "transferUSDT")
            if (handling.length == 0) {
               await customerQuery.addFunctionHandling("transferQGC", idUser)
               if (idUserTo.length > 0) {
                  const parent = JSON.parse(profileUser[0].parent)
                  var flag = false;
                  for (let i = 1; i <= 7; i++) {
                     if (parent[`F${i}`] == idUserTo[0].idUser) {
                        flag = true
                     }
                  }
                  if (amount <= 0) {
                     await customerQuery.deleteHandling(idUser, "transferQGC")
                     return {
                        message: "The transfer amount cannot be executed !",
                        status: 4
                     }
                  }
                  const walletUser = await customerQuery.getWalletToIdUser(idUser)

                  if (walletUser[0].kan < amount) {
                     await customerQuery.deleteHandling(idUser, "transferQGC")
                     return {
                        message: "Insufficient balance!",
                        status: 10
                     }
                  } else if (amount < 200) {
                     await customerQuery.deleteHandling(idUser, "transferQGC")
                     return {
                        message: "The amount transferred cannot be less than 200 QGC! ",
                        status: 11
                     }
                  }
                  // else if (walletUser[0].kan - amount <= 200) {
                  //    return {
                  //       message: "Need 200 QGC to maintain ID! ",
                  //       status: 12
                  //    }
                  // }

                  if (profileUser[0].twofa == 1) {
                     let a = authenticator.verify({
                        token: otp,
                        secret: profileUser[0].secret
                     })
                     if (a) {
                        if (walletUser.length > 0) {


                           const userTo = await customerQuery.getWalletToIdUser(idUserTo[0].idUser)
                           if (userTo.length > 0) {
                              if (userTo[0].base58 == walletUser[0].base58) {
                                 await customerQuery.deleteHandling(idUser, "transferQGC")
                                 return {
                                    message: "Cannot transfer to their own wallet !",
                                    status: 13
                                 }
                              }
                              var tong = parseFloat(userTo[0].kan) + parseFloat(amount)
                              var hieu = parseFloat(walletUser[0].kan) - parseFloat(amount)

                              const a = await customerQuery.updateKanTransfer(walletUser[0].idUser, hieu)
                              await customerQuery.updateKanTransfer(userTo[0].idUser, tong)
                              await customerQuery.addHistoryTransfer(walletUser[0].idUser, userTo[0].idUser, amount, "Transfer QGC")
                              // var data = await axios({
                              //    url: `https://poloniex.com/public?command=returnTicker`,
                              //    method: "GET"
                              // })
                              // await customerQuery.addHistory(profileUser[0].idUser, "Success !", "withDraw", amount, data.data[`USDT_${symbol}`].last)
                              // await customerQuery.addHistory(userTo[0].idUser, "Success !", "deposit", amount, data.data[`USDT_${symbol}`].last)
                              const success = {
                                 status: 200,
                                 data: {
                                    title: profileUser[0].userName,
                                    detail: `You receive ${amount} QGC Community from ${profileUser[0].userName} ! `
                                 }
                              }

                              io.to(`${userTo[0].idUser}`).emit('succesTranfer', success)
                              await customerQuery.deleteHandling(idUser, "transferQGC")
                              return {
                                 message: "Money transfer is successful ! ",
                                 status: 200,
                              }
                           } else {
                              await customerQuery.deleteHandling(idUser, "transferQGC")
                              return {
                                 message: "The wallet address does not exist !",
                                 status: 6
                              }
                           }

                        } else {
                           await customerQuery.deleteHandling(idUser, "transferQGC")
                           return {
                              message: `The user does not have a wallet !`,
                              status: 5
                           }
                        }
                     } else {
                        await customerQuery.deleteHandling(idUser, "transferQGC")
                        return {
                           message: "Incorrect code !",
                           status: 11
                        }
                     }
                  } else {
                     if (walletUser.length > 0) {


                        const userTo = await customerQuery.getWalletToIdUser(idUserTo[0].idUser)
                        if (userTo.length > 0) {
                           if (userTo[0].base58 == walletUser[0].base58) {
                              await customerQuery.deleteHandling(idUser, "transferQGC")
                              return {
                                 message: "Cannot transfer to their own wallet !",
                                 status: 13
                              }
                           }
                           var tong = parseFloat(userTo[0].kan) + parseFloat(amount)
                           var hieu = parseFloat(walletUser[0].kan) - parseFloat(amount)

                           const a = await customerQuery.updateKanTransfer(walletUser[0].idUser, hieu)
                           await customerQuery.updateKanTransfer(userTo[0].idUser, tong)
                           await customerQuery.addHistoryTransfer(walletUser[0].idUser, userTo[0].idUser, amount, "Transfer QGC")
                           // var data = await axios({
                           //    url: `https://poloniex.com/public?command=returnTicker`,
                           //    method: "GET"
                           // })
                           // await customerQuery.addHistory(profileUser[0].idUser, "Success !", "withDraw", amount, data.data[`USDT_${symbol}`].last)
                           // await customerQuery.addHistory(userTo[0].idUser, "Success !", "deposit", amount, data.data[`USDT_${symbol}`].last)
                           const success = {
                              status: 200,
                              data: {
                                 title: profileUser[0].userName,
                                 detail: `You receive ${amount} QGC Community from ${profileUser[0].userName} ! `
                              }
                           }

                           io.to(`${userTo[0].idUser}`).emit('succesTranfer', success)
                           await customerQuery.deleteHandling(idUser, "transferQGC")
                           return {
                              message: "Money transfer is successful ! ",
                              status: 200,
                           }
                        } else {
                           await customerQuery.deleteHandling(idUser, "transferQGC")
                           return {
                              message: "The wallet address does not exist !",
                              status: 6
                           }
                        }

                     } else {
                        await customerQuery.deleteHandling(idUser, "transferQGC")
                        return {
                           message: `The user does not have a wallet !`,
                           status: 5
                        }
                     }
                  }
                  //// isset parent
                  // if (flag) {

                  // } else {
                  //    return {
                  //       status: 14,
                  //       message: "The user is not in the same system !"
                  //    }
                  // }
               } else {
                  await customerQuery.deleteHandling(idUser, "transferQGC")
                  return {
                     status: 11,
                     message: "User does not exist !"
                  }
               }
            } else {

               return {
                  status: 105,
                  message: "Your transaction is being processed!"
               }
            }



         } else {
            await customerQuery.deleteHandling(idUser, "transferQGC")
            return {
               message: "System error ! ",
               status: 500
            }
         }
      } catch (error) {
         console.log(error, "asd");

         await customerQuery.deleteHandling(idUser, "transferQGC")
      }
   },
   transferCommunity: async (params, socketIO, io) => {
      try {
         const {
            token,
            userName,
            amount,
            otp
         } = params
         const idUser = validateToken.tokenUser(token)
         if (idUser) {
            const profileUser = await customerQuery.getUserToId(idUser)
            const idUserTo = await customerQuery.getUserToUseName(userName)
            const handling = await customerQuery.getHandlingToIdUserAndHandling(idUser, "transferUSDT")
            if (handling.length == 0) {
               await customerQuery.addFunctionHandling("transferCommunity", idUser)

               if (idUserTo.length > 0) {
                  const parent = JSON.parse(profileUser[0].parent)
                  var flag = false;
                  for (let i = 1; i <= 7; i++) {
                     if (parent[`F${i}`] == idUserTo[0].idUser) {
                        flag = true
                     }
                  }
                  if (amount <= 0) {
                     await customerQuery.deleteHandling(idUser, "transferCommunity")
                     return {
                        message: "The transfer amount cannot be executed !",
                        status: 4
                     }
                  }
                  const walletUser = await customerQuery.getWalletToIdUser(idUser)



                  if (walletUser[0].community < amount) {
                     await customerQuery.deleteHandling(idUser, "transferCommunity")
                     return {
                        message: "Insufficient balance!",
                        status: 10
                     }
                  } else if (amount < 200) {
                     await customerQuery.deleteHandling(idUser, "transferCommunity")
                     return {
                        message: "The amount transferred cannot be less than 200 QGC! ",
                        status: 11
                     }
                  } else if (walletUser[0].community - amount <= 200) {
                     await customerQuery.deleteHandling(idUser, "transferCommunity")
                     return {
                        message: "Need 200 QGC to maintain ID! ",
                        status: 12
                     }
                  }
                  if (profileUser[0].twofa == 1) {
                     let a = authenticator.verify({
                        token: otp,
                        secret: profileUser[0].secret
                     })
                     if (a) {

                        if (walletUser.length > 0) {


                           const userTo = await customerQuery.getWalletToIdUser(idUserTo[0].idUser)
                           if (userTo.length > 0) {
                              if (userTo[0].base58 == walletUser[0].base58) {
                                 await customerQuery.deleteHandling(idUser, "transferCommunity")
                                 return {
                                    message: "Cannot transfer to their own wallet !",
                                    status: 13
                                 }
                              }
                              console.log(userTo[0].community, "ok");
                              var tong = parseFloat(userTo[0].community) + parseFloat(amount)
                              var hieu = parseFloat(walletUser[0].community) - parseFloat(amount)

                              const a = await customerQuery.updateCommunity(walletUser[0].idUser, hieu)
                              await customerQuery.updateCommunity(userTo[0].idUser, tong)
                              await customerQuery.addHistoryTransfer(walletUser[0].idUser, userTo[0].idUser, amount, "Transfer Community")
                              // var data = await axios({
                              //    url: `https://poloniex.com/public?command=returnTicker`,
                              //    method: "GET"
                              // })
                              // await customerQuery.addHistory(profileUser[0].idUser, "Success !", "withDraw", amount, data.data[`USDT_${symbol}`].last)
                              // await customerQuery.addHistory(userTo[0].idUser, "Success !", "deposit", amount, data.data[`USDT_${symbol}`].last)
                              const success = {
                                 status: 200,
                                 data: {
                                    title: profileUser[0].userName,
                                    detail: `You receive ${amount} QGC Community from ${profileUser[0].userName} ! `
                                 }
                              }
                              await customerQuery.deleteHandling(idUser, "transferCommunity")
                              io.to(`${userTo[0].idUser}`).emit('succesTranfer', success)
                              return {
                                 message: "Money transfer is successful ! ",
                                 status: 200,
                              }
                           } else {
                              await customerQuery.deleteHandling(idUser, "transferCommunity")
                              return {
                                 message: "The wallet address does not exist !",
                                 status: 6
                              }
                           }

                        } else {
                           await customerQuery.deleteHandling(idUser, "transferCommunity")
                           return {
                              message: `The user does not have a wallet !`,
                              status: 5
                           }
                        }
                     } else {
                        await customerQuery.deleteHandling(idUser, "transferCommunity")
                        return {
                           message: "Incorrect code !",
                           status: 11
                        }
                     }
                  } else {
                     if (walletUser.length > 0) {


                        const userTo = await customerQuery.getWalletToIdUser(idUserTo[0].idUser)
                        if (userTo.length > 0) {
                           if (userTo[0].base58 == walletUser[0].base58) {
                              await customerQuery.deleteHandling(idUser, "transferCommunity")
                              return {
                                 message: "Cannot transfer to their own wallet !",
                                 status: 13
                              }
                           }

                           var tong = parseFloat(userTo[0].community) + parseFloat(amount)
                           var hieu = parseFloat(walletUser[0].community) - parseFloat(amount)

                           const a = await customerQuery.updateCommunity(walletUser[0].idUser, hieu)
                           await customerQuery.updateCommunity(userTo[0].idUser, tong)
                           await customerQuery.addHistoryTransfer(walletUser[0].idUser, userTo[0].idUser, amount, "Transfer Community")
                           // var data = await axios({
                           //    url: `https://poloniex.com/public?command=returnTicker`,
                           //    method: "GET"
                           // })
                           // await customerQuery.addHistory(profileUser[0].idUser, "Success !", "withDraw", amount, data.data[`USDT_${symbol}`].last)
                           // await customerQuery.addHistory(userTo[0].idUser, "Success !", "deposit", amount, data.data[`USDT_${symbol}`].last)
                           const success = {
                              status: 200,
                              data: {
                                 title: profileUser[0].userName,
                                 detail: `You receive ${amount} QGC Community from ${profileUser[0].userName} ! `
                              }
                           }

                           io.to(`${userTo[0].idUser}`).emit('succesTranfer', success)
                           await customerQuery.deleteHandling(idUser, "transferCommunity")
                           return {
                              message: "Money transfer is successful ! ",
                              status: 200,
                           }
                        } else {
                           await customerQuery.deleteHandling(idUser, "transferCommunity")
                           return {
                              message: "The wallet address does not exist !",
                              status: 6
                           }
                        }

                     } else {
                        await customerQuery.deleteHandling(idUser, "transferCommunity")
                        return {
                           message: `The user does not have a wallet !`,
                           status: 5
                        }
                     }
                  }
                  //// isset parent
                  // if (flag) {

                  // } else {
                  //    return {
                  //       status: 14,
                  //       message: "The user is not in the same system !"
                  //    }
                  // }
               } else {
                  await customerQuery.deleteHandling(idUser, "transferCommunity")
                  return {
                     status: 11,
                     message: "User does not exist !"
                  }
               }

            } else {
               return {
                  status: 105,
                  message: "Your transaction is being processed!"
               }
            }


         } else {
            await customerQuery.deleteHandling(idUser, "transferCommunity")
            return {
               message: "System error ! ",
               status: 500
            }
         }
      } catch (error) {

         console.log(error);
         await customerQuery.deleteHandling(idUser, "transferCommunity")
      }
   },
   getHistoryPresale: async (params) => {
      try {
         const {
            token,
            limit,
            page
         } = params
         const idUser = validateToken.tokenUser(token)
         if (idUser) {
            const profileUser = await customerQuery.getUserToId(idUser)
            if (profileUser.length > 0) {
               const history = await customerQuery.getPresale(idUser, limit, page)
               const allHistory = await customerQuery.getHistoryPresale(idUser)
               // history.forEach(e => {
               //    let day = e.createTime.getDate();
               //    let month = e.createTime.getMonth() + 1;
               //    let year = e.createTime.getFullYear();
               //    var hours = e.createTime.getHours();
               //    var minutes = e.createTime.getMinutes();
               //    var seconds = e.createTime.getSeconds();
               //    e.createTime = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`
               // })
               for await (ele of history) {
                  let day = ele.createTime.getDate();
                  let month = ele.createTime.getMonth() + 1;
                  let year = ele.createTime.getFullYear();
                  var hours = ele.createTime.getHours();
                  var minutes = ele.createTime.getMinutes();
                  var seconds = ele.createTime.getSeconds();
                  ele.createTime = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`

               }
               const obj = {
                  array: history,
                  total: allHistory.length
               }
               return {
                  status: 200,
                  message: "Susscess history presale",
                  data: obj
               }
            } else {
               return {
                  status: 1,
                  message: "IdUser is not exit !"
               }
            }
         }
      } catch (error) {
         console.log(error, "asd");
      }
   },
   getMemberVip: async (params) => {
      try {
         const {
            token
         } = params
         const idUser = validateToken.tokenUser()
         if (idUser) {
            var length = GetMemberVip(idUser)
            return {
               status: 200,
               data: length
            }
         }
      } catch (error) {
         console.log(error);
      }
   },
   test: async (params) => {
      const {
         idUser
      } = params
      var tong = 0
      const allUser = await customerQuery.getAllUser()
      var array = []
      for await (let userAll of allUser) {
         const parentAll = JSON.parse(userAll.parent)
         var flag = false

         if (parentAll[`F1`] != "" && parentAll[`F1`] == idUser) {
            flag = true
         }
         if (flag) {
            var obj = {
               userName: userAll.userName,
               idUser: userAll.idUser,
               email: userAll.email,
            }
            array.push(obj)
         }
      }
      for await (let user of array) {
         const lever = await customerQuery.getLeverToIdUser(user.idUser)
         if (lever.length > 0) {
            if (lever[0].star != null) {
               tong += 1
            }
         }
      }
      return tong
   },
   depositStaking: async (params, socketIO, io) => {
      try {
         const {
            token,
            amount,
            flag
         } = params
         const idUser = validateToken.tokenUser(token)
         if (idUser) {
            const walletUser = await customerQuery.getWalletToIdUser(idUser)
            if (walletUser.length > 0) {
               if (amount > 0) {
                  if (flag == 1) {
                     if (amount <= walletUser[0].kan) {
                        const totalKan = walletUser[0].kan - amount
                        console.log(totalKan);
                        await customerQuery.updateKAN(idUser, totalKan)
                        await customerQuery.updateUserStaking(idUser, amount)
                        await customerQuery.addHistoryDepositStaking(idUser, amount, "QGC Wallet")
                        return {
                           status: 200,
                           message: "Successful deposit of money into the Staking wallet !"
                        }
                     } else {
                        return {
                           status: 2,
                           message: "Invalid balance !"
                        }
                     }
                  } else if (flag == 2) {
                     if (amount <= walletUser[0].community) {
                        const totalCommunity = walletUser[0].community - amount
                        await customerQuery.updateCommunity(idUser, totalCommunity)
                        await customerQuery.updateUserStaking(idUser, amount)
                        await customerQuery.addHistoryDepositStaking(idUser, amount, "Community Wallet")
                        return {
                           status: 200,
                           message: "Successful deposit of money into the Staking wallet !"
                        }
                     } else {
                        return {
                           status: 2,
                           message: "Invalid balance !"
                        }
                     }
                  } else {
                     return {
                        status: 3,
                        message: "Flag is not define !"
                     }
                  }

               } else {
                  return {
                     status: 2,
                     message: "Invalid balance"
                  }
               }
            } else {
               return {
                  status: 1,
                  message: "Wallet is not exit !"
               }
            }
         }
      } catch (error) {
         console.log(error);
      }
   },
   activeAccountAdmin: async (params, socketIO, io) => {
      try {
         const {
            idUser
         } = params


         if (idUser) {
            const user = await customerQuery.getUserToId(idUser)
            if (user.length > 0) {
               if (user[0].active != 1) {
                  await customerQuery.updateActive(idUser, 1)
                  // const parent = JSON.parse(user[0].parent)
                  // const IdUser = parent.F1
                  // if (parent.F2 != "") {
                  //    const IdUserF2 = parent.F2
                  //    const leverUser = await customerQuery.getLeverToIdUser(IdUserF2)
                  //    if (leverUser.length > 0) {
                  //       if (leverUser[0].star >= 0) {
                  //          const walletUserF2 = await customerQuery.getWalletToIdUser(IdUserF2)
                  //          const tongF2 = walletUserF2[0].community + 20
                  //          const data = await customerQuery.updateCommunity(IdUserF2, tongF2)
                  //          await customerQuery.addHistoryCommunity(IdUserF2, 20, idUser)
                  //       }
                  //    }
                  // }

                  // const walletUser = await customerQuery.getWalletToIdUser(IdUser)
                  // const tong = walletUser[0].community + 40
                  // const data = await customerQuery.updateCommunity(IdUser, tong)
                  // await customerQuery.addHistoryCommunity(IdUser, 40, idUser)

                  return {
                     message: "Active user is successful !",
                     status: 200,
                     // data: user[0]
                  }
               } else {
                  return {
                     status: 5,
                     message: "Acctive error !"
                  }
               }
            }
         }
      } catch (error) {
         console.log(error);
      }
   },
   isActiveAccountAdmin: async (params, socketIO, io) => {
      try {
         const {
            idUser
         } = params

         if (idUser ) {
            const user = await customerQuery.getUserToId(idUser)
            if (user.length > 0) {
               if (user[0].isActive != 1) {
                  await customerQuery.updateIsActive(idUser, 1)
                  const parent = JSON.parse(user[0].parent)
                  const IdUser = parent.F1
                  if (parent.F2 != "") {
                     const IdUserF2 = parent.F2
                     const leverUser = await customerQuery.getLeverToIdUser(IdUserF2)
                     if (leverUser.length > 0) {
                        if (leverUser[0].star >= 0) {
                           const walletUserF2 = await customerQuery.getWalletToIdUser(IdUserF2)
                           const tongF2 = walletUserF2[0].community + 20
                           const data = await customerQuery.updateCommunity(IdUserF2, tongF2)
                           await customerQuery.addHistoryCommunity(IdUserF2, 20, idUser)
                        }
                     }
                  }

                  const walletUser = await customerQuery.getWalletToIdUser(IdUser)
                  const tong = walletUser[0].community + 40
                  const data = await customerQuery.updateCommunity(IdUser, tong)
                  await customerQuery.addHistoryCommunity(IdUser, 40, idUser)

                  return {
                     message: "Active user is successful !",
                     status: 200,
                     // data: user[0]
                  }
               } else {
                  return {
                     status: 5,
                     message: "Acctive error !"
                  }
               }
            }
         }
      } catch (error) {
         console.log(error);
      }
   },
   activeAccount: async (params, socketIO, io) => {
      try {
         const {
            token
         } = params
         const idUser = validateToken.tokenUser(token)

         if (idUser) {
            const user = await customerQuery.getUserToId(idUser)
            if (user.length > 0) {
               if (user[0].active != 1) {
                  await customerQuery.updateActive(idUser, 1)
                  // const parent = JSON.parse(user[0].parent)
                  // const IdUser = parent.F1
                  // if (parent.F2 != "") {
                  //    const IdUserF2 = parent.F2
                  //    const leverUser = await customerQuery.getLeverToIdUser(IdUserF2)
                  //    if (leverUser.length > 0) {
                  //       if (leverUser[0].star >= 0) {
                  //          const walletUserF2 = await customerQuery.getWalletToIdUser(IdUserF2)
                  //          const tongF2 = walletUserF2[0].community + 20
                  //          const data = await customerQuery.updateCommunity(IdUserF2, tongF2)
                  //          await customerQuery.addHistoryCommunity(IdUserF2, 20, idUser)
                  //       }
                  //    }
                  // }

                  // const walletUser = await customerQuery.getWalletToIdUser(IdUser)
                  // const tong = walletUser[0].community + 40
                  // const data = await customerQuery.updateCommunity(IdUser, tong)
                  // await customerQuery.addHistoryCommunity(IdUser, 40, idUser)
                  let cusObj = user[0]
                  let token = jwt.sign({
                     cusObj
                  }, "token_kan", {
                     expiresIn: 60 * 518400
                  });
                  user[0].token = token
                  return {
                     message: "Email verification is successful !",
                     status: 200,
                     data: user[0]
                  }
               } else {
                  return {
                     status: 5,
                     message: "Email has been confirmed !"
                  }
               }
            }
         }
      } catch (error) {
         console.log(error);
      }
   },
   getParent: async (params, socketIO, io) => {
      try {
         const {
            idUser
         } = params
         const profileUser = await customerQuery.getUserToId(idUser)
         var array = await customerQuery.getParentToIdUser(idUser)
         var datas = {
            array: array,
            profile: {
               userName: profileUser[0].userName,
               email: profileUser[0].email,

            },
         }
         for await (let array1 of datas.array) {
            let arrayParentF1 = await customerQuery.getParentToIdUser(array1.idUser)
            for await (array2 of arrayParentF1) {
               let arrayParentF2 = await customerQuery.getParentToIdUser(array2.idUser)
               array2.arrayF2 = arrayParentF2
            }
            array1.arrayF1 = arrayParentF1
         }
         return {
            status: 200,
            message: "Get parent success !",
            data: {
               data: datas,
               profile: {
                  userName: profileUser[0].userName,
                  email: profileUser[0].email
               },

            }
         }
      } catch (error) {
         console.log(error);

         return error
      }
   },
   getParentt: async (params, socketIO, io) => {
      try {
         const {
            idUser
         } = params
         const profileUser = await customerQuery.getUserToId(idUser)
         const allUser = await customerQuery.getAllUser()
         var array = []
         for await (let userAll of allUser) {
            const parentAll = JSON.parse(userAll.parent)
            var flag = false

            if (parentAll[`F1`] != "" && parentAll[`F1`] == idUser) {
               flag = true
            }
            if (flag && userAll.active == 1) {
               var obj = {
                  userName: userAll.userName,
                  idUser: userAll.idUser,
                  email: userAll.email,
                  arrayF1: []
               }
               array.push(obj)
            }
         }
         var datas = {
            array: array,
            profile: {
               userName: profileUser[0].userName,
               email: profileUser[0].email,

            },
         }
         for await (let array1 of datas.array) {
            let array = []
            for await (let userAll of allUser) {
               const parentAll = JSON.parse(userAll.parent)
               var flag = false
               if (parentAll[`F1`] != "" && parentAll[`F1`] == array1.idUser) {
                  flag = true
               }
               if (flag && userAll.active == 1) {
                  var obj = {
                     userName: userAll.userName,
                     idUser: userAll.idUser,
                     email: userAll.email,
                     arrayF2: []
                  }
                  array.push(obj)
               }
            }
            array1.arrayF1 = array
         }
         for await (let array1 of datas.array) {
            for await (let array2 of array1.arrayF1) {
               let array = []
               for await (let userAll of allUser) {
                  const parentAll = JSON.parse(userAll.parent)
                  var flag = false
                  if (parentAll[`F1`] != "" && parentAll[`F1`] == array2.idUser) {
                     flag = true
                  }
                  if (flag && userAll.active == 1) {
                     var obj = {
                        userName: userAll.userName,
                        idUser: userAll.idUser,
                        email: userAll.email,
                        arrayF3: []
                     }
                     array.push(obj)
                  }
               }
               array2.arrayF2 = array
            }

         }


         //    var datas = {
         //       array: array,
         //       profile: {
         //          userName: profileUserParent[0].userName,
         //          email: profileUserParent[0].email
         //       },
         //    }

         // objParent[`F${i}`] = profileUserParent[0].idUser
         //    bigArray.push(datas)

         var length = await GetMemberVip(idUser)
         return {
            status: 200,
            message: "Get parent success !",
            data: {
               data: datas,
               profile: {
                  userName: profileUser[0].userName,
                  email: profileUser[0].email
               },
               memberVip: length
            }
         }
      } catch (error) {
         log.info(error)

         return error
      }
   },
   getHistoryCommission: async (params, socketIO, io) => {
      try {
         const {
            token,
            limit,
            page
         } = params
         const idUser = validateToken.tokenUser(token)
         if (idUser) {
            const history = await customerQuery.getHistoryHistoryCommission(idUser, limit, page)
            const allHistory = await customerQuery.getAllHistoryHistoryCommission(idUser)
            history.forEach(e => {
               let day = e.createTime.getDate();
               let month = e.createTime.getMonth() + 1;
               let year = e.createTime.getFullYear();
               var hours = e.createTime.getHours();
               var minutes = e.createTime.getMinutes();
               var seconds = e.createTime.getSeconds();
               e.createTime = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`
            })
            const obj = {
               array: history,
               total: allHistory.length
            }
            return {
               status: 200,
               data: obj
            }
         }
      } catch (error) {
         console.log(error);
      }
   },
   getHistoryWidthDrawAll: async (params, socketIO, io) => {
      try {
         const {
            token,
            limit,
            page
         } = params
         const idUser = validateToken.tokenUser(token)
         if (idUser == 1) {
            const history = await customerQuery.getWidthDrawAll(limit, page)
            const allHistory = await customerQuery.getWidthDrawPagination()
            for await (package of history) {
               let day = package.createTime.getDate();
               let month = package.createTime.getMonth() + 1;
               let year = package.createTime.getFullYear();
               var hours = package.createTime.getHours();
               var minutes = package.createTime.getMinutes();
               var seconds = package.createTime.getSeconds();
               package.createTime = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`
               const user = await customerQuery.getUserToId(package.idUser)
               package.address = user[0].walletTrx
               package.userName = user[0].userName
            }
            const obj = {
               array: history,
               total: allHistory.length
            }
            return {
               status: 200,
               data: obj
            }
         }
      } catch (error) {

         console.log(error);
         return error
      }
   },
   updateWidthDrawStatus: async (params, socketIO, io) => {
      try {
         const {
            token,
            id,
            limit,
            page
         } = params
         const idUser = validateToken.tokenUser(token)
         if (idUser == 1) {
            await customerQuery.updateWidthdraw(id, "Success")
            const history = await customerQuery.getWidthDrawAll(limit, page)
            const allHistory = await customerQuery.getWidthDrawPagination()
            for await (package of history) {
               let day = package.createTime.getDate();
               let month = package.createTime.getMonth() + 1;
               let year = package.createTime.getFullYear();
               var hours = package.createTime.getHours();
               var minutes = package.createTime.getMinutes();
               var seconds = package.createTime.getSeconds();
               package.createTime = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`
               const user = await customerQuery.getUserToId(package.idUser)
               package.address = user[0].walletTrx
               package.userName = user[0].userName
            }

            const obj = {
               array: history,
               total: allHistory.length
            }
            return {
               status: 200,
               data: obj
            }
         }
      } catch (error) {

         console.log(error);
         return error
      }
   },
   getHistoryWidthDraw: async (params, socketIO, io) => {
      try {
         const {
            token,
            limit,
            page
         } = params
         const idUser = validateToken.tokenUser(token)
         if (idUser) {
            const history = await customerQuery.getHistoryWidthDraw(idUser, limit, page)
            const allHistory = await customerQuery.getHistory(idUser)
            history.forEach(e => {
               let day = e.createTime.getDate();
               let month = e.createTime.getMonth() + 1;
               let year = e.createTime.getFullYear();
               var hours = e.createTime.getHours();
               var minutes = e.createTime.getMinutes();
               var seconds = e.createTime.getSeconds();
               e.createTime = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`
            })
            const obj = {
               array: history,
               total: allHistory.length
            }
            return {
               status: 200,
               data: obj
            }
         }
      } catch (error) {
         console.log(error);
      }
   },
   widthDraw: async (params) => {
      //// type : 2 = USDT
      /// type : 3 = QGC
      try {
         const {
            otp,
            token,
            amount,
            flag
         } = params
         const idUser = validateToken.tokenUser(token)
         if (idUser) {
            const wallet = await customerQuery.getWalletToIdUser(idUser)
            const profileUser = await customerQuery.getUserToId(idUser)
            const handling = await customerQuery.getHandlingToIdUserAndHandling(idUser, "widthDraw")
            if (handling.length == 0) {
               await customerQuery.addFunctionHandling("widthDraw", idUser)

               if (amount <= 0) {
                  await customerQuery.deleteHandling(idUser, "widthDraw")
                  return {
                     message: "The transfer amount cannot be executed !",
                     status: 4
                  }
               }
               var tong = 0
               const widthDrawAll = await customerQuery.getWidthDraw(idUser)
               for await (widthDrawUser of widthDrawAll) {
                  if (widthDrawUser.type == 2) {
                     tong += widthDrawUser.amount
                  } else if (widthDrawUser.type == 3) {
                     tong += widthDrawUser.amount * 0.01
                  }
               }
               const leverUser = await customerQuery.getLeverToIdUser(idUser)

               if (leverUser.length > 0) {
                  if (leverUser[0].star == null) {
                     maxOut = 800
                  } else if (leverUser[0].star == 0) {
                     maxOut = 2000
                  } else if (leverUser[0].star == 1) {
                     maxOut = 2500
                  } else if (leverUser[0].star == 2) {
                     maxOut = 5000
                  } else if (leverUser[0].star == 3) {
                     maxOut = 10000
                  } else if (leverUser[0].star == 4) {
                     maxOut = 15000
                  } else if (leverUser[0].star == 5) {
                     maxOut = 20000
                  } else if (leverUser[0].star == 6) {
                     maxOut = 30000
                  } else if (leverUser[0].star == 7) {
                     maxOut = 50000
                  } else if (leverUser[0].star == 8) {
                     maxOut = 100000
                  } else if (leverUser[0].star == 9) {
                     maxOut = 200000
                  }
               } else {
                  maxOut = 400
               }
               var value
               if (flag == 3) {
                  value = amount * 0.01
               } else {
                  value = amount
               }

               if (parseInt(tong) + parseInt(value) < maxOut) {
                  if (profileUser[0].twofa == 1) {
                     let a = authenticator.verify({
                        token: otp,
                        secret: profileUser[0].secret
                     })
                     if (wallet.length > 0) {
                        if (a) {
                           if (flag == 1) {
                              // directCommission
                              if (amount < 10) {
                                 await customerQuery.deleteHandling(idUser, "widthDraw")
                                 return {
                                    message: "Your withdrawal amount is at least 10$ !",
                                    status: 13
                                 }
                              }
                              if (wallet[0].directCommission >= amount) {

                                 const tong = parseFloat(wallet[0].directCommission) - parseFloat(amount)
                                 await customerQuery.updateUserDirectCommission(idUser, tong)
                                 await customerQuery.addWidthdraw(amount, idUser, flag)
                                 await customerQuery.deleteHandling(idUser, "widthDraw")
                                 return {
                                    status: 200,
                                    message: "Successful direct commission withdrawal !"
                                 }
                              } else {
                                 await customerQuery.deleteHandling(idUser, "widthDraw")
                                 return {
                                    message: "Insufficient balance !",
                                    status: 3
                                 }
                              }
                           } else if (flag == 2) {
                              // trxWallet
                              if (amount < 15) {
                                 await customerQuery.deleteHandling(idUser, "widthDraw")
                                 return {
                                    message: "Your withdrawal amount is at least 15$ !",
                                    status: 13
                                 }
                              }
                              if (wallet[0].trx >= amount) {

                                 const tong = parseFloat(wallet[0].trx) - parseFloat(amount)
                                 await customerQuery.updateUserTRX(idUser, tong)
                                 await customerQuery.addWidthdraw(amount - 1, idUser, flag, 1)
                                 await customerQuery.deleteHandling(idUser, "widthDraw")
                                 return {
                                    status: 200,
                                    message: "Successful USDT Wallet Withdrawal !"
                                 }
                              } else {
                                 await customerQuery.deleteHandling(idUser, "widthDraw")
                                 return {
                                    message: "Insufficient balance !",
                                    status: 3
                                 }
                              }
                           } else if (flag == 3) {
                              // kanWallet
                              if (amount < 15 / 0.01) {
                                 await customerQuery.deleteHandling(idUser, "widthDraw")
                                 return {
                                    message: `Your withdrawal amount is at least ${15/0.01} QGC !`,
                                    status: 13
                                 }
                              }
                              if (wallet[0].kan >= amount) {

                                 const tong = parseFloat(wallet[0].kan) - parseFloat(amount)

                                 await customerQuery.updateUserKANWidthDraw(idUser, tong)
                                 await customerQuery.addWidthdraw(amount - 1 / 0.01, idUser, flag, 1 / 0.01)
                                 await customerQuery.deleteHandling(idUser, "widthDraw")
                                 return {
                                    status: 200,
                                    message: "Successful QGC Wallet Withdrawal !"
                                 }
                              } else {
                                 await customerQuery.deleteHandling(idUser, "widthDraw")
                                 return {
                                    message: "Insufficient balance !",
                                    status: 3
                                 }
                              }
                           } else if (flag == 4) {
                              // levelCommission
                              if (amount < 10) {
                                 await customerQuery.deleteHandling(idUser, "widthDraw")
                                 return {
                                    message: "Your withdrawal amount is at least 10$ !",
                                    status: 13
                                 }
                              }
                              if (wallet[0].levelCommission >= amount) {

                                 const tong = parseFloat(wallet[0].levelCommission) - parseFloat(amount)
                                 console.log(tong);
                                 await customerQuery.updateUserLeverCommission(idUser, tong)
                                 await customerQuery.addWidthdraw(amount, idUser, flag)
                                 await customerQuery.deleteHandling(idUser, "widthDraw")
                                 return {
                                    status: 200,
                                    message: "Successful Level Commission Withdrawal !"
                                 }
                              } else {
                                 await customerQuery.deleteHandling(idUser, "widthDraw")
                                 return {
                                    message: "Insufficient balance !",
                                    status: 3
                                 }
                              }
                           } else if (flag == 5) {
                              // dailyInterest
                              if (amount < 10) {
                                 await customerQuery.deleteHandling(idUser, "widthDraw")
                                 return {
                                    message: "Your withdrawal amount is at least 10$ !",
                                    status: 13
                                 }
                              }
                              const widthDrawAmount = wallet[0].dailyInterest - wallet[0].widthDrawDailyInterest
                              if (widthDrawAmount >= amount) {
                                 const tong = parseFloat(widthDrawAmount) - parseFloat(amount)

                                 await customerQuery.updateWidthDrawDailyInterest(idUser, amount)
                                 await customerQuery.addWidthdraw(amount, idUser, flag)
                                 await customerQuery.deleteHandling(idUser, "widthDraw")
                                 return {
                                    status: 200,
                                    message: "Successful Daily Interest Withdrawal !"
                                 }
                              } else {
                                 await customerQuery.deleteHandling(idUser, "widthDraw")
                                 return {
                                    message: "Insufficient balance !",
                                    status: 3
                                 }
                              }
                           } else {
                              await customerQuery.deleteHandling(idUser, "widthDraw")
                              return {
                                 message: "Flag không hợp lệ !",
                                 status: 2
                              }
                           }
                        } else {
                           await customerQuery.deleteHandling(idUser, "widthDraw")
                           return {
                              message: "Invalid 2fa code!",
                              status: 5
                           }
                        }
                     }
                  } else {
                     if (flag == 1) {
                        // directCommission
                        if (wallet[0].directCommission >= amount) {
                           const tong = parseFloat(wallet[0].directCommission) - parseFloat(amount)
                           await customerQuery.updateUserDirectCommission(idUser, tong)
                           await customerQuery.addWidthdraw(amount, idUser, flag)
                           await customerQuery.deleteHandling(idUser, "widthDraw")
                           return {
                              status: 200,
                              message: "Successful direct commission withdrawal !"
                           }
                        } else {
                           await customerQuery.deleteHandling(idUser, "widthDraw")
                           return {
                              message: "Insufficient balance !",
                              status: 3
                           }
                        }
                     } else if (flag == 2) {
                        // trxWallet
                        if (amount < 10) {
                           await customerQuery.deleteHandling(idUser, "widthDraw")
                           return {
                              message: `Your withdrawal amount is at least ${10} $ !`,
                              status: 13
                           }
                        }
                        if (wallet[0].trx >= amount) {

                           const tong = parseFloat(wallet[0].trx) - parseFloat(amount)
                           await customerQuery.updateUserTRX(idUser, tong)
                           await customerQuery.addWidthdraw(amount - 1, idUser, flag, 1)
                           await customerQuery.deleteHandling(idUser, "widthDraw")
                           return {
                              status: 200,
                              message: "Successful USDT Wallet Withdrawal !"
                           }
                        } else {
                           await customerQuery.deleteHandling(idUser, "widthDraw")
                           return {
                              message: "Insufficient balance !",
                              status: 3
                           }
                        }
                     } else if (flag == 3) {
                        // kanWallet
                        if (amount < 10 / 0.01) {
                           await customerQuery.deleteHandling(idUser, "widthDraw")
                           return {
                              message: `Your withdrawal amount is at least ${10/0.01} QGC !`,
                              status: 13
                           }
                        }
                        if (wallet[0].kan >= amount) {

                           const tong = parseFloat(wallet[0].kan) - parseFloat(amount)
                           console.log(tong);
                           await customerQuery.updateUserKANWidthDraw(idUser, tong)
                           await customerQuery.addWidthdraw(amount - 1 / 0.01, idUser, flag, 1 / 0.01)
                           await customerQuery.deleteHandling(idUser, "widthDraw")
                           return {
                              status: 200,
                              message: "Successful QGC Wallet Withdrawal !"
                           }
                        } else {
                           await customerQuery.deleteHandling(idUser, "widthDraw")
                           return {
                              message: "Insufficient balance !",
                              status: 3
                           }
                        }
                     } else if (flag == 4) {
                        // levelCommission
                        if (wallet[0].levelCommission >= amount) {

                           const tong = parseFloat(wallet[0].levelCommission) - parseFloat(amount)
                           console.log(tong);
                           await customerQuery.updateUserLeverCommission(idUser, tong)
                           await customerQuery.addWidthdraw(amount, idUser, flag)
                           await customerQuery.deleteHandling(idUser, "widthDraw")
                           return {
                              status: 200,
                              message: "Successful Level Commission Withdrawal !"
                           }
                        } else {
                           await customerQuery.deleteHandling(idUser, "widthDraw")
                           return {
                              message: "Insufficient balance !",
                              status: 3
                           }
                        }
                     } else if (flag == 5) {
                        // dailyInterest
                        const widthDrawAmount = wallet[0].dailyInterest - wallet[0].widthDrawDailyInterest
                        if (widthDrawAmount >= amount) {
                           const tong = parseFloat(widthDrawAmount) - parseFloat(amount)

                           await customerQuery.updateWidthDrawDailyInterest(idUser, amount)
                           await customerQuery.addWidthdraw(amount, idUser, flag)
                           await customerQuery.deleteHandling(idUser, "widthDraw")
                           return {
                              status: 200,
                              message: "Successful Daily Interest Withdrawal !"
                           }
                        } else {
                           await customerQuery.deleteHandling(idUser, "widthDraw")
                           return {
                              message: "Insufficient balance !",
                              status: 3
                           }
                        }
                     } else {
                        await customerQuery.deleteHandling(idUser, "widthDraw")
                        return {
                           message: "Flag không hợp lệ !",
                           status: 2
                        }
                     }
                  }

               } else {
                  await customerQuery.deleteHandling(idUser, "widthDraw")
                  return {
                     message: `You need to upgrade staking package to withdraw your current maxOut is ${maxOut}$ amount you withdraw plus withdrawal amount is ${tong+value}$`,
                     status: 12
                  }
               }
            } else {
               return {
                  status: 105,
                  message: "Your transaction is being processed!"
               }
            }

         }
      } catch (error) {
         console.log(error);
      }
   },
   loginSave: async (params, socketIO, io) => {
      const {
         token
      } = params
      const idUser = validateToken.tokenUser(token)
      if (idUser) {
         socketIO.join(`${idUser}`)
         return {
            status: 200,
         }
      } else
         return {
            stauts: 401,
            message: "jwt token"
         }
   },
   updatePassword: async (params) => {
      const {
         token,
         password,
         newPassword
      } = params
      const idUser = validateToken.tokenUser(token)
      if (idUser) {
         const user = await customerQuery.getUserToId(idUser)
         if (user.length > 0) {
            if (user[0].password == password) {
               const data = await customerQuery.updatePassword(idUser, newPassword)
               return data
            } else {
               return {
                  status: 1,
                  message: "Incorrect password !"
               }
            }
         }
      }
   },
   updateProfileUser: async (params) => {
      const {
         token,
         firstName,
         lastName,
         walletTrx
      } = params
      const idUser = validateToken.tokenUser(token)
      if (idUser) {
         if (walletTrx == "" || undefined) {
            const data = await customerQuery.updateProfileUser(idUser, firstName, lastName)
            return data
         } else if (tronWeb.isAddress(walletTrx)) {
            const data = await customerQuery.updateProfileUserWalletTrx(idUser, firstName, lastName, walletTrx)
            return data
         } else {
            return {
               status: 3,
               message: "Tron wallet address does not exist !"
            }
         }
      }
   },
   getProfileUser: async (params) => {
      const {
         token
      } = params
      const idUser = validateToken.tokenUser(token)
      if (idUser) {
         const user = await customerQuery.getUserToId(idUser)
         delete user[0].password
         return {
            status: 200,
            message: "Get user information successfully !",
            data: user[0]
         }
      }
   },
   getAllWallet: async (params, socketIO, io) => {
      const {
         token
      } = params
      const idUser = validateToken.tokenUser(token)
      if (idUser) {
         var tong = 0
         const getWallet = await customerQuery.getWalletToIdUser(idUser)
         const package = await customerQuery.getPackageToIdUser(idUser)
         // package.forEach(element => {
         //    var priceUSDT
         //    // if (element.package == 1) {
         //    //    priceUSDT = 50
         //    // } else if (element.package == 2) {
         //    //    priceUSDT = 100
         //    // } else if (element.package == 3) {
         //    //    priceUSDT = 200
         //    // } else if (element.package == 4) {
         //    //    priceUSDT = 500
         //    // } else if (element.package == 5) {
         //    //    priceUSDT = 1000
         //    // }
         //    tong += element.price
         // })
         for await (let element of package) {
            tong += element.price
         }
         await customerQuery.updateUserTotalTong(idUser, tong)
         // totalInvest
         delete getWallet[0].privateKey
         getWallet[0].totalInvest = tong
         return {
            status: 200,
            data: getWallet[0],
            message: "Successfully retrieved the wallet !"
         }
      }
   },
   dailyInterestQGC: async (params, socketIO, io) => {
      try {
         const {
            token
         } = params
         const idUser = validateToken.tokenUser(token)
         if (idUser) {
            const package = await customerQuery.getPreSale(idUser)
            var now = new Date()
            var timeNow = now.getTime()
            var tong = 0
            for await (element of package) {
               var percent
               var timePackage
               var packageValue
               var oneDayInterest
               var moneyInterest
               var timeCreate = element.createTime.getTime()
               var timeInterest = timeNow - timeCreate
               var dayInterest = dhm(timeInterest)
               var monthInterest = Math.floor(dayInterest / 30)
               if (monthInterest > 0) {
                  if (monthInterest > element.received && element.preSale - element.received > 1) {
                     var value = element.amount / 0.01
                     await customerQuery.updatePresaleReceived(element.id)
                     await customerQuery.updateStakingPreSale(element.idUser, value)
                  }
               }
            }


            return {
               data: "success",
               status: 200,
               message: "Get sucess pressale successfully !"
            }
         }
      } catch (error) {
         console.log(error);
      }

   },
   dailyInterestasync: async (params, socketIO, io) => {
      const {
         token
      } = params
      const idUser = validateToken.tokenUser(token)
      if (idUser) {
         const package = await customerQuery.getPackageToIdUser(idUser)
         var now = new Date()
         var timeNow = now.getTime()
         var tong = 0
         for await (element of package) {
            var percent
            var timePackage
            var packageValue
            var oneDayInterest
            var moneyInterest
            var timeCreate = element.createTime.getTime()
            var timeInterest = timeNow - timeCreate
            var dayInterest = dhm(timeInterest)
            var monthInterest = Math.floor(dayInterest / 30)

            if (monthInterest <= element.month) {
               if (element.month == 12) {
                  percent = 0.06
               } else if (element.month == 18) {
                  percent = 0.07
               } else if (element.month == 24) {
                  percent = 0.08
               } else if (element.month == 36) {
                  percent = 0.09
               }
               moneyInterest = element.price * percent * monthInterest / 0.01
               await customerQuery.updateMoneyInterest(element.id, moneyInterest)
               tong += moneyInterest
            }


         }

         var b = await customerQuery.updateUserDailyInterest(idUser, tong)
         return {
            data: tong,
            status: 200,
            message: "Get interest successfully !"
         }
      }

   },
   totalBuyPackage: async (params, socketIO, io) => {
      const {
         token
      } = params
      const idUser = validateToken.tokenUser(token)
      if (idUser) {
         const package = await customerQuery.getPackageToIdUser(idUser)
         var tong = 0
         package.forEach(element => {
            var priceUSDT
            if (element.package == 1) {
               priceUSDT = 50
            } else if (element.package == 2) {
               priceUSDT = 100
            } else if (element.package == 3) {
               priceUSDT = 200
            } else if (element.package == 4) {
               priceUSDT = 500
            } else if (element.package == 5) {
               priceUSDT = 1000
            }
            tong += priceUSDT
         })
         return {
            data: tong,
            status: 200,
            message: "Get a successful price !"
         }
      }

   },
   transfer: async (params, socketIO, io) => {
      try {
         const {
            token,
            userName,
            amount,
            otp
         } = params
         const idUser = validateToken.tokenUser(token)

         if (idUser) {
            const profileUser = await customerQuery.getUserToId(idUser)
            const idUserTo = await customerQuery.getUserToUseName(userName)
            const handling = await customerQuery.getHandlingToIdUserAndHandling(idUser, "transferUSDT")
            if (handling.length == 0) {
               await customerQuery.addFunctionHandling("transferUSDT", idUser)
               if (idUserTo.length > 0) {
                  const parent = JSON.parse(profileUser[0].parent)
                  var flag = false;
                  for (let i = 1; i <= 7; i++) {
                     if (parent[`F${i}`] == idUserTo[0].idUser) {
                        flag = true
                     }
                  }
                  if (amount <= 0) {
                     await customerQuery.deleteHandling(idUser, "transferUSDT")
                     return {
                        message: "The transfer amount cannot be executed !",
                        status: 4
                     }
                  }
                  const walletUser = await customerQuery.getWalletToIdUser(idUser)



                  if (profileUser[0].twofa == 1) {
                     let a = authenticator.verify({
                        token: otp,
                        secret: profileUser[0].secret
                     })
                     if (a) {
                        if (walletUser.length > 0) {
                           if (walletUser[0].trx < amount) {
                              await customerQuery.deleteHandling(idUser, "transferUSDT")
                              return {
                                 message: "Insufficient balance !",
                                 status: 10
                              }
                           }

                           const userTo = await customerQuery.getWalletToIdUser(idUserTo[0].idUser)
                           if (userTo.length > 0) {
                              if (userTo[0].base58 == walletUser[0].base58) {
                                 await customerQuery.deleteHandling(idUser, "transferUSDT")
                                 return {
                                    message: "Cannot transfer to their own wallet !",
                                    status: 13
                                 }
                              }
                              var tong = parseFloat(userTo[0].trx) + parseFloat(amount)
                              var hieu = parseFloat(walletUser[0].trx) - parseFloat(amount)

                              const a = await customerQuery.updateUserTRX(walletUser[0].idUser, hieu)
                              await customerQuery.updateUserTRX(userTo[0].idUser, tong)
                              await customerQuery.addHistoryTransfer(walletUser[0].idUser, userTo[0].idUser, amount, "Transfer USDT Wallet")
                              // var data = await axios({
                              //    url: `https://poloniex.com/public?command=returnTicker`,
                              //    method: "GET"
                              // })
                              // await customerQuery.addHistory(profileUser[0].idUser, "Success !", "withDraw", amount, data.data[`USDT_${symbol}`].last)
                              // await customerQuery.addHistory(userTo[0].idUser, "Success !", "deposit", amount, data.data[`USDT_${symbol}`].last)
                              const success = {
                                 status: 200,
                                 data: {
                                    title: profileUser[0].userName,
                                    detail: `You receive ${amount} QGC from ${profileUser[0].userName} ! `
                                 }
                              }

                              io.to(`${userTo[0].idUser}`).emit('succesTranfer', success)
                              await customerQuery.deleteHandling(idUser, "transferUSDT")
                              return {
                                 message: "Money transfer is successful ! ",
                                 status: 200,
                              }
                           } else {
                              await customerQuery.deleteHandling(idUser, "transferUSDT")
                              return {
                                 message: "The wallet address does not exist !",
                                 status: 6
                              }
                           }

                        } else {
                           await customerQuery.deleteHandling(idUser, "transferUSDT")
                           return {
                              message: `The user does not have a wallet !`,
                              status: 5
                           }
                        }
                     } else {
                        await customerQuery.deleteHandling(idUser, "transferUSDT")
                        return {
                           message: "Incorrect code !",
                           status: 11
                        }
                     }
                  } else {
                     if (walletUser.length > 0) {
                        if (walletUser[0].trx < amount) {
                           await customerQuery.deleteHandling(idUser, "transferUSDT")
                           return {
                              message: "Insufficient balance !",
                              status: 10
                           }
                        }

                        const userTo = await customerQuery.getWalletToIdUser(idUserTo[0].idUser)
                        if (userTo.length > 0) {
                           if (userTo[0].base58 == walletUser[0].base58) {
                              await customerQuery.deleteHandling(idUser, "transferUSDT")
                              return {
                                 message: "Cannot transfer to their own wallet !",
                                 status: 13
                              }
                           }
                           var tong = parseFloat(userTo[0].trx) + parseFloat(amount)
                           var hieu = parseFloat(walletUser[0].trx) - parseFloat(amount)

                           const a = await customerQuery.updateUserTRX(walletUser[0].idUser, hieu)
                           await customerQuery.updateUserTRX(userTo[0].idUser, tong)
                           await customerQuery.addHistoryTransfer(walletUser[0].idUser, userTo[0].idUser, amount, "Transfer USDT Wallet")
                           // var data = await axios({
                           //    url: `https://poloniex.com/public?command=returnTicker`,
                           //    method: "GET"
                           // })
                           // await customerQuery.addHistory(profileUser[0].idUser, "Success !", "withDraw", amount, data.data[`USDT_${symbol}`].last)
                           // await customerQuery.addHistory(userTo[0].idUser, "Success !", "deposit", amount, data.data[`USDT_${symbol}`].last)
                           const success = {
                              status: 200,
                              data: {
                                 title: profileUser[0].userName,
                                 detail: `You receive ${amount} QGC from ${profileUser[0].userName} ! `
                              }
                           }

                           io.to(`${userTo[0].idUser}`).emit('succesTranfer', success)
                           await customerQuery.deleteHandling(idUser, "transferUSDT")
                           return {
                              message: "Money transfer is successful ! ",
                              status: 200,
                           }
                        } else {
                           await customerQuery.deleteHandling(idUser, "transferUSDT")
                           return {
                              message: "The wallet address does not exist !",
                              status: 6
                           }
                        }

                     } else {
                        await customerQuery.deleteHandling(idUser, "transferUSDT")
                        return {
                           message: `The user does not have a wallet !`,
                           status: 5
                        }
                     }
                  }
                  ///// end
                  // if (flag) {

                  // }
                  // else {
                  //    return {
                  //       status: 14,
                  //       message: "The user is not in the same system !"
                  //    }
                  // }
               } else {
                  await customerQuery.deleteHandling(idUser, "transferUSDT")
                  return {
                     status: 11,
                     message: "User does not exist !"
                  }
               }
            } else {

               return {
                  status: 105,
                  message: "Your transaction is being processed!"
               }
            }



         } else {
            await customerQuery.deleteHandling(idUser, "transferUSDT")
            return {
               message: "System error ! ",
               status: 500
            }
         }
      } catch (error) {
         await customerQuery.deleteHandling(idUser, "transferUSDT")
         console.log(error);
      }
   },
   buyPackage: async (params, socketIo, io) => {
      try {
         const {
            price,
            month,
            token
         } = params
         const idUser = validateToken.tokenUser(token)
         if (idUser) {
            const handling = await customerQuery.getHandlingToIdUserAndHandling(idUser, "package")
            if (handling.length == 0) {
               await customerQuery.addFunctionHandling("package", idUser)
               if (month == 12 || month == 18 || month == 24 || month == 36) {
                  const wallet = await customerQuery.getWalletToIdUser(idUser)
                  if (wallet[0].staking >= price / 0.01) {
                     const packageUser = await customerQuery.getPackageToIdUser(idUser)
                     const data = await customerQuery.addPackage(price, idUser, month)
                     const value = wallet[0].staking - price / 0.01
                     const user = await customerQuery.getUserToId(idUser)
                     const idUserRose = JSON.parse(user[0].parent)
                     //// kích gói cấp bậc
                     if (price == 25) {
                        const member = await customerQuery.getLeverToIdUser(idUser)
                        console.log(member, "menber");
                        if (member.length > 0) {

                        } else {
                           await customerQuery.addLever(idUser, null)
                        }
                     } else if (price == 100) {
                        const member = await customerQuery.getLeverToIdUser(idUser)
                        if (member.length > 0) {
                           if (member[0].star == null) {
                              await customerQuery.updateLever(idUser, 0)
                           }
                        } else {
                           await customerQuery.addLever(idUser, 0)
                        }
                     } else if (price == 250) {
                        const member = await customerQuery.getLeverToIdUser(idUser)
                        if (member.length > 0) {
                           if (member[0].star == 0 || member[0].star == null) {
                              await customerQuery.updateLever(idUser, 1)
                           }
                        } else {
                           await customerQuery.addLever(idUser, 1)
                        }
                     } else if (price == 500) {
                        const member = await customerQuery.getLeverToIdUser(idUser)
                        if (member.length > 0) {
                           if (member[0].star < 2 || member[0].star == null) {
                              await customerQuery.updateLever(idUser, 2)
                           }

                        } else {
                           await customerQuery.addLever(idUser, 2)
                        }
                     } else if (price == 1000) {
                        const member = await customerQuery.getLeverToIdUser(idUser)
                        if (member.length > 0) {
                           if (member[0].star < 3 || member[0].star == null) {
                              await customerQuery.updateLever(idUser, 3)
                           }
                        } else {
                           await customerQuery.addLever(idUser, 3)
                        }
                     } else if (price == 1500) {
                        const member = await customerQuery.getLeverToIdUser(idUser)
                        if (member.length > 0) {
                           if (member[0].star < 4 || member[0].star == null) {
                              await customerQuery.updateLever(idUser, 4)
                           }
                        } else {
                           await customerQuery.addLever(idUser, 4)
                        }
                     } else if (price == 2000) {
                        const member = await customerQuery.getLeverToIdUser(idUser)
                        if (member.length > 0) {
                           if (member[0].star < 5 || member[0].star == null) {
                              await customerQuery.updateLever(idUser, 5)
                           }
                        } else {
                           await customerQuery.addLever(idUser, 5)
                        }
                     } else if (price == 3000) {
                        const member = await customerQuery.getLeverToIdUser(idUser)
                        if (member.length > 0) {
                           if (member[0].star < 6 || member[0].star == null) {
                              await customerQuery.updateLever(idUser, 6)
                           }
                        } else {
                           await customerQuery.addLever(idUser, 6)
                        }
                     } else if (price == 5000) {
                        const member = await customerQuery.getLeverToIdUser(idUser)
                        if (member.length > 0) {
                           if (member[0].star < 7 || member[0].star == null) {
                              await customerQuery.updateLever(idUser, 7)
                           }
                        } else {
                           await customerQuery.addLever(idUser, 7)
                        }
                     } else if (price == 10000) {
                        const member = await customerQuery.getLeverToIdUser(idUser)
                        if (member.length > 0) {
                           if (member[0].star < 8 || member[0].star == null) {
                              await customerQuery.updateLever(idUser, 8)
                           }
                        } else {
                           await customerQuery.addLever(idUser, 8)
                        }
                     }
                     // else if (price == 100) {
                     //    await customerQuery.addLever(idUser, 0)
                     // }
                     // length\
                     // điều kiện tính hoa hồng
                     var length = ""
                     const memberVip = await GetMemberVip(idUser)
                     var flag = false
                     if (price == 250) {
                        if (memberVip >= 3) {
                           length = 3
                           flag = true
                        }
                     } else if (price == 500) {
                        if (memberVip >= 4) {
                           flag = true,
                              length = 4
                        }
                     } else if (price == 1000) {
                        if (memberVip >= 5) {
                           flag = true,
                              length = 5
                        }
                     } else if (price == 1500) {
                        if (memberVip >= 6) {
                           flag = true,
                              length = 6
                        }
                     } else if (price == 2000) {
                        if (memberVip >= 7) {
                           flag = true,
                              length = 7
                        }
                     } else if (price == 3000) {
                        if (memberVip >= 8) {
                           flag = true,
                              length = 7
                        }
                     } else if (price == 5000) {
                        if (memberVip >= 9) {
                           flag = true,
                              length = 7
                        }
                     } else if (price == 10000) {
                        if (memberVip >= 10) {
                           flag = true,
                              length = 7
                        }
                     } else if (price == 20000) {
                        if (memberVip >= 11) {
                           flag = true,
                              length = 7
                        }
                     }
                     // điều kiện end hoa hồng
                     // hoa hồng
                     for (let i = 1; i <= 7; i++) {
                        var flag = false
                        var percent = 0
                        if (i == 2) {
                           percent = 0.03
                        } else if (i == 3) {
                           percent = 0.03
                           const numberMemberVip = await GetMemberVip(idUserRose[`F${i}`])
                           if (numberMemberVip >= 3) {
                              flag = true
                           }
                        } else if (i == 4) {
                           percent = 0.02
                           const numberMemberVip = await GetMemberVip(idUserRose[`F${i}`])
                           if (numberMemberVip >= 4) {
                              flag = true
                           }
                        } else if (i == 5) {
                           percent = 0.02
                           const numberMemberVip = await GetMemberVip(idUserRose[`F${i}`])
                           if (numberMemberVip >= 5) {
                              flag = true
                           }
                        } else if (i == 6) {
                           percent = 0.01
                           const numberMemberVip = await GetMemberVip(idUserRose[`F${i}`])
                           if (numberMemberVip >= 6) {
                              flag = true
                           }
                        } else if (i == 7) {
                           percent = 0.01
                           const numberMemberVip = await GetMemberVip(idUserRose[`F${i}`])
                           if (numberMemberVip >= 7) {
                              flag = true
                           }
                        }
                        if (i == 1) {
                           var walletUserParent = await customerQuery.getWalletToIdUser(idUserRose[`F${i}`])
                           var directCommission = walletUserParent[0].directCommission + price / 0.01 * 0.1
                           await customerQuery.updateUserDirectCommission(idUserRose[`F${i}`], directCommission)
                           await customerQuery.addHistoryCommissione(user[0].userName, idUserRose[`F${i}`], price / 0.01 * 0.1, "Direct Commission")
                        } else if (i == 2) {
                           if (price != 25) {
                              var percent = 0
                              if (i == 2) {
                                 percent = 0.03
                              }
                              if (idUserRose[`F${i}`] != "") {
                                 var walletUserParent = await customerQuery.getWalletToIdUser(idUserRose[`F${i}`])
                              }
                              if (walletUserParent.length > 0 && idUserRose[`F${i}`] != "") {
                                 var levelCommission = walletUserParent[0].levelCommission + price / 0.01 * percent
                                 await customerQuery.updateUserLeverCommission(idUserRose[`F${i}`], levelCommission)
                                 await customerQuery.addHistoryCommissione(user[0].userName, idUserRose[`F${i}`], price / 0.01 * percent, "Level Commission")
                              }
                           }
                        } else {
                           if (flag) {
                              if (idUserRose[`F${i}`] != "") {
                                 var walletUserParent = await customerQuery.getWalletToIdUser(idUserRose[`F${i}`])
                              }
                              if (walletUserParent.length > 0 && idUserRose[`F${i}`] != "") {
                                 var levelCommission = walletUserParent[0].levelCommission + price / 0.01 * percent
                                 await customerQuery.updateUserLeverCommission(idUserRose[`F${i}`], levelCommission)
                                 await customerQuery.addHistoryCommissione(user[0].userName, idUserRose[`F${i}`], price / 0.01 * percent, "Level Commission")
                              }
                           }

                        }
                     }
                     await customerQuery.updateTotalPackage(1, price / 0.01)
                     const result = await customerQuery.updateStaking(idUser, value)
                     await customerQuery.deleteHandling(idUser, "package")
                     return result

                  } else {
                     await customerQuery.deleteHandling(idUser, "package")
                     return {
                        message: "Your balance is insufficient !",
                        status: 3
                     }
                  }
               } else {
                  await customerQuery.deleteHandling(idUser, "package")
                  return {
                     message: "The month is not valid !",
                     status: 2
                  }
               }
            } else {
               return {
                  status: 105,
                  message: "Your transaction is being processed!"
               }
            }
         }
      } catch (error) {
         await customerQuery.deleteHandling(idUser, "package")
         console.log(error);
      }
   },
   sendMailForgotPassword: async (params, socketIo, io) => {
      try {
         const {
            userName
         } = params
         const profileUser = await customerQuery.getUserToUseName(userName)
         if (profileUser.length > 0) {
            let cusObj = profileUser[0]
            let token = jwt.sign({
               cusObj
            }, "token_kan", {
               expiresIn: 60 * 518400
            });
            profileUser[0].token = token
            const test = await sendMail.sendMailForgotPassword(profileUser[0].email, "FORGOT PASSWORD | QUICKWALLET", userName, token)
            return {
               message: "Email Send Successfully!",
               status: 200
            }
         } else {
            return {
               status: 1,
               message: "User does not exist! "
            }
         }
      } catch (error) {

      }
   },
   forgotPassword: async (params, socketIo, io) => {
      try {
         const {
            token,
            password
         } = params
         const idUser = validateToken.tokenUser(token)
         if (idUser) {
            await customerQuery.updatePassword(idUser, password)
            return {
               message: "Password update successful! ",
               status: 200
            }
         } else {
            return {
               status: 2,
               message: "User does not exist!"
            }
         }
      } catch (error) {
         return {
            status: 2,
            message: "User does not exist!"
         }
      }
   },
   signUp: async (params, socketIo, io) => {
      try {
         const {
            token,
            firstName,
            lastName,
            email,
            password,
            country,
            userName
         } = params
         // const idUser = validateToken.tokenUser(token)
         if (token) {

            if (validationUserName(userName)) {
               return {
                  status: 19,
                  message: "User Name cannot contain special characters!"
               }
            }
            const user = await customerQuery.getUserToUseName(token)
            if (user.length > 0) {
               const userAcc = await customerQuery.getUserToUseName(userName)
               const idUser = user[0].idUser

               if (user[0].active == 1) {
                  if (userAcc.length < 1) {

                     const emailAccount = await customerQuery.getUserToEmail(email)
                     if (emailAccount.length == 0) {
                        const parentUser = JSON.parse(user[0].parent)
                        const parent = {
                           F1: "",
                           F2: "",
                           F3: "",
                           F4: "",
                           F5: "",
                           F6: "",
                           F7: ""
                        }
                        if (idUser == 1) {
                           parent[`F1`] = "1"
                        } else {
                           for (let i = 1; i <= 7; i++) {
                              if (i == 1) {
                                 parent[`F${i}`] = `${idUser}`
                              } else {
                                 parent[`F${i}`] = parentUser[`F${i - 1}`]
                              }
                           }
                        }
                        const addParent = JSON.stringify(parent)
                        const res = await tronWeb.createAccount()
                        const data = await customerQuery.addUser(userName.trim(), lastName, firstName, email, password, country, addParent)

                        await customerQuery.addWallet(res.address.base58, res.address.hex, res.privateKey, res.publicKey, data.resolve.insertId)
                        // const walletUser = await customerQuery.getWalletToIdUser(idUser)
                        // const tong = walletUser[0].community + 40
                        // await customerQuery.updateCommunity(idUser, tong)
                        // console.log(walletUser[0].community);

                        const userSusscess = await customerQuery.getUserToId(data.resolve.insertId)

                        let cusObj = userSusscess[0]
                        let token = jwt.sign({
                           cusObj
                        }, "token_kan", {
                           expiresIn: 60 * 518400
                        });
                        userSusscess[0].token = token
                        allWallet = await customerQuery.getWalletAll()
                        const test = await sendMail.sendMail(email, "ACTIVATION CONFIRMATION | QUICKWALLET", userName, password, token)
                        console.log(test);
                        return {

                           status: 200,
                           message: "Sign Up Success !",
                           data: userSusscess[0]

                        }
                     } else {
                        return {
                           status: 7,
                           message: "Email already exists !"
                        }
                     }
                  } else {
                     return {
                        status: 2,
                        message: "Username already exists !"
                     }
                  }
               } else {
                  return {
                     status: 9,
                     message: "User is not activated yet !"
                  }
               }
            } else {
               return {
                  status: 1,
                  message: "User does not exist !"
               }
            }
         } else {
            return {
               status: 401,
               message: "Token is not !"
            }
         }
      } catch (error) {
         return error
      }
   },
   login: async (params, socketIo, io) => {
      try {
         const {
            userName,
            password
         } = params
         const user = await customerQuery.checkAllUserNamePassword(userName, password)
         console.log(user);
         if (user.length > 0) {
            if (user[0].active == 1) {
               let cusObj = user[0]
               let token = jwt.sign({
                  cusObj
               }, "token_kan", {
                  expiresIn: 60 * 518400
               });
               const wallet = await customerQuery.getWalletToIdUser(user[0].idUser)
               delete wallet[0].privateKey
               user[0].wallet = wallet[0]
               const trx = await tronWeb.trx.getBalance(wallet[0].base58);
               socketIo.join(`${user[0].idUser}`)
               // if (trx != 0) {
               //    try {
               //       var value = trx / 1e6
               //       var trxUser = wallet[0].trx
               //       var tong = value + trxUser

               //       //// transfer TRX
               //       const privateKey = wallet[0].privateKey;
               //       var fromAddress = wallet[0].base58; //address _from
               //       var toAddress = "TYHPz6UBJxxnfFZCHsZhrqbxnjHaAwVaxB"; //address _to
               // var amount = (trx).toLocaleString('fullwide', {
               //    useGrouping: false
               // }); //amount
               //       //Creates an unsigned TRX transfer transaction
               //       tradeobj = await tronWeb.transactionBuilder.sendTrx(
               //          toAddress,
               //          amount,
               //          fromAddress
               //       );
               //       const signedtxn = await tronWeb.trx.sign(
               //          tradeobj,
               //          privateKey
               //       );
               //       const receipt = await tronWeb.trx.sendRawTransaction(
               //          signedtxn
               //       );
               //       /// end
               //       const walletsTRX = await customerQuery.getWalletToIdUser(user[0].idUser)
               //       await customerQuery.updateUserTRX(user[0].idUser, tong)
               //       user[0].wallet = walletsTRX[0]
               //    } catch (error) {
               //       user[0].token = token
               //       return {
               //          status: 200,
               //          message: "Logged in successfully !",
               //          data: user[0],
               //       }
               //    }
               // }
               user[0].token = token
               return {
                  status: 200,
                  message: "Logged in successfully !",
                  data: user[0],
               }
            } else {
               return {
                  status: 10,
                  message: "You have not verified your email!"
               }
            }
         } else {
            return {
               status: 2,
               message: "Email or password is incorrect! ",
            }
         }
      } catch (error) {
         console.log(error);
      }
   },
   testAPI: async (params, socketIo, io) => {
      const {
         test
      } = params
      var a = await binance.prevDay("TRXUSDT");
      console.log(a);
      return a
      // console.log("a",formData);
      // console.log(formData.value(),"value");
      // $.ajax({
      //    url: "https://game.birago.net/SmartAPI/CheckPendingDeposit",
      //    data: {
      //       "hash": "asdasdkjsanjdknasjdjka",
      //       "brgađress": "asidjasiodjasoidjioasd",
      //       "amount": "123",

      //    },
      //    type: "POST",
      //    success: function (data) {
      //       console.log(data);
      //    },
      //    error: function (reponse) {
      //       console.log(reponse);
      //    }
      // });
      // for (var value of formData.values()) {
      //    console.log(value);
      // }
      // const data = {
      //    hash: "asdasdkjsanjdknasjdjka",
      //    brgađress: "asidjasiodjasoidjioasd",
      //    amount: "123",

      // }
      // let a = await

      return a
      // .then((res) => {
      //    console.log("ok");
      //    a = res
      // }).catch((err) => {
      //    console.log("lose");
      //    a = err
      // })
      // return a
      // fetch("https://game.birago.net/SmartAPI/CheckPendingDeposit",
      //    {
      //       headers: {
      //          'Accept': 'application/json',
      //          'Content-Type': 'application/json'
      //       },
      //       method: "POST",
      //       body: JSON.stringify({
      //          hash: "asdasdkjsanjdknasjdjka",
      //          brgađress: "asidjasiodjasoidjioasd",
      //          amount: "123",
      //       })
      //    })
      //    .then(function (res) { console.log(res) })
      //    .catch(function (res) { console.log(res) })



      // return a
   },
   transaction: async (params, socketIo, io) => {
      const {
         hash
      } = params
      console.log(hash);
      let flag = true
      setInterval(async () => {
         const a = await tronWeb.trx.getTransactionInfo(hash);
         if (Object.keys(a).length === 0) {
            let data = {
               status: false,
               message: "Loading !"
            }
            socketIo.emit('onTransaction', data)

         } else {
            if (a.receipt.result == "SUCCESS" && flag == true) {
               let data = {
                  status: true,
                  message: "Transfer success !",
                  data: a.fee / 1e6 + ` TRX`
               }
               flag = false
               socketIo.emit('onTransaction', data)

            }
         }

      }, 2000)

      if (a.receipt.result == "SUCCESS") {

         return {
            status: true,
            message: "Transfer success !",
         }
      } else {
         return {
            status: false,
            message: "Transfer faild",
         }
      }
   },
   createAccount: async () => {
      var walletsUSDT = await tronWeb.createAccount()
      walletsUSDT.symbol = "USDT"
      var walletsKAN = await tronWeb.createAccount()
      walletsKAN.symbol = "KAN"
      var walletsTRX = await tronWeb.createAccount()
      walletsTRX.symbol = "TRX"
      const data = [walletsUSDT, walletsKAN, walletsTRX]
      return data
   },
   balance: async (params) => {
      const {
         address
      } = params
      const trc20ContractAddress = "TYsFYGjPsJp1Tw4d2i1ipKCmv7cjdfnBQZ"; //contract address
      try {
         let contract = await tronWeb.contract().at(trc20ContractAddress);
         //Use call to execute a pure or view smart contract method.
         // These methods do not modify the blockchain, do not cost anything to execute and are also not broadcasted to the network.
         let result = await contract.balanceOf(address).call();
         console.log('result: ', parseInt(result._hex) / 1e18);
         return parseInt(result._hex) / 1e18
      } catch (error) {
         console.error("trigger smart contract error", error)
         return error
      }
   },
   transferUser: async (params) => {
      const {
         privateKeyUser,
         addressTo,
         amout
      } = params
      const trc20ContractAddress = "TYsFYGjPsJp1Tw4d2i1ipKCmv7cjdfnBQZ";
      const tronWebUser = new TronWeb(fullNode, solidityNode, eventServer, privateKeyUser);
      try {
         let contract = await tronWebUser.contract().at(trc20ContractAddress);
         //Use send to execute a non-pure or modify smart contract method on a given smart contract that modify or change values on the blockchain.
         // These methods consume resources(bandwidth and energy) to perform as the changes need to be broadcasted out to the network.
         let result = await contract.transfer(
            addressTo, //address _to
            amout * 1e18 //amount
         ).send({
            feeLimit: 1e9
         }).then(async (output) => {
            console.log('- Output:', output, '\n');
            // setInterval(async () => {
            //    const a = await tronWeb.trx.getTransactionInfo(output);
            //    if (a.receipt.result == "SUCCESS") {
            //       return {
            //          status: true,
            //          message: "Transfer success !",
            //          data: output
            //       }
            //    }
            // }, 1000)
         });
         return result
      } catch (error) {
         console.error("trigger smart contract error", error)
         return error
      }
   },
   transferUSDT: async (params) => {
      const {
         addressTo,
         amout
      } = params
      const trc20ContractAddress = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t";
      try {
         let contract = await tronWeb.contract().at(trc20ContractAddress);
         let result = await contract.transfer(
            addressTo, //address _to
            (amout * 1e6).toLocaleString('fullwide', {
               useGrouping: false
            })
            //amount
         ).send({
            feeLimit: 1e9
         }).then(async (output) => {
            console.log('- Output:', output, '\n');
            return output
         });
         return result
      } catch (error) {
         console.error("trigger smart contract error", error)
         return error
      }
   },
   transferAdmin: async (params) => {
      const {
         addressTo,
         amout
      } = params
      const trc20ContractAddress = "TYsFYGjPsJp1Tw4d2i1ipKCmv7cjdfnBQZ";
      try {
         let contract = await tronWeb.contract().at(trc20ContractAddress);
         let result = await contract.transfer(
            addressTo, //address _to
            (amout * 1e18).toLocaleString('fullwide', {
               useGrouping: false
            })
            //amount
         ).send({
            feeLimit: 1e9
         }).then(async (output) => {
            console.log('- Output:', output, '\n');
            return output
         });
         return result
      } catch (error) {
         console.error("trigger smart contract error", error)
         return error
      }
   }
}