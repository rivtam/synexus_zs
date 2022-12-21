const express = require('express');
const bodyParser = require('body-parser');
const request = require('request')

const app = express();


app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
   res.sendFile(__dirname + '/signup.html')
})

app.post('/retry', (req, res) => {
   console.log(req.body)
   // res.sendFile(__dirname + '/success.html')
   // res.sendFile(__dirname + '/failure.html')


   res.redirect('/')
})


app.post('/', (req, res) => {
   console.log(req.body)
   // res.sendFile(__dirname + '/success.html')
   res.sendFile(__dirname + '/failure.html')

})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log('Server started on port 3000.'))