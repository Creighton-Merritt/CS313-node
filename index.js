const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const app = express();


app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.get('/math', calculatePrice)


function calculatePrice(req, res) {
    var type = req.query.mailType;
    var weight = Number(req.query.weight);
    var total = 10; // just for testing
    //do calculations
    const params = {type: type, weight: weight, total: total};
    res.render('pages/results', params);
}

app.get('/', function(req, res) {
    res.status(200).sendFile('form.html', (path.join(_dirname, '/public/')))
});
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))

