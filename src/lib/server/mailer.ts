// import nodemailer from "nodemailer";
// import { BREVO_KEY, BREVO_USER } from '$env/static/private'

// const transporter = nodemailer.createTransport({
//   host: "smtp-relay.brevo.com",
//   port: 587,
//   auth: {
//     user: BREVO_USER,
//     pass: BREVO_KEY
//   }
// })

// type Mail = {
//     name: string,
//     email: string,
//     message: string
// }

// export async function mailer(mail: Mail) {
//   const info = await transporter.sendMail({
//     from: `${mail.name} <${mail.email}>`,
//     to: 'contact@peterkudelas.eu',
//     subject: 'Contacted from website',
//     html: `${mail.message}`
//   })

//   console.log("message sent:" + info.messageId)
//   return info.messageId
// }
