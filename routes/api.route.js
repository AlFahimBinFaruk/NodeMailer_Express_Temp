const router = require("express").Router();
const transporter = require("../config/emailConfig");
router.get("/send-mail", async (req, res, next) => {
  try {
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Fred Foo 👻" <foo@example.com>', // sender address
      to: "fah8m88@gmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Env var added</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    res.status(200).json({ msg: info.messageId });
  } catch (error) {
    console.log("error =>", error);
    res.status(500).json(error);
  }
});

module.exports = router;
