const express = require("express");
const app = express();
const port = 3000;
const lostarkRouter = require("./routes/lostark");

app.set('view engine', 'ejs')
app.set('views', './views')

app.use(express.static("static"));
app.use(express.json());

app.use("/api", [lostarkRouter]);

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(port, "포트로 서버가 켜졌어요!");
})