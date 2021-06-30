const jwt = require('jsonwebtoken');
const connect = require('../../database/database')
module.exports = {
    getTwoFA: async function (phone) {
        var query = `SELECT * FROM tb_user WHERE phone=${phone}`
        return new Promise((resolve, reject) => {
            connect.connect.query(query, (err, rows) => {
                if (err) return reject(err);
                resolve(rows);
            });
        });
    },
    // transaction
    getUserToAdminPagination: async function () {
        var query = `SELECT * FROM tb_user`

        return new Promise((resolve, reject) => {
            connect.connect.query(query, (err, rows) => {
                if (err) return reject(err);
                resolve(rows);
            });
        });
    },
    getUserToAdmin: async function (limit, page) {
        var query = `SELECT * FROM tb_user ORDER by idUser DESC LIMIT ${limit * (page-1 )},${limit}`

        return new Promise((resolve, reject) => {
            connect.connect.query(query, (err, rows) => {
                if (err) return reject(err);
                resolve(rows);
            });
        });
    },
    getTransactionAll: async function (limit,page) {
        var query = `SELECT * FROM tb_transaction ORDER by id DESC LIMIT ${limit * (page-1 )},${limit}`

        return new Promise((resolve, reject) => {
            connect.connect.query(query, (err, rows) => {
                
                if (err) return reject(err);
                resolve(rows);
            });
        });
    },
     getTransactionAllPagination: async function (limit, page) {
         var query = `SELECT * FROM tb_transaction `

         return new Promise((resolve, reject) => {
             connect.connect.query(query, (err, rows) => {
                 if (err) return reject(err);
                 resolve(rows);
             });
         });
     },

    getTransactionToIdUserPagination: async function (idUser) {
        var query = `SELECT * FROM tb_transaction WHERE idUser=${idUser} `

        return new Promise((resolve, reject) => {
            connect.connect.query(query, (err, rows) => {
                if (err) return reject(err);
                resolve(rows);
            });
        });
    },
    getTransactionToIdUser: async function (idUser,limit,page) {
        var query = `SELECT * FROM tb_transaction WHERE idUser=${idUser} ORDER by id DESC LIMIT ${limit * (page-1 )},${limit}`

        return new Promise((resolve, reject) => {
            connect.connect.query(query, (err, rows) => {
                if (err) return reject(err);
                resolve(rows);
            });
        });
    },
    getTransaction: async function (idUser, transaction) {
        var query = `SELECT * FROM tb_transaction WHERE idUser=${idUser} AND contract='${transaction}'`

        return new Promise((resolve, reject) => {
            connect.connect.query(query, (err, rows) => {
                if (err) return reject(err);
                resolve(rows);
            });
        });
    },
    getAllHistoryTransfer: async function (idUser) {
        var query = `SELECT * FROM tb_historytransfer WHERE idForm=${idUser} or idTo=${idUser} ORDER by id DESC`
       
        return new Promise((resolve, reject) => {
            connect.connect.query(query, (err, rows) => {
                if (err) return reject(err);
                resolve(rows);
            });
        });
    },
    getHistoryTransfer: async function (idUser, page, limit) {
        var query = `SELECT * FROM tb_historytransfer WHERE idForm=${idUser} or idTo=${idUser} ORDER by id DESC LIMIT ${limit * (page-1 )},${limit}`
    
        return new Promise((resolve, reject) => {
            connect.connect.query(query, (err, rows) => {
                if (err) return reject(err);
                resolve(rows);
            });
        });
    },
    getHistoryPresale: async function (idUser) {
        var query = `SELECT * FROM tb_presale WHERE idUser=${idUser} `

        return new Promise((resolve, reject) => {
            connect.connect.query(query, (err, rows) => {
                if (err) return reject(err);
                resolve(rows);
            });
        });
    },
    getWidthDrawPagination: async function () {
            var query = `SELECT * FROM tb_widthdraw  `

            return new Promise((resolve, reject) => {
                connect.connect.query(query, (err, rows) => {
                    if (err) return reject(err);
                    resolve(rows);
                });
            });
        },
     
    getHistory: async function (idUser) {
        var query = `SELECT * FROM tb_widthdraw WHERE idUser=${idUser} ORDER by id DESC`
  
        return new Promise((resolve, reject) => {
            connect.connect.query(query, (err, rows) => {
                if (err) return reject(err);
                resolve(rows);
            });
        });
    },
    getAllHistoryHistoryCommission: async function (idUser) {
        var query = `SELECT * FROM tb_historycommission WHERE idUser=${idUser}`
      
        return new Promise((resolve, reject) => {
            connect.connect.query(query, (err, rows) => {
                if (err) return reject(err);
                resolve(rows);
            });
        });
    },
    getHistoryHistoryCommission: async function (idUser, limit, page) {
        var query = `SELECT * FROM tb_historycommission WHERE idUser=${idUser} ORDER by id DESC LIMIT ${limit * (page-1 )},${limit}`
   
        return new Promise((resolve, reject) => {
            connect.connect.query(query, (err, rows) => {
                if (err) return reject(err);
                resolve(rows);
            });
        });
    },
    getHistorTransfer: async function (idUser, limit, page) {
        var query = `SELECT * FROM tb_historytransfer WHERE idForm=${idUser} or idTo=${idUser} ORDER by id DESC LIMIT ${limit * (page-1 )},${limit}`
      
        return new Promise((resolve, reject) => {
            connect.connect.query(query, (err, rows) => {
                if (err) return reject(err);
                resolve(rows);
            });
        });
    },
    getWidthDraw: async function (idUser) {
        var query = `SELECT * FROM tb_widthdraw WHERE idUser=${idUser}`

        return new Promise((resolve, reject) => {
            connect.connect.query(query, (err, rows) => {
                if (err) return reject(err);
                resolve(rows);
            });
        });
    },
    getWidthDrawAll: async function (limit, page) {
        var query = `SELECT * FROM tb_widthdraw ORDER by id DESC LIMIT ${limit * (page-1 )},${limit}`

        return new Promise((resolve, reject) => {
            connect.connect.query(query, (err, rows) => {
                if (err) return reject(err);
                resolve(rows);
            });
        });
    },
    getHistoryWidthDraw: async function (idUser, limit, page) {
        var query = `SELECT * FROM tb_widthdraw WHERE idUser=${idUser} ORDER by id DESC LIMIT ${limit * (page-1 )},${limit}`

        return new Promise((resolve, reject) => {
            connect.connect.query(query, (err, rows) => {
                if (err) return reject(err);
                resolve(rows);
            });
        });
    },
    getWalletAll: async function () {
        var query = `SELECT * FROM tb_wallet`
        return new Promise((resolve, reject) => {
            connect.connect.query(query, (err, rows) => {
                if (err) return reject(err);
                resolve(rows);
            });
        });
    },
    getWalletToIdUser: async function (idUser) {
        var query = `SELECT * FROM tb_wallet WHERE idUser=${idUser}`
        return new Promise((resolve, reject) => {
            connect.connect.query(query, (err, rows) => {
                if (err) return reject(err);
                resolve(rows);
            });
        });
    },
    getHandlingToIdUserAndHandling: async function (idUser,handling) {
        var query = `SELECT * FROM tb_handling WHERE idUser=${idUser} AND handling='${handling}'`
        return new Promise((resolve, reject) => {
            connect.connect.query(query, (err, rows) => {
                if (err) return reject(err);
                resolve(rows);
            });
        });
    },
    getUserToEmail: async function (email) {
        var query = `SELECT * FROM tb_user WHERE email='${email}'`
        return new Promise((resolve, reject) => {
            connect.connect.query(query, (err, rows) => {
                if (err) return reject(err);
                resolve(rows);
            });
        });
    },
    getUserToUseName: async function (userName) {
        var query = `SELECT * FROM tb_user WHERE userName='${userName}'`
        return new Promise((resolve, reject) => {
            connect.connect.query(query, (err, rows) => {
                if (err) return reject(err);
                resolve(rows);
            });
        });
    },
    edit2fa: async function (idUser, flag) {
        var sql = ""
        if (flag) {
            sql = `UPDATE tb_user SET twofa=1  WHERE idUser=${idUser} ;`

        } else {
            sql = `UPDATE tb_user SET twofa=0  WHERE idUser=${idUser} ;`

        }
        return new Promise((resolve, reject) => {
            connect.connect.query(sql, (err, rows) => {
                if (err) return reject({
                    message: "Lỗi hệ thống !",
                    status: 9,
                    err
                });
                if (flag) {
                    resolve({
                        message: "Bật 2Fa thành công ! ",
                        status: 200
                    });
                } else {
                    resolve({
                        message: "Tắt 2Fa thành công ! ",
                        status: 200
                    });
                }
            });

        });
    },
    getHistoryDepositStakingPagination: async function (idUser) {
        var query = `SELECT * FROM tb_historydepositstaking WHERE idUser=${idUser} ORDER by id DESC `
        return new Promise((resolve, reject) => {
            connect.connect.query(query, (err, rows) => {
                if (err) return reject(err);
                resolve(rows);
            });
        });
    },
    getHistoryCommunityPagination: async function (idUser, limit, page) {
        var query = `SELECT * FROM tb_historycommunity WHERE idUser=${idUser} ORDER by id DESC `
        return new Promise((resolve, reject) => {
            connect.connect.query(query, (err, rows) => {
                if (err) return reject(err);
                resolve(rows);
            });
        });
    },
    getHistoryBuyTokenPagination: async function (idUser) {
        var query = `SELECT * FROM tb_historybuytoken WHERE idUser=${idUser} ORDER by id DESC `
        return new Promise((resolve, reject) => {
            connect.connect.query(query, (err, rows) => {
                if (err) return reject(err);
                resolve(rows);
            });
        });
    },
    getHistoryWidthdrawInternalPagination: async function (idUser, limit, page) {
        var query = `SELECT * FROM tb_withdrawalsinternal WHERE idUser=${idUser} ORDER by id DESC `
        return new Promise((resolve, reject) => {
            connect.connect.query(query, (err, rows) => {
                if (err) return reject(err);
                resolve(rows);
            });
        });
    },
    getListUserPagination: async function (idUser, limit, page) {
        var query = `SELECT * FROM tb_user`
        return new Promise((resolve, reject) => {
            connect.connect.query(query, (err, rows) => {
                if (err) return reject(err);
                resolve(rows);
            });
        });
    },
    getListUserToKeywordPagination: async function (keyWord) {
        var query = `SELECT * FROM tb_user WHERE POSITION('${keyWord}' IN userName) `
        return new Promise((resolve, reject) => {
            connect.connect.query(query, (err, rows) => {
                if (err) return reject(err);
                resolve(rows);
            });
        });
    },
    getListUserToKeyword: async function (limit, page, keyWord) {

        var query = `SELECT * FROM tb_user WHERE POSITION('${keyWord}' IN userName) LIMIT ${limit * (page-1 )},${limit}`
   
        return new Promise((resolve, reject) => {
            connect.connect.query(query, (err, rows) => {
                if (err) return reject(err);
                resolve(rows);
            });
        });
    },
    getListUser: async function ( limit, page) {
        var query = `SELECT * FROM tb_user LIMIT ${limit * (page-1 )},${limit}`
        return new Promise((resolve, reject) => {
            connect.connect.query(query, (err, rows) => {
                if (err) return reject(err);
                resolve(rows);
            });
        });
    },
    getHistoryWidthdrawInternal: async function (idUser, limit, page) {
        var query = `SELECT * FROM tb_withdrawalsinternal WHERE idUser=${idUser} ORDER by id DESC LIMIT ${limit * (page-1 )},${limit}`
        return new Promise((resolve, reject) => {
            connect.connect.query(query, (err, rows) => {
                if (err) return reject(err);
                resolve(rows);
            });
        });
    },
    getHistoryBuyToken: async function (idUser, limit, page) {
        var query = `SELECT * FROM tb_historybuytoken WHERE idUser=${idUser} ORDER by id DESC LIMIT ${limit * (page-1 )},${limit}`
        return new Promise((resolve, reject) => {
            connect.connect.query(query, (err, rows) => {
                if (err) return reject(err);
                resolve(rows);
            });
        });
    },
    getHistoryCommunity: async function (idUser, limit, page) {
        var query = `SELECT * FROM tb_historycommunity WHERE idUser=${idUser} ORDER by id DESC LIMIT ${limit * (page-1 )},${limit}`
        return new Promise((resolve, reject) => {
            connect.connect.query(query, (err, rows) => {
                if (err) return reject(err);
                resolve(rows);
            });
        });
    },
    getHistoryDepositStaking: async function (idUser, limit, page) {
        var query = `SELECT * FROM tb_historydepositstaking WHERE idUser=${idUser} ORDER by id DESC LIMIT ${limit * (page-1 )},${limit}`
        return new Promise((resolve, reject) => {
            connect.connect.query(query, (err, rows) => {
                if (err) return reject(err);
                resolve(rows);
            });
        });
    },
    getPackageToIdUserPagination: async function (idUser, limit, page) {
        var query = `SELECT * FROM tb_package WHERE idUser=${idUser} ORDER by id DESC LIMIT ${limit * (page-1 )},${limit}`
        return new Promise((resolve, reject) => {
            connect.connect.query(query, (err, rows) => {
                if (err) return reject(err);
                resolve(rows);
            });
        });
    },
    getPreSale: async function (idUser) {
        var query = `SELECT * FROM tb_presale WHERE idUser=${idUser}`
        return new Promise((resolve, reject) => {
            connect.connect.query(query, (err, rows) => {
                if (err) return reject(err);
                resolve(rows);
            });
        });
    },
    getPackageToIdUser: async function (idUser) {
        var query = `SELECT * FROM tb_package WHERE idUser=${idUser}`
        return new Promise((resolve, reject) => {
            connect.connect.query(query, (err, rows) => {
                if (err) return reject(err);
                resolve(rows);
            });
        });
    },
    getLeverUserToCollaboratorsPagination: async function () {
        var query = `SELECT idUser,userName FROM tb_user US WHERE NOT EXISTS ( SELECT idUser FROM tb_lever LV WHERE US.idUser = LV.idUser )`
        return new Promise((resolve, reject) => {
            connect.connect.query(query, (err, rows) => {
                if (err) return reject(err);
                resolve(rows);

            });
        });
    },
    getLeverUserToCollaborators: async function (limit,page) {
        var query = `SELECT idUser,userName FROM tb_user US WHERE active=1 AND NOT EXISTS ( SELECT idUser FROM tb_lever LV WHERE US.idUser = LV.idUser )ORDER by idUser DESC  LIMIT ${limit * (page-1 )},${limit};`
        return new Promise((resolve, reject) => {
            connect.connect.query(query, (err, rows) => {
                if (err) return reject(err);
                resolve(rows);

            });
        });
    },
      getLeverMemberUserToLeverPagination: async function (lever) {
          var query = `SELECT * FROM tb_lever WHERE  star = ${lever}   `
          return new Promise((resolve, reject) => {
              connect.connect.query(query, (err, rows) => {
                  if (err) return reject(err);
                  resolve(rows);

              });
          });
    },
       getLeverMemberUserToLever: async function (lever, limit, page) {
           var query = `SELECT * FROM tb_lever WHERE star = ${lever} ORDER by id DESC  LIMIT ${limit * (page-1 )},${limit};`
           return new Promise((resolve, reject) => {
               connect.connect.query(query, (err, rows) => {
                   if (err) return reject(err);
                   resolve(rows);

               });
           });
       },
     getLeverUserToLeverPagination: async function (lever) {
         var query = `SELECT * FROM tb_lever WHERE star is null `
         return new Promise((resolve, reject) => {
             connect.connect.query(query, (err, rows) => {
                 if (err) return reject(err);
                 resolve(rows);

             });
         });
     },
     getLeverUserToLever: async function (lever,limit,page) {
         var query = `SELECT * FROM tb_lever WHERE star is null ORDER by id DESC  LIMIT ${limit * (page-1 )},${limit};`
         return new Promise((resolve, reject) => {
             connect.connect.query(query, (err, rows) => {
                 if (err) return reject(err);
                 resolve(rows);

             });
         });
     },
    getLeverAllUser: async function () {
        var query = `SELECT * FROM tb_lever`
        return new Promise((resolve, reject) => {
            connect.connect.query(query, (err, rows) => {
                if (err) return reject(err);
                resolve(rows);

            });
        });
    },
    getLeverToIdUser: async function (idUser) {
        var query = `SELECT * FROM tb_lever WHERE idUser=${idUser}`
        return new Promise((resolve, reject) => {
            connect.connect.query(query, (err, rows) => {
                if (err) return reject(err);
                resolve(rows);

            });
        });
    },
    getCountry: async function () {
        var query = `SELECT * FROM tb_country`
        return new Promise((resolve, reject) => {
            connect.connect.query(query, (err, rows) => {
                if (err) return reject(err);
                resolve(rows);

            });
        });
    },
    getAllUser: async function () {
        var query = `SELECT * FROM tb_user`
        return new Promise((resolve, reject) => {
            connect.connect.query(query, (err, rows) => {
                if (err) return reject(err);
                resolve(rows);

            });
        });
    },
    getPresale: async function (idUser, limit, page) {
        var query = `SELECT * FROM tb_presale WHERE idUser=${idUser} ORDER by id DESC LIMIT ${limit * (page-1 )},${limit}`
        return new Promise((resolve, reject) => {
            connect.connect.query(query, (err, rows) => {
                if (err) return reject(err);
                resolve(rows);
            });
        });
    },
    getParentToIdUser: async function (idUser) {
        var query = `SELECT userName,idUser,email 
FROM tb_user
where JSON_EXTRACT(parent,"$.F1")="${idUser}" AND active=1`
        return new Promise((resolve, reject) => {
            connect.connect.query(query, (err, rows) => {
                if (err) return reject(err);
                resolve(rows);
            });
        });
    },
    getUserToId: async function (idUser) {
        var query = `SELECT * FROM tb_user WHERE idUser=${idUser}`
        return new Promise((resolve, reject) => {
            connect.connect.query(query, (err, rows) => {
                if (err) return reject(err);
                resolve(rows);
            });
        });
    },
    editSecret: async function (idUser, secret) {
        const sql = `UPDATE tb_user SET secret='${secret}' WHERE idUser=${idUser} ;`

        return new Promise((resolve, reject) => {
            connect.connect.query(sql, (err, rows) => {
                if (err) return reject({
                    message: "Lỗi hệ thống !",
                    status: false,
                    err
                });
                resolve({
                    message: "Thay đổi secret thành công ! ",
                    status: true
                });
            });

        });
    },
    updateCommunity: async function (idUser, community) {
        const sql = `UPDATE tb_wallet SET community=${community} WHERE idUser=${idUser}`
        return new Promise((resolve, reject) => {
            connect.connect.query(sql, (err, rows) => {
                if (err) return reject({
                    message: "Cập nhật thông tin thất bại !",
                    status: 1,
                    err
                });
                resolve({
                    message: "Cập nhật thông tin thành công ! ",
                    status: 200
                });
            });

        });
    },
    updateMoneyInterest: async function (id, moneyInterest) {
        const sql = `UPDATE tb_package SET moneyInterest=${moneyInterest} WHERE id=${id}`
        return new Promise((resolve, reject) => {
            connect.connect.query(sql, (err, rows) => {
                if (err) return reject({
                    message: "Cập nhật thông tin thất bại !",
                    status: 1,
                    err
                });
                resolve({
                    message: "Cập nhật thông tin thành công ! ",
                    status: 200
                });
            });

        });
    },
    updateLever: async function (idUser, star) {
        const sql = `UPDATE tb_lever SET star=${star} WHERE idUser=${idUser}`
        return new Promise((resolve, reject) => {
            connect.connect.query(sql, (err, rows) => {
                if (err) return reject({
                    message: "Cập nhật thông tin thất bại !",
                    status: 1,
                    err
                });
                resolve({
                    message: "Cập nhật thông tin thành công ! ",
                    status: 200
                });
            });

        });
    },
    updatePassword: async function (idUser, password) {
        const sql = `UPDATE tb_user SET password=${password} WHERE idUser=${idUser}`
        return new Promise((resolve, reject) => {
            connect.connect.query(sql, (err, rows) => {
                if (err) return reject({
                    message: "Cập nhật thông tin thất bại !",
                    status: 1,
                    err
                });
                resolve({
                    message: "Cập nhật thông tin thành công ! ",
                    status: 200
                });
            });

        });
    },
    updateWidthdraw: async function (idUser, Activce) {
        const sql = `UPDATE tb_widthdraw SET status='${Activce}' WHERE id=${idUser}`
        return new Promise((resolve, reject) => {
            connect.connect.query(sql, (err, rows) => {
                if (err) return reject({
                    message: "Cập nhật thông tin thất bại !",
                    status: 1,
                    err
                });
                resolve({
                    message: "Cập nhật thông tin thành công ! ",
                    status: 200
                });
            });

        });
    },
    updateTotalPackage: async function (id,staking) {
        const sql = `UPDATE tb_manage SET staking=staking+${staking} WHERE id=${id}`
        return new Promise((resolve, reject) => {
            connect.connect.query(sql, (err, rows) => {
                if (err) return reject({
                    message: "Cập nhật thông tin thất bại !",
                    status: 1,
                    err
                });
                resolve({
                    message: "Cập nhật thông tin thành công ! ",
                    status: 200
                });
            });

        });
    },
    updateActiveEmail: async function (email, flag) {
        const sql = `UPDATE tb_user SET active=${flag} WHERE email="${email}"`
        return new Promise((resolve, reject) => {
            connect.connect.query(sql, (err, rows) => {
                if (err) return reject({
                    message: "email is not exit !",
                    status: 1,
                    err
                });
                resolve({
                    message: "Cập nhật thông tin thành công ! ",
                    status: 200
                });
            });

        });
    },
    updateIsActive: async function (idUser, flag) {
        const sql = `UPDATE tb_user SET isActive=${flag} WHERE idUser=${idUser}`
        return new Promise((resolve, reject) => {
            connect.connect.query(sql, (err, rows) => {
                if (err) return reject({
                    message: "Cập nhật thông tin thất bại !",
                    status: 1,
                    err
                });
                resolve({
                    message: "Cập nhật thông tin thành công ! ",
                    status: 200
                });
            });

        });
    },
    updateActive: async function (idUser, flag){
     const sql = `UPDATE tb_user SET active=${flag} WHERE idUser=${idUser}`
     return new Promise((resolve, reject) => {
         connect.connect.query(sql, (err, rows) => {
             if (err) return reject({
                 message: "Cập nhật thông tin thất bại !",
                 status: 1,
                 err
             });
             resolve({
                 message: "Cập nhật thông tin thành công ! ",
                 status: 200
             });
         });

     });
    },
    updatePassword: async function (idUser, password) {
        const sql = `UPDATE tb_user SET password='${password}' WHERE idUser=${idUser}`
        return new Promise((resolve, reject) => {
            connect.connect.query(sql, (err, rows) => {
                if (err) return reject({
                    message: "Cập nhật thông tin thất bại !",
                    status: 1,
                    err
                });
                resolve({
                    message: "Cập nhật thông tin thành công ! ",
                    status: 200
                });
            });

        });
    },
    updateProfileUserWalletTrx: async function (idUser, firstName, lastName, walletTrx) {
        const sql = `UPDATE tb_user SET firstName='${firstName}', lastName='${lastName}', walletTrx='${walletTrx}' WHERE idUser=${idUser}`
        return new Promise((resolve, reject) => {
            connect.connect.query(sql, (err, rows) => {
                if (err) return reject({
                    message: "Cập nhật thông tin thất bại !",
                    status: 1,
                    err
                });
                resolve({
                    message: "Successfully updated!",
                    status: 200
                });
            });

        });
    },
    updateProfileUser: async function (idUser, firstName, lastName) {
        const sql = `UPDATE tb_user SET firstName='${firstName}', lastName='${lastName}' WHERE idUser=${idUser}`
        return new Promise((resolve, reject) => {
            connect.connect.query(sql, (err, rows) => {
                if (err) return reject({
                    message: "Cập nhật thông tin thất bại !",
                    status: 1,
                    err
                });
                resolve({
                    message: "Cập nhật thông tin thành công ! ",
                    status: 200
                });
            });

        });
    },
    updateUserLeverCommission: async function (idUser, levelCommission) {
        const sql = `UPDATE tb_wallet SET levelCommission=${levelCommission} WHERE idUser=${idUser}`
        return new Promise((resolve, reject) => {
            connect.connect.query(sql, (err, rows) => {
                if (err) return reject({
                    message: "Lỗi hệ thống !",
                    status: false,
                    err
                });
                resolve({
                    message: "Kích hoạt gói thành công ! ",
                    status: true
                });
            });

        });
    },
    updateUserTotalTong: async function (idUser, tong) {
        const sql = `UPDATE tb_wallet SET totalInvest
=${tong} WHERE idUser=${idUser}`
        return new Promise((resolve, reject) => {
            connect.connect.query(sql, (err, rows) => {
                if (err) return reject({
                    message: "Lỗi hệ thống !",
                    status: false,
                    err
                });
                resolve({
                    message: "Package activated successfully ! ",
                    status: true
                });
            });

        });
    },
    updateUserDirectCommission: async function (idUser, directCommission) {
        const sql = `UPDATE tb_wallet SET directCommission=${directCommission} WHERE idUser=${idUser}`
        return new Promise((resolve, reject) => {
            connect.connect.query(sql, (err, rows) => {
                if (err) return reject({
                    message: "Lỗi hệ thống !",
                    status: false,
                    err
                });
                resolve({
                    message: "Kích hoạt gói thành công ! ",
                    status: true
                });
            });

        });
    },
    updateUserKANWidthDraw: async function (idUser, kan) {
        const sql = `UPDATE tb_wallet SET kan=${kan} WHERE idUser=${idUser}`
        return new Promise((resolve, reject) => {
            connect.connect.query(sql, (err, rows) => {
                if (err) return reject({
                    message: "Lỗi hệ thống !",
                    status: false,
                    err
                });
                resolve({
                    message: "Kích hoạt gói thành công ! ",
                    status: 200
                });
            });

        });
    },
    // widthDrawDailyInterest
    updateWidthDrawDailyInterest: async function (idUser, widthDrawDailyInterest) {
        const sql = `UPDATE tb_wallet SET widthDrawDailyInterest=widthDrawDailyInterest+${widthDrawDailyInterest} WHERE idUser=${idUser}`
        return new Promise((resolve, reject) => {
            connect.connect.query(sql, (err, rows) => {
                if (err) return reject({
                    message: "Lỗi hệ thống !",
                    status: false,
                    err
                });
                resolve({
                    message: "Kích hoạt gói thành công ! ",
                    status: 200
                });
            });

        });
    },
    updateUserDailyInterest: async function (idUser, dailyInterest) {
        const sql = `UPDATE tb_wallet SET dailyInterest=${dailyInterest} WHERE idUser=${idUser}`
        return new Promise((resolve, reject) => {
            connect.connect.query(sql, (err, rows) => {
                if (err) return reject({
                    message: "Lỗi hệ thống !",
                    status: false,
                    err
                });
                resolve({
                    message: "Kích hoạt gói thành công ! ",
                    status: 200
                });
            });

        });
    },
    updateUserIncome: async function (idUser, income) {
        const sql = `UPDATE tb_wallet SET income=${income} WHERE idUser=${idUser}`
        return new Promise((resolve, reject) => {
            connect.connect.query(sql, (err, rows) => {
                if (err) return reject({
                    message: "Lỗi hệ thống !",
                    status: false,
                    err
                });
                resolve({
                    message: "Kích hoạt gói thành công ! ",
                    status: 200
                });
            });

        });
    },
    updateKAN: async function (idUser, kan) {
        const sql = `UPDATE tb_wallet SET kan=${kan} WHERE idUser=${idUser}`
        return new Promise((resolve, reject) => {
            connect.connect.query(sql, (err, rows) => {
                if (err) return reject({
                    message: "Lỗi hệ thống !",
                    status: false,
                    err
                });
                resolve({
                    message: "Kích hoạt gói thành công ! ",
                    status: 200
                });
            });

        });
    },
    // depositStaking
    updateUserStaking: async function (idUser, staking) {
        const sql = `UPDATE tb_wallet SET staking=staking+${staking} WHERE idUser=${idUser}`
        return new Promise((resolve, reject) => {
            connect.connect.query(sql, (err, rows) => {
                if (err) return reject({
                    message: "Lỗi hệ thống !",
                    status: false,
                    err
                });
                resolve({
                    message: "Kích hoạt gói thành công ! ",
                    status: 200
                });
            });

        });
    },
    updateStakingPreSale: async function (idUser, staking) {
        const sql = `UPDATE tb_wallet SET staking=staking+${staking} WHERE idUser=${idUser}`
        return new Promise((resolve, reject) => {
            connect.connect.query(sql, (err, rows) => {
                if (err) return reject({
                    message: "Lỗi hệ thống !",
                    status: false,
                    err
                });
                resolve({
                    message: "Package activated successfully ! ",
                    status: 200
                });
            });

        });
    },
    updateStaking: async function (idUser, staking) {
        const sql = `UPDATE tb_wallet SET staking=${staking} WHERE idUser=${idUser}`
        return new Promise((resolve, reject) => {
            connect.connect.query(sql, (err, rows) => {
                if (err) return reject({
                    message: "Lỗi hệ thống !",
                    status: false,
                    err
                });
                resolve({
                    message: "Package activated successfully ! ",
                    status: 200
                });
            });

        });
    },
    updateUserKAN: async function (idUser, KAN) {
        const sql = `UPDATE tb_wallet SET kan=kan+${KAN} WHERE idUser=${idUser}`
        return new Promise((resolve, reject) => {
            connect.connect.query(sql, (err, rows) => {
                if (err) return reject({
                    message: "Lỗi hệ thống !",
                    status: false,
                    err
                });
                resolve({
                    message: "Package activated successfully ! ",
                    status: 200
                });
            });

        });
    },
    updateQGC: async function (idUser, TRX) {
        const sql = `UPDATE tb_wallet SET trx=${TRX} WHERE idUser=${idUser}`
        return new Promise((resolve, reject) => {
            connect.connect.query(sql, (err, rows) => {
                if (err) return reject({
                    message: "Lỗi hệ thống !",
                    status: false,
                    err
                });
                resolve({
                    message: "Package activated successfully ! ",
                    status: 200
                });
            });

        });
    },
    updateKanTransfer: async function (idUser, kan) {
        const sql = `UPDATE tb_wallet SET kan=${kan} WHERE idUser=${idUser}`
        return new Promise((resolve, reject) => {
            connect.connect.query(sql, (err, rows) => {
                if (err) return reject({
                    message: "Lỗi hệ thống !",
                    status: false,
                    err
                });
                resolve({
                    message: "Package activated successfully ! ",
                    status: 200
                });
            });

        });
    },
    updatePresaleReceived: async function (id) {
        const sql = `UPDATE tb_presale SET received=received+1 WHERE id=${id}`
        return new Promise((resolve, reject) => {
            connect.connect.query(sql, (err, rows) => {
                if (err) return reject({
                    message: "Lỗi hệ thống !",
                    status: false,
                    err
                });
                resolve({
                    message: "Package activated successfully ! ",
                    status: 200
                });
            });

        });
    },
    updateCommunity: async function (idUser, TRX) {
        const sql = `UPDATE tb_wallet SET community=${TRX} WHERE idUser=${idUser}`
        return new Promise((resolve, reject) => {
            connect.connect.query(sql, (err, rows) => {
                if (err) return reject({
                    message: "Lỗi hệ thống !",
                    status: false,
                    err
                });
                resolve({
                    message: "Package activated successfully ! ",
                    status: 200
                });
            });

        });
    },
    updateUserTRX: async function (idUser, TRX) {
        const sql = `UPDATE tb_wallet SET trx=${TRX} WHERE idUser=${idUser}`
        return new Promise((resolve, reject) => {
            connect.connect.query(sql, (err, rows) => {
                if (err) return reject({
                    message: "Lỗi hệ thống !",
                    status: false,
                    err
                });
                resolve({
                    message: "Package activated successfully ! ",
                    status: 200
                });
            });

        });
    },
    addWallet: async function (base58, hex, privateKey, publicKey, idUser) {
        const sqlNotification = `INSERT INTO tb_wallet set ?`
        const cusObj = {
            base58,
            hex,
            privateKey,
            publicKey,
            idUser,
            trx: 0,
            kan: 0,
            community: 40
        }
        return new Promise((resolve, reject) => {
            connect.connect.query(sqlNotification, cusObj, (err, rows) => {
                if (err)
                    return reject({
                        status: false,
                        message: "đăng ký thất bại !",
                        err
                    });
                resolve({
                    status: 200,
                    message: "Đăng ký thành công !",

                });
            });
        })
    },
    addWithdrawalsInternal: async function (amount, idUser, flag, feelimit, action) {
        const sqlNotification = `INSERT INTO tb_withdrawalsinternal set ?`
        const cusObj = {
            amount,
            idUser,
            type: flag,
            status: "Waiting",
            feelimit,
            action
        }
        return new Promise((resolve, reject) => {
            connect.connect.query(sqlNotification, cusObj, (err, rows) => {
                if (err)
                    return reject({
                        status: false,
                        message: "đăng ký thất bại !",
                        err
                    });
                return resolve({
                    status: 200,
                    message: "Kích hoạt gói thành công !",
                    resolve: rows

                });
            });
        })
    },
    addWidthdraw: async function (amount, idUser, flag, feelimit) {
        const sqlNotification = `INSERT INTO tb_widthdraw set ?`
        const cusObj = {
            amount,
            idUser,
            type: flag,
            status: "Waiting",
            feelimit
        }
        return new Promise((resolve, reject) => {
            connect.connect.query(sqlNotification, cusObj, (err, rows) => {
                if (err)
                    return reject({
                        status: false,
                        message: "đăng ký thất bại !",
                        err
                    });
                return resolve({
                    status: 200,
                    message: "Kích hoạt gói thành công !",
                    resolve: rows

                });
            });
        })
    },
    addTransaciton: async function (transaction, idUser, contract, image, amount, fromAddress, toAddress, status) {
        const sqlNotification = `INSERT INTO tb_transaction set ?`
        const cusObj = {
            transaction,
            idUser,
            contract,
            image,
            amount,
            fromAddress,
            toAddress,
status
        }
        return new Promise((resolve, reject) => {
            connect.connect.query(sqlNotification, cusObj, (err, rows) => {
                if (err)
                    return reject({
                        status: false,
                        message: "đăng ký thất bại !",
                        err
                    });
                return resolve({
                    status: 200,
                    message: "Kích hoạt gói thành công !",
                    resolve: rows

                });
            });
        })
    },
    addHistoryTransfer: async function (idForm, idTo, amount, type) {
        const sqlNotification = `INSERT INTO tb_historytransfer set ?`
        const cusObj = {
            idForm,
            idTo,
            amount,
            type
        }
        return new Promise((resolve, reject) => {
            connect.connect.query(sqlNotification, cusObj, (err, rows) => {
                if (err)
                    return reject({
                        status: false,
                        message: "đăng ký thất bại !",
                        err
                    });
                return resolve({
                    status: 200,
                    message: "Kích hoạt gói thành công !",
                    resolve: rows

                });
            });
        })
    },
    addHistoryDepositStaking: async function (idUser, amount, type) {
        const sqlNotification = `INSERT INTO tb_historydepositstaking set ?`
        const cusObj = {
            idUser,
            amount,
            type,

        }
        return new Promise((resolve, reject) => {
            connect.connect.query(sqlNotification, cusObj, (err, rows) => {
                if (err)
                    return reject({
                        status: false,
                        message: "đăng ký thất bại !",
                        err
                    });
                return resolve({
                    status: 200,
                    message: "Kích hoạt gói thành công !",
                    resolve: rows

                });
            });
        })
    },
    addHistoryCommunity: async function (idUser, amount, idForm) {
        const sqlNotification = `INSERT INTO tb_historycommunity set ?`
        const cusObj = {
            amount,
            idUser,
            idForm,
        }
        return new Promise((resolve, reject) => {
            connect.connect.query(sqlNotification, cusObj, (err, rows) => {
                if (err)
                    return reject({
                        status: false,
                        message: "đăng ký thất bại !",
                        err
                    });
                return resolve({
                    status: 200,
                    message: "Kích hoạt gói thành công !",
                    resolve: rows

                });
            });
        })
    },
      deleteHandling: async function (idUser,handling) {

          var sql = `DELETE FROM tb_handling WHERE idUser=${idUser} AND handling="${handling}"`
          return new Promise((resolve, reject) => {
              connect.connect.query(sql, (err, rows) => {
                  if (err) return reject({
                      status: false,
                      message: "Lỗi hệ thống ",
                      err
                  });
                  resolve({
                      message: "Xóa nông trại thành công thành công !",
                      status: true
                  });
              });

          });
      },
    addFunctionHandling: async function (handling, idUser) {
        const sqlNotification = `INSERT INTO tb_handling set ?`
        const cusObj = {
            idUser,
            handling,
        }
        return new Promise((resolve, reject) => {
            connect.connect.query(sqlNotification, cusObj, (err, rows) => {
                if (err)
                    return reject({
                        status: false,
                        message: "đăng ký thất bại !",
                        err
                    });
                return resolve({
                    status: 200,
                    message: "Kích hoạt gói thành công !",
                    resolve: rows

                });
            });
        })
    },
    addHistoryBuyToken: async function (amount, idUser) {
        const sqlNotification = `INSERT INTO tb_historybuytoken set ?`
        const cusObj = {
            idUser,
            amount
        }
        return new Promise((resolve, reject) => {
            connect.connect.query(sqlNotification, cusObj, (err, rows) => {
                if (err)
                    return reject({
                        status: false,
                        message: "đăng ký thất bại !",
                        err
                    });
                return resolve({
                    status: 200,
                    message: "Kích hoạt gói thành công !",
                    resolve: rows

                });
            });
        })
    },
    addHistoryCommissione: async function (userName, idUser, bonus, status) {
        const sqlNotification = `INSERT INTO tb_historycommission set ?`
        const cusObj = {
            userName,
            idUser,
            bonus,
            status
        }
        return new Promise((resolve, reject) => {
            connect.connect.query(sqlNotification, cusObj, (err, rows) => {
                if (err)
                    return reject({
                        status: false,
                        message: "đăng ký thất bại !",
                        err
                    });
                return resolve({
                    status: 200,
                    message: "Kích hoạt gói thành công !",
                    resolve: rows

                });
            });
        })
    },
    addPrivateSale: async function (preSale, idUser, amount) {
        const sqlNotification = `INSERT INTO tb_presale set ?`
        const cusObj = {
            preSale,
            idUser,
            amount,
            privateSale : 1
        }
        return new Promise((resolve, reject) => {
            connect.connect.query(sqlNotification, cusObj, (err, rows) => {
                if (err)
                    return reject({
                        status: false,
                        message: "đăng ký thất bại !",
                        err
                    });
                return resolve({
                    status: 200,
                    message: "Kích hoạt gói thành công !",
                    resolve: rows

                });
            });
        })
    },
    addPresale: async function (preSale, idUser, amount) {
        const sqlNotification = `INSERT INTO tb_presale set ?`
        const cusObj = {
            preSale,
            idUser,
            amount,
        }
        return new Promise((resolve, reject) => {
            connect.connect.query(sqlNotification, cusObj, (err, rows) => {
                if (err)
                    return reject({
                        status: false,
                        message: "đăng ký thất bại !",
                        err
                    });
                return resolve({
                    status: 200,
                    message: "Kích hoạt gói thành công !",
                    resolve: rows

                });
            });
        })
    },
    addLever: async function (idUser, star) {
        const sqlNotification = `INSERT INTO tb_lever set ?`
        const cusObj = {
            idUser,
            star
        }
        return new Promise((resolve, reject) => {
            connect.connect.query(sqlNotification, cusObj, (err, rows) => {
                if (err)
                    return reject({
                        status: false,
                        message: "đăng ký thất bại !",
                        err
                    });
                return resolve({
                    status: 200,
                    message: "Kích hoạt gói thành công !",
                    resolve: rows

                });
            });
        })
    },
    addPackage: async function (price, idUser, month) {
        const sqlNotification = `INSERT INTO tb_package set ?`
        const cusObj = {
            idUser,
            price: price,
            month
        }
        return new Promise((resolve, reject) => {
            connect.connect.query(sqlNotification, cusObj, (err, rows) => {
                if (err)
                    return reject({
                        status: false,
                        message: "đăng ký thất bại !",
                        err
                    });
                return resolve({
                    status: 200,
                    message: "Kích hoạt gói thành công !",
                    resolve: rows

                });
            });
        })
    },
    addUser: async function (userName, lastName, firstName, email, password, country, parent) {
        const sqlNotification = `INSERT INTO tb_user set ?`
        const cusObj = {
            userName,
            lastName,
            firstName,
            email,
            password,
            country,
            parent
        }
        return new Promise((resolve, reject) => {
            connect.connect.query(sqlNotification, cusObj, (err, rows) => {
                if (err)
                    return reject({
                        status: false,
                        message: "đăng ký thất bại !",
                        err
                    });

                return resolve({
                    status: 200,
                    message: "Đăng ký thành công !",
                    resolve: rows

                });
            });
        })
    },
    checkAllUserNamePassword: async function (userName, password) {
        const query = `SELECT * FROM tb_user WHERE userName='${userName}' AND password='${password}'
       `;
        return new Promise((resolve, reject) => {
            connect.connect.query(query, (err, rows) => {
                if (err) return reject(err);
                resolve(rows);
            });
        });
    },

}