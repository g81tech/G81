import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export const runtime = 'nodejs'

const transporter = nodemailer.createTransport({
  host: process.env.NEXT_PUBLIC_EMAIL_HOST,
  port: 465,
  secure: true,
  auth: {
    user: process.env.NEXT_PUBLIC_EMAIL_USER,
    pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
  },
})

export async function GET(
  req: NextRequest,
  context: {
    params: Promise<{ locale: string }>
  }
) {
  try {
    const { locale } = await context.params

    console.log('Locale:', locale)

    const { searchParams } = new URL(req.url)

    const code = searchParams.get('code')

    if (!code) {
      return NextResponse.json(
        {
          error: 'Code não recebido',
        },
        { status: 400 }
      )
    }

    await transporter.sendMail({
      from: `"Cora Callback" <${process.env.NEXT_PUBLIC_EMAIL_USER}>`,
      to: process.env.NEXT_PUBLIC_EMAIL_SEND_TO,
      subject: 'Novo callback recebido do Cora',
      text: `Locale: ${locale}\nCode: ${code}`,
    })

    return NextResponse.json({
      success: true,
    })
  } catch (error: any) {
    console.error(error)

    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 500 }
    )
  }
}