const nodeMailer = require('nodemailer')
const adminEmail = 'contact@quickswallet.com'
const adminPassword = 'kcdlflfkglhyhdww'
const mailHost = 'smtp.gmail.com'
// const logo = require("./logoQWLogo.png")
var ejs = require('ejs');
const mailPort = 587
const HOST = "quickwallet.app"
const sendMail = (to, subject, userName,password,token) => {
    const transporter = nodeMailer.createTransport({
        host: mailHost,
        port: mailPort,
        secure: false, // nếu các bạn dùng port 465 (smtps) thì để true, còn lại hãy để false cho tất cả các port khác
        auth: {
            user: adminEmail,
            pass: adminPassword
        },
        tls: {
            rejectUnauthorized: false
        }
    })
    let html = ejs.render(`<table style="font-size: 14px; font-family: Microsoft Yahei,Arial,Helvetica,sans-serif; padding: 0; margin: 0; color: #333; background-color: #f7f7f7; background-repeat: repeat-x; background-position: bottom left;" border="0" width="100%" cellspacing="0"
    cellpadding="0">
    <tbody>
        <tr>
            <td>
                <table style="max-width: 600px;" border="0" cellspacing="0" cellpadding="0" align="center">
                    <tbody>
                        <tr>
                            <td style="padding: 33px 0; background: #262a42;" align="center" valign="middle">
                                <a href='${HOST}'
                                target="_blank"
                                rel="noopener"> <img class="m_3358380767117121333m_-4368746486683527934m_-6847593570969279853CToWUd CToWUd"
                                style="border: 0; max-width: 232px;"
                                src = 'https://${HOST}/app-quickwallet/content/CoinBlockchain/images/logo-2.png'
                                alt='${HOST}' /> </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div style="padding: 0 30px; background: #fff;">
                                    <table border="0" width="100%" cellspacing="0" cellpadding="0">
                                        <tbody>
                                            <tr>
                                                <td style="font-size: 14px; line-height: 30px; padding: 20px 0; color: #666;">
                                                    <p>Dear ${userName}</p>
                                                    <p>You have Register success.</p>
                                                    <div>Your registration information:</div>
                                                    <div>- Username:${userName}</div>
                                                    <div>- Password: ${password}</div>
                                                    <div>- Email: ${to}</div>
                                                    <p>Please, click confirm below to verify your email.</p>
                                                    <p><a style="padding: 10px 28px; background: none; text-decoration: none; border: 2px solid #262a42; color: #262a42; text-transform: uppercase; font-size: 14px;" href='${HOST}/verify-email/${token}'
                                                            target="_blank" rel="noopener">Confirm</a></p>
                                                    <div></div>
                                                    <a href='https://quickwallet.app/' target="_blank">https://quickwallet.app/</a>
                                                </td>
                                            </tr>
                                           
                                        </tbody>
                                    </table>
                                </div>
                            </td>
                        </tr>
                       
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>`, {
        USERNAME: "people",
        PASSWORD: "123123",
        EMAIL: "asDASD",
        HOST_SERVER : 'ASDASD'
    });
    const options = {
        from: adminEmail, // địa chỉ admin email bạn dùng để gửi
        to: to, // địa chỉ gửi đến
        subject: subject, // Tiêu đề của mail
        html: html // Phần nội dung mail mình sẽ dùng html thay vì thuần văn bản thông thường.
    }
    // hàm transporter.sendMail() này sẽ trả về cho chúng ta một Promise
    return transporter.sendMail(options)
}
const sendMailForgotPassword = (to, subject, userName, token) => {
    const transporter = nodeMailer.createTransport({
        host: mailHost,
        port: mailPort,
        secure: false, // nếu các bạn dùng port 465 (smtps) thì để true, còn lại hãy để false cho tất cả các port khác
        auth: {
            user: adminEmail,
            pass: adminPassword
        },
        tls: {
            rejectUnauthorized: false
        }
    })
    let html = ejs.render(`<table style="font-size: 14px; font-family: Microsoft Yahei,Arial,Helvetica,sans-serif; padding: 0; margin: 0; color: #333; background-color: #f7f7f7; background-repeat: repeat-x; background-position: bottom left;" border="0" width="100%" cellspacing="0"
    cellpadding="0">
    <tbody>
        <tr>
            <td>
                <table style="max-width: 600px;" border="0" cellspacing="0" cellpadding="0" align="center">
                    <tbody>
                        <tr>
                            <td style="padding: 33px 0; background: #262a42;" align="center" valign="middle">
                                <a href='${HOST}'
                                target="_blank"
                                rel="noopener"> <img class="m_3358380767117121333m_-4368746486683527934m_-6847593570969279853CToWUd CToWUd"
                                style="border: 0; max-width: 232px;"
                                src = 'https://${HOST}/app-quickwallet/content/CoinBlockchain/images/logo-2.png'
                                alt='${HOST}' /> </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div style="padding: 0 30px; background: #fff;">
                                    <table border="0" width="100%" cellspacing="0" cellpadding="0">
                                        <tbody>
                                            <tr>
                                                <td style="font-size: 14px; line-height: 30px; padding: 20px 0; color: #666;">
                                                    <p>Dear ${userName}</p>
                                                    <p>You have Forgot Password success.</p>
                                                    <div>Your registration information:</div>
                                                    <div>- Username:${userName}</div>
                                                    <div>- Email: ${to}</div>
                                                    <p>Please, click confirm below to verify your email.</p>
                                                    <p><a style="padding: 10px 28px; background: none; text-decoration: none; border: 2px solid #262a42; color: #262a42; text-transform: uppercase; font-size: 14px;" href='${HOST}/forgotpassword/${token}'
                                                            target="_blank" rel="noopener">Confirm</a></p>
                                                    <div></div>
                                                   <a href='https://quickwallet.app/' target="_blank">https://quickwallet.app/</a>
                                                </td>
                                            </tr>
                                           
                                        </tbody>
                                    </table>
                                </div>
                            </td>
                        </tr>
                       
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>`, {
        USERNAME: "people",
        PASSWORD: "123123",
        EMAIL: "asDASD",
        HOST_SERVER: 'ASDASD'
    });
    const options = {
        from: adminEmail, // địa chỉ admin email bạn dùng để gửi
        to: to, // địa chỉ gửi đến
        subject: subject, // Tiêu đề của mail
        html: html // Phần nội dung mail mình sẽ dùng html thay vì thuần văn bản thông thường.
    }
    // hàm transporter.sendMail() này sẽ trả về cho chúng ta một Promise
    return transporter.sendMail(options)
}
module.exports = {
    sendMail: sendMail,
    sendMailForgotPassword: sendMailForgotPassword
}