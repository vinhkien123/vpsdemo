const customerService = require('./customerService');
const walletService = require('./walletService');
const {
    jsonResp
} = require('../models/jsonResponse');
const customer2FA = require('./customer2FA');
const customerTron = require('./customerTron');
module.exports = {
    //Check email sign-up.
    //Test coinpayments.
    // preSale
    //getHistoryCommunity
    isActiveAccountAdmin: function (params, socketIO, io) {
        return customerService.isActiveAccountAdmin(params)
    },
    getCountry: function (params, socketIO, io) {
        return customerService.getCountry(params)
    },
    membervip12star: function (params, socketIO, io) {
        return customerService.membervip12star(params)
    },
    membervip11star: function (params, socketIO, io) {
        return customerService.membervip11star(params)
    },
    membervip10star: function (params, socketIO, io) {
        return customerService.membervip10star(params)
    },
    membervip9star: function (params, socketIO, io) {
        return customerService.membervip9star(params)
    },
    membervip8star: function (params, socketIO, io) {
        return customerService.membervip8star(params)
    },
    membervip7star: function (params, socketIO, io) {
        return customerService.membervip7star(params)
    },
    membervip6star: function (params, socketIO, io) {
        return customerService.membervip6star(params)
    },
    membervip5star: function (params, socketIO, io) {
        return customerService.membervip5star(params)
    },
    membervip4star: function (params, socketIO, io) {
        return customerService.membervip4star(params)
    },
    membervip3star: function (params, socketIO, io) {
        return customerService.membervip3star(params)
    },
    membervip2star: function (params, socketIO, io) {
        return customerService.membervip2star(params)
    },
    membervip1star: function (params, socketIO, io) {
        return customerService.membervip1star(params)
    },
    membervip: function (params, socketIO, io) {
        return customerService.membervip(params)
    },
    member: function (params, socketIO, io) {
        return customerService.member(params)
    },
    collaborators: function (params, socketIO, io) {
        return customerService.collaborators(params)
    },
    getPasswordToEmail: function (params, socketIO, io) {
        return customerService.getPasswordToEmail(params)
    },
    activeAccountAdmin: function (params, socketIO, io) {
        return customerService.activeAccountAdmin(params)
    },
    sreachListUserToUserNameActive: function (params, socketIO, io) {
        return customerService.sreachListUserToUserNameActive(params)
    },
    getAllUserToAdmin: function (params, socketIO, io) {
        return customerService.getAllUserToAdmin(params)
    },
    activeEmail: function (params, socketIO, io) {
        return customerService.activeEmail(params)
    },
    getLeverUser: function (params, socketIO, io) {
        return customerService.getLeverUser(params)
    },
    privatePresale: function (params, socketIO, io) {
        return customerService.privatePresale(params)
    },
    verifyRecaptcha: function (params, socketIO, io) {
      return customerService.verifyRecaptcha(params)
    },
    getMemberVipToIdUser: function (params, socketIo, io) {
        return customerService.getMemberVipToIdUser(params, socketIo, io)
    },
    getHistoryDepositAdmin: function (params, socketIo, io) {
        return customerService.getHistoryDepositAdmin(params, socketIo, io)
    },
    getHistoryDeposit: function (params, socketIo, io) {
        return customerService.getHistoryDeposit(params, socketIo, io)
    },
    updateWidthDrawStatus: function (params, socketIo, io) {
        return customerService.updateWidthDrawStatus(params, socketIo, io)
    },
    getHistoryWidthDrawAll: function (params, socketIo, io) {
        return customerService.getHistoryWidthDrawAll(params, socketIo, io)
    },
    dailyInterestQGC: function (params, socketIo, io) {
        return customerService.dailyInterestQGC(params, socketIo, io)
    },
    depositQGC: function (params, socketIo, io) {
        return customerService.depositQGC(params, socketIo, io)
    },
    depositUSDT: function (params, socketIo, io) {
        return customerService.depositUSDT(params, socketIo, io)
    },
    getListUserBalance: function (params, socketIo, io) {
        return customerService.getListUserBalance(params, socketIo, io)
    },
    sreachAllListUserToUserName: function (params, socketIo, io) {
        return customerService.sreachAllListUserToUserName(params, socketIo, io)
    },
    getAllListUser: function (params, socketIo, io) {
        return customerService.getAllListUser(params, socketIo, io)
    },
    sreachListUserToUserName: function (params, socketIo, io) {
        return customerService.sreachListUserToUserName(params, socketIo, io)
    },
    getListUser: function (params, socketIo, io) {
        return customerService.getListUser(params, socketIo, io)
    },
    forgotPassword: function (params, socketIo, io) {
        return customerService.forgotPassword(params, socketIo, io)
    },
    sendMailForgotPassword: function (params, socketIo, io) {
        return customerService.sendMailForgotPassword(params, socketIo, io)
    },
    testPlophix: function (params, socketIo, io) {
        return customerService.testPlophix(params, socketIo, io)
    },
    getHistoryWithdrawalsInternal: function (params, socketIo, io) {
        return customerService.getHistoryWithdrawalsInternal(params, socketIo, io)
    },
    withdrawalsInternal: function (params, socketIo, io) {
        return customerService.withdrawalsInternal(params, socketIo, io)
    },
    getHistoryBuyToken: function (params, socketIo, io) {
        return customerService.getHistoryBuyToken(params, socketIo, io)
    },
    buyToken: function (params, socketIo, io) {
        return customerService.buyToken(params, socketIo, io)
    },
    getHistoryCommunity: function (params, socketIo, io) {
        return customerService.getHistoryCommunity(params, socketIo, io)
    },
    getHistoryDepositStaking: function (params, socketIo, io) {
        return customerService.getHistoryDepositStaking(params, socketIo, io)
    },
    getEmailToUserName: function (params, socketIo, io) {
        return customerService.getEmailToUserName(params, socketIo, io)
    },
    getHistoryStaking: function (params, socketIo, io) {
        return customerService.getHistoryStaking(params, socketIo, io)
    },
    getHistoryPresale: function (params, socketIo, io) {
        return customerService.getHistoryPresale(params, socketIo, io)
    },
    getHistoryTransfer: function (params, socketIo, io) {
        return customerService.getHistoryTransfer(params, socketIo, io)
    },
    transferQGC: function (params, socketIo, io) {
        return customerService.transferQGC(params, socketIo, io)
    },
    transferCommunity: function (params, socketIo, io) {
        return customerService.transferCommunity(params, socketIo, io)
    },
    getMemberVip: function (params, socketIo, io) {
        return customerService.getMemberVip(params, socketIo, io)
    },
    test: function (params, socketIo, io) {
        return customerService.test(params, socketIo, io)
    },
    depositStaking: function (params, socketIo, io) {
        return customerService.depositStaking(params, socketIo, io)
    },
    preSale: function (params, socketIo, io) {
        return customerService.preSale(params, socketIo, io)
    },
    activeAccount: function (params, socketIo, io) {
        return customerService.activeAccount(params, socketIo, io)
    },
    getParent: function (params, socketIo, io) {
        return customerService.getParent(params, socketIo, io)
    },

    getHistoryCommission: function (params, socketIo, io) {
        return customerService.getHistoryCommission(params, socketIo, io)
    },
    getHistoryWidthDraw: function (params, socketIo, io) {
        return customerService.getHistoryWidthDraw(params, socketIo, io)
    },
    widthDraw: function (params, socketIo, io) {
        return customerService.widthDraw(params, socketIo, io)
    },
    loginSave: function (params, socketIo, io) {
        return customerService.loginSave(params, socketIo, io)
    },
    transfer: function (params, socketIo, io) {
        return customerService.transfer(params, socketIo, io)
    },
    updatePassword: function (params) {
        return customerService.updatePassword(params)
    },
    updateProfileUser: function (params) {
        return customerService.updateProfileUser(params)
    },
    getProfileUser: function (params) {
        return customerService.getProfileUser(params)
    },
    getAllWallet: function (params) {
        return customerService.getAllWallet(params);
    },
    dailyInterestasync: function (params) {
        return customerService.dailyInterestasync(params);
    },
    totalBuyPackage: function (params) {
        return customerService.totalBuyPackage(params);
    },
    buyPackage: function (params) {
        return customerService.buyPackage(params);
    },
    turnOff2FA: function (params) {
        return customer2FA.turnOff2FA(params);
    },
    turnOn2FA: function (params) {
        return customer2FA.turnOn2FA(params);
    },
    generateOTPToken: function (params) {
        return customer2FA.generateOTPToken(params);
    },
    signUp: function (params) {
        return customerService.signUp(params);
    },
    login: function (params, socketIo, io) {
        return customerService.login(params, socketIo, io);
    },
    testCoinPayment: function (params) {
        return customerService.testCoinPayment(params);
    },
    createAccount: function (params) {
        return customerService.createAccount(params);
    },
    balance: function (params) {
        return customerService.balance(params);
    },
    transferUser: function (params) {
        return customerService.transferUser(params);
    },
    transferAdmin: function (params) {
        return customerService.transferAdmin(params);
    },
    transaction: function (params, socketIo, io) {
        return customerService.transaction(params, socketIo, io)
    },
    // testAPI
    testAPI: function (params, socketIo, io) {
        return customerService.testAPI(params, socketIo, io)
    }
}