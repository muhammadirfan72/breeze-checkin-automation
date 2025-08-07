const nodemailer = require('nodemailer');
const fs = require('fs');

const reportPath = './playwright-report/index.html';
if (!fs.existsSync(reportPath)) {
  console.error('Report not found at', reportPath);
  process.exit(1);
}

const htmlContent = fs.readFileSync(reportPath, 'utf8');
const transporter = nodemailer.createTransport({
  host: 'smtp.office365.com',
  port: 587,
  secure: false, // Use TLS
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false, // Optional: disable cert check (if behind corporate firewall)
  },
});


const mailOptions = {
  from: process.env.EMAIL_USERNAME,
  to: process.env.EMAIL_RECIPIENTS,
  subject: 'Playwright Test Report',
  html: htmlContent,
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.error('Email failed:', error);
    process.exit(1);
  } else {
    console.log('Email sent:', info.response);
  }
});
