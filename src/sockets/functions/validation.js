const jwt = require('jsonwebtoken')

module.exports = {
    // token_user_name
    // token_vinawallet
    tokenUser: (token) => {
        var decodeToken = jwt.verify(token, 'token_kan')
        if (decodeToken.cusObj.idUser) {
            return decodeToken.cusObj.idUser
        } else {
            return false
        }
    },
    tokenAdmin: (token) => {
        var decodeToken = jwt.verify(token, 'token_kan')
        if (decodeToken.cusObj.type == "admin") {
            return true
        } else {
            return false
        }
    }
}