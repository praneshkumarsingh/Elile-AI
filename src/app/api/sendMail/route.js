import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.json();
    console.log("Received data:", data);
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: data.email,
      to: process.env.MAIL_RECEIVER_ADDRESS,
      subject: `Contact Form: ${data.firstName} ${data.lastName}`,
      text: `
        Name: ${data.firstName} ${data.lastName}
        Email: ${data.email}
        Phone: ${data.phone}
        Message: ${data.message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
}
