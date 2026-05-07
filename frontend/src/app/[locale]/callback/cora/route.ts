import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
	host: process.env.EMAIL_HOST,
	port: 465,
	secure: true,
	auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASS,
	},
});

export async function GET(req: NextRequest) {
	try {
		const { searchParams } = new URL(req.url);

		const code = searchParams.get("code");

		if (!code) {
			return NextResponse.json(
				{
					error: "Code não recebido",
				},
				{ status: 400 },
			);
		}

		await transporter.sendMail({
			from: `"Cora Callback" <${process.env.EMAIL_USER}>`,
			to: process.env.EMAIL_SEND_TO,
			subject: "Novo callback recebido do Cora",
			text: `Code recebido: ${code}`,
		});

		return NextResponse.json(
			{
				success: true,
			},
			{ status: 200 },
		);
	} catch (error) {
		console.error(error);

		return NextResponse.json(
			{
				error: "Erro interno",
			},
			{ status: 500 },
		);
	}
}