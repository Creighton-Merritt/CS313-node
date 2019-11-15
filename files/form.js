//const postalRates = require('./rates');

//Form validation because stamped and metered letter rates only go up to 3.5 oz.
function valWeight () {
    var type = document.getElementById("type").value;
    var weight =  document.getElementById("weight");
    if (type == "metered letter" || type == "stamped letter") {
     //  weight.removeAttribute("max");
       weight.setAttribute("max", "3.5");
       var max = weight.getAttribute('max').value;
        console.log("type", type, "max", max);
    } else {
        weight.setAttribute("max", "13");
    }

}

//Calculate rate function using json
function calculateRate(req, res) {
    var type = req.query.mailType;
    var weight = Number(req.query.weight);
    const params = {};
    
    //do calculations
    params = {type: type, weight: weight, total: total};
    res.render('pages/results', params);
}