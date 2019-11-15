const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const app = express();
const calculateRate = (require('./files/form.js'))

app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.get('/getRate', calculateRate)

app.get('/', function(req, res) {
    res.redirect('/form.html');
})

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))

