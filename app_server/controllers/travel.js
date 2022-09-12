const fs = require('fs');
const trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

/*Get travel view*/
const travel = (req, res) => {
    res.render('travel', {title: 'Travelr Getaways', trips});
};

module.exports = {
    travel
};