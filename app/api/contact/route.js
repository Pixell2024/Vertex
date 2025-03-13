// import nodemailer from "nodemailer";
// require('dotenv').config();

// export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ message: "Method not allowed" });
//   }

//   const { firstName, email, message } = req.body;

//   // Nodemailer transporter setup
//   const transporter = nodemailer.createTransport({
//     service: "gmail", // Or use "smtp.your-email-provider.com"
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//   });

//   try {
//     // **1️⃣ Send email to Vivek (You)**
//     await transporter.sendMail({
//       from: `"${firstName}" <${email}>`,
//       to: process.env.EMAIL_USER, // Your email
//       subject: "New Contact Form Submission",
//       text: `Name: ${firstName}\nEmail: ${email}\nMessage: ${message}`,
//     });

//     // **2️⃣ Send Auto-reply to User**
//     await transporter.sendMail({
//       from: process.env.EMAIL_USER, // Your email
//       to: email, // Sender's email
//       subject: "Thanks for Contacting Us!",
//       text: `Hello ${firstName},\n\nThank you for reaching out! We received your message:\n"${message}"\n\nWe will get back to you soon.\n\nBest regards,\nVivek`,
//     });

//     return res.status(200).json({ message: "Email sent successfully!" });
//   } catch (error) {
//     return res.status(500).json({ message: "Error sending email", error });
//   }
// }

import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { firstName, email, message } = await req.json();

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Gmail App Password
      },
    });

    // **1️⃣ Send email to Vivek**
    await transporter.sendMail({
      from: `"${firstName}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: "New Contact Form Submission",
      text: `Name: ${firstName}\nEmail: ${email}\nMessage: ${message}`,
    });

    // **2️⃣ Send Auto-reply to User**
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thanks for Contacting Us!",
      text: `Hello ${firstName},\n\nThank you for reaching out! We received your message:\n"${message}"\n\nWe will get back to you soon.\n\nBest regards,\nVivek`,
    });

    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ message: "Error sending email", error }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
