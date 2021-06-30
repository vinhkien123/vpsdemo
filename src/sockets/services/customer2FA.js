const qrcode = require('qrcode')
const otplib = require('otplib')
const {
    authenticator
} = otplib
const customerQuery = require('../queries/customerQuery');
const validateToken = require('../functions/validation')
const serviceName = "kane.fund"

module.exports = {
    turnOff2FA: async (params) => {
        const {
            tokena,
            otp
        } = params
        if (otp == "") {
            return {
                message: "OTP cannot be empty ! ",
                status: 1
            }
        }
        var token = otp
        const phone = validateToken.tokenUser(tokena)
        const profileUser = await customerQuery.getUserToId(phone)
        if (profileUser.length > 0) {
            if (profileUser[0].twofa == 1) {
                const secret = profileUser[0].secret

                let a = authenticator.verify({
                    token,
                    secret
                })
                if (a) {
                    const on2FA = await customerQuery.edit2fa(phone, false)
                    return on2FA
                } else {
                    return {
                        message: "Incorrect code ! ",
                        status: 2
                    }
                }
            } else {
                return {
                    status: 6,
                    message: "User has not enabled the 2Fa feature"
                }
            }


        } else {
            return {
                message: "User does not exist ! ",
                status: 3
            }
        }

    },
    turnOn2FA: async (params) => {
        const {
            tokena,
            otp
        } = params
        if (otp == "") {
            return {
                message: "OTP cannot be empty ! ",
                status: 1
            }
        }
        var token = otp
        const phone = validateToken.tokenUser(tokena)
        const profileUser = await customerQuery.getUserToId(phone)
        if (profileUser.length > 0) {
            const secret = profileUser[0].secret
            let a = authenticator.verify({
                token,
                secret
            })
            if (a) {
                if (profileUser[0].twofa == 1) {
                    return {
                        message: "2FA is enabled !",
                        status: 8
                    }
                }
                const on2FA = await customerQuery.edit2fa(phone, true)
                return on2FA
            } else {
                return {
                    message: "Incorrect code ! ",
                    status: 2
                }
            }

        } else {
            return {
                message: "The user does not exist weightsi ! ",
                status: 3
            }
        }

    },

    /** Tạo mã OTP token */
    generateOTPToken: async (params) => {
        const {
            token
        } = params
        const idUser = validateToken.tokenUser(token)
        const profileUser = await customerQuery.getUserToId(idUser)
        if (profileUser.length > 0) {
            if (profileUser[0].twofa != 1) {
                const secret = authenticator.generateSecret()
                const username = profileUser[0].userName

                const flag = await customerQuery.editSecret(idUser, secret)
                if (flag.status == true) {
                    const otpAuth = authenticator.keyuri(username, serviceName, secret)
                    return {
                        message: "Get OTP Auth successfully ! ",
                        data: {
                            otpAuth,
                            secret
                        },
                        status: 200
                    }
                } else {
                    return {
                        message: "Added secret code failed ! ",
                        status: 1
                    }
                }
            } else {
                return {
                    message: "The user has turned on 2fa",
                    status: 10
                }
            }

        } else {
            return {
                message: "Retrieving OTP Auth failed ! ",
                status: 2
            }
        }

    },
    /** Kiểm tra mã OTP token có hợp lệ hay không
     * Có 2 method "verify" hoặc "check", các bạn có thể thử dùng một trong 2 tùy thích.
     */
    generateUniqueSecret: () => {
        return {
            message: "Lấy Secret thành công ! ",
            data: authenticator.generateSecret()
        }
    },
    verifyOTPToken: (params) => {
        const {
            token,
            secret
        } = params
        let a = authenticator.verify({
            token,
            secret
        })
        if (a) {
            return {
                message: "Mã xác nhận thành công !",
                status: true
            }
        } else {
            return {
                message: "Mã xác nhận không đúng !",
                status: false
            }
        }

        // return authenticator.check(token, secret)
    },
    /** Tạo QR code từ mã OTP để gửi về cho user sử dụng app quét mã */
    generateQRCode: async (params) => {
        const {
            otpAuth
        } = params
        try {
            const QRCodeImageUrl = await qrcode.toDataURL(otpAuth)
            return `<img src='${QRCodeImageUrl}' alt='qr-code-img-trungquandev' />`
        } catch (error) {
            console.log('Could not generate QR code', error)
            return
        }
    }

}