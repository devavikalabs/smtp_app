const express = require("express");
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`server started at posrt ${PORT}`);
});
app.get("/", (req, res) => {
    res.json({ message: "hello world" });
})


