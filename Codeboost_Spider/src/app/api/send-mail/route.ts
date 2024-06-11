import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SENDER_EMAIL,
        pass: process.env.SENDER_PASS,
      },
    });

    const proof = Buffer.from(
      data.proof.replace(/^data:image\/\w+;base64,/, ""),
      "base64",
    );

    const info = await transporter.sendMail({
      from: process.env.SENDER_EMAIL,
      to: process.env.SENDER_EMAIL,
      subject: "Venda feita 🚀",
      text: `
        Nome: ${data.name}
        Email: ${data.email}
        Telefone: ${data.tel}
        Cep: ${data.cep}
        UF: ${data.uf}
        Cidade: ${data.city}
        Bairro: ${data.road}
        Endereço: ${data.street}, N° ${data.numberHome}
        Complemento: ${data.complement}
      `,
      attachments: [
        {
          filename: "comprovante.png",
          content: proof,
        },
      ],
    });

    return NextResponse.json({
      success: true,
      message: info.response,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error || "Ocorreu um erro ao enviar o e-mail.",
      },
      { status: 500 },
    );
  }
}
