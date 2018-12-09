var express = require('express')
var app = express()

app.use(express.static('public'))
app.listen(8080, 'localhost', function (err) {
  if (!err) {
    console.log('listening at http://localhost:8080')
  } else {
    console.log(err)
  }
})
