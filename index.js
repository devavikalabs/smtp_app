const express = require("express");
const nodemailer = require("nodemailer");
const app = express();

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "dev.avikalabs@gmail.com",
        pass: "dwww rqpt lafe ylds",
    }

});


app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`server started at posrt ${PORT}`);
});
app.get("/", (req, res) => {
    res.json({ message: "hello world" });
})

app.post('send/mail', async (req, res) => {
    const data = req.body;
    const info = await transporter.sendMail({
        from: "LMS Product dev.avikalabs@gmail.com",
        ...data
    });
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    res.json(info);
});


