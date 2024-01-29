const { extractErrorMessages } = require('../utils/errorHelper');

module.exports = (err, req, res, next) => {
    const errorMessages = extractErrorMessages(err);

    res.render('404', { errorMessages });
}