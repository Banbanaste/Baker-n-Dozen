const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    type: "OAuth2",
    user: "contact@cavemanconsulting.co",
    refreshToken: process.env.API_REFRESH_TOKEN,
    accessToken: process.env.API_ACCESS_TOKEN,
    clientId: process.env.API_CLIENT_ID,
    clientSecret: process.env.API_CLIENT_SECRET,
  },
});

const send = ({ email, name, text }) => {
  const from = name && email ? `${name} <${email}>` : `${name || email}`;
  const message = {
    from,
    to: "contact@cavemanconsulting.co",
    subject: `New message from ${from}`,
    text: `name: ${name}
    email: ${email}
    body: ${text}`,
    replyTo: from,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    );
  });
};

module.exports = send;
