const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/math', calculatePrice)
  //default to https://mysterious-meadow-58024.herokuapp.com/form.html?
  .get('/', function(req, res){
    res.sendfile('form.html', { root: __dirname + "public/form.html" } );
    })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))


function calculatePrice(req, res) {
    var type = req.query.mailType;
    var weight = Number(req.query.weight);
    var total = 10; // just for testing
    //do calculations
    const params = {type: type, weight: weight, total: total};
    res.render('pages/results', params);
}