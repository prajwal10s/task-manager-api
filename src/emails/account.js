const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'prajwal1619@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know if you need any help.`
    })

}

const accountDeletedEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'prajwal1619@gmail.com',
        subject: 'Goodbye',
        text: `Goodbye ${name}. Thank you for being an active user till now. Hope to get your feedback if you experienced any problems while using this application. Hope to see you soon.`
    })
}
module.exports = {
    sendWelcomeEmail,
    accountDeletedEmail
}