const connectToMongo = require("./db");
const express = require("express");
connectToMongo();

const app = express();
const port = 5000;

//Old code
// app.get('/', (req, res) => {
//   res.send('Hello World chal bsdk!')
// })

//New version

app.use(express.json());

//Available Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
