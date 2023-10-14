const packageInfo = require('../../package.json');

const travel = (req, res) => {
    res.render('travel', {title: packageInfo.description + ' - Travel'});
};

module.exports = {
    travel
}