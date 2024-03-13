import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  const { fullname, email, subject, message, phone } = await req.json()

  const transporter = nodemailer.createTransport({
    host: process.env.NEXT_PUBLIC_EMAIL_HOST,
    port: 465,
    secure: true,
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_USER,
      pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
    },
  })

  const mailOptions = {
    from: `${fullname}<${email}>`,
    to: process.env.NEXT_PUBLIC_EMAIL_SEND_TO,
    subject: `Contact via website: ${subject}`,
    text: `Number: ${phone} - ${message}`,
    html: `<div>${message}</div>`,
  }

  try {
    if (fullname && email && subject && message)
      await transporter.sendMail(mailOptions)
    return new Response(JSON.stringify({ messageSent: true }), { status: 200 })
  } catch (error) {
    console.error(`Error sending message: ${error}`)
    return new Response(JSON.stringify({ messageSent: false }), { status: 500 })
  }
}
