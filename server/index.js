import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const distPath = path.join(__dirname, '..', 'dist');

const mailHost = process.env.MAIL_HOST;
const mailPort = process.env.MAIL_PORT ? Number(process.env.MAIL_PORT) : undefined;
const mailUser = process.env.MAIL_USER;
const mailPass = process.env.MAIL_PASS;
const mailFrom = process.env.MAIL_FROM || `LIAM6 <no-reply@liam6.com>`;
const mailTo = process.env.MAIL_TO || 'mithunursmithun@gmail.com';

let transporter;
if (mailHost && mailPort && mailUser && mailPass) {
  transporter = nodemailer.createTransport({
    host: mailHost,
    port: mailPort,
    secure: mailPort === 465,
    auth: {
      user: mailUser,
      pass: mailPass,
    },
  });
  console.log('SMTP transporter configured successfully.');
} else {
  console.warn('SMTP settings are not configured. Backend will start, but contact form email sending will fail until MAIL_HOST, MAIL_PORT, MAIL_USER, and MAIL_PASS are set in .env.');
}

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.post('/api/contact', async (req, res) => {
  const { name, company, email, product, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  if (!transporter) {
    return res.status(500).json({ error: 'SMTP settings are not configured. Please set MAIL_HOST, MAIL_PORT, MAIL_USER, and MAIL_PASS.' });
  }

  const mailSubject = `LIAM6 enquiry from ${name}`;
  const textBody = `Name: ${name}\nCompany: ${company || 'N/A'}\nEmail: ${email}\nProduct: ${product || 'N/A'}\nRequirements:\n${message}`;
  const htmlBody = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Company:</strong> ${company || 'N/A'}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Product:</strong> ${product || 'N/A'}</p>
    <p><strong>Requirements:</strong></p>
    <p>${message.replace(/\n/g, '<br/>')}</p>
  `;

  try {
    await transporter.sendMail({
      from: mailFrom,
      to: mailTo,
      subject: mailSubject,
      text: textBody,
      html: htmlBody,
      replyTo: email,
    });

    return res.json({ success: true, message: 'Contact enquiry sent successfully.' });
  } catch (error) {
    console.error('Email send failed:', error);
    return res.status(500).json({ error: 'Failed to send email. Please check SMTP configuration.' });
  }
});

// Serve the frontend in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(distPath));
  app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`Backend API listening on http://localhost:${port}`);
});
