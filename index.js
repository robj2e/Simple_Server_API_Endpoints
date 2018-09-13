const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const port = 8083
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.all('*', (req, res) => {
  let path = req.path

  if (path) {
    console.log(path)
  }

  if (req.body) {
    console.log(req.body)
  }

  res.send({success: true})
})

app.listen(port, _ => {
  console.log(`Listening on port: ${port}`)
})
