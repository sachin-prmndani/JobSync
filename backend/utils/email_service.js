import nodemailer from 'nodemailer'
import ENV from '../ENV.js'
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: ENV.EMAIL_USER,
        pass: ENV.EMAIL_PASS,
    },
})
export const sendEmail = async ({ to, subject, text }) => {
    try {
        await transporter.sendMail({
            from: `"Trackly" <${process.env.EMAIL_USER}>`,
            to,
            subject,
            text,
        })
    } catch (error) {
        console.log(error)
    }
}
