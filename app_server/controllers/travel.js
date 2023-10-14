const packageInfo = require('../../package.json');
const fs = require('fs');
const trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

const travel = (req, res) => {
    pageTitle = packageInfo.description + ' - Travel';
    res.render('travel', {title: pageTitle, trips});
};

module.exports = {
    travel
}