const postalRates = require('./rates')
module.exports = calculateRate;

//Calculate rate function using json
function calculateRate(req, res) {
    var weight = Number(req.query.weight);
    var total;
    var adjweight;
    var type = req.query.mailType;
    if((type == "metered" && (weight > 3 && weight < 3.6)) || (type == "stamped" && (weight > 3 && weight < 3.6))) {
        adjweight = 3.5;
        console.log(adjweight);
    } else {
        adjweight = Math.ceil(weight);
        console.log(adjweight);
    }

    switch(type) {
        case "stamped" :   
                total = postalRates.stamped[adjweight];
                ctype = "stamped letter";
                break;
        case "metered" : 
                total = postalRates.metered[adjweight];
                ctype = "metered letter";
                break;
        case "flat" : 
                total = postalRates.flat[adjweight];
                ctype = "large flat envelope";
                break;
        case "package" :
                total = postalRates.package[adjweight];
                ctype = "first-class package";
                break;
    }
        
    const params = {ctype: ctype, weight: adjweight, total: total};
    console.log(params);
    res.render('pages/results', params);
}


