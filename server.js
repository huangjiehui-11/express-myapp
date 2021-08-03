const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log(req.method)
  res.send("Hello World !");
});

app.get('/news', (req, res) => {
  res.send("Hello News !")
})

app.listen(8030, () => {
  console.log('Server is running at http://localhost:8030')
})