const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const mailer = require("./mailer");

app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.json());

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.post("/api/contact", (req, res) => {
    const { email, name, text, phone, companyName } = req.body;
    mailer({ email, name, text, phone, companyName })
      .then(() => {
        console.log("SUCCESS");
        res.send("SUCCESS");
      })
      .catch((err) => {
        console.log("ERORR --> ", err);
        res.send(err);
      });
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log("> Read on http://localhost:3000");
  });
});
