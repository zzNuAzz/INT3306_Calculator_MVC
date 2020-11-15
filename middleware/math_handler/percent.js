const { State } = require('../../models');

module.exports = (req, res, next) => {
    let { result, status, newExpression } = State.get();
    newExpression = false;
    if (status === 'invalid' || result.length === 0) {
        result = '0%';
    } else {
        if (/[\+\-x÷]$/g.test(result)) {
            result = result.replace(/.$/g, '%');
        } else {
            result += '%';
        }
    }
    State.update({ result, newExpression, status: 'valid' });
    next();
};
