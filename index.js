const express = require('express')


const app = express();

app.get('/' , (req, res) => {
  res.send('<h1> hello</h1>')
})

app.get('/test' , (req, res) => {
  res.send('<h1> test</h1>')
})

app.get('/test/1' , (req, res) => {
  res.send('<h1> test 1</h1>')
})

const port = 8000
app.listen(port , ()=> { console.log("project running http://localhost:"+port)})