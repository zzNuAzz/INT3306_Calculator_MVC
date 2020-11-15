const { State } = require('../../models');

module.exports = (req, res, next) => {
    let { result, status, newExpression } = State.get();
    if (status == 'invalid' || newExpression) {
        result = '';
    }
    result += '(';
    newExpression = false;
    State.update({ result, newExpression, status: 'valid' });
    next();
};
