const { State } = require('../../models');

module.exports = (req, res, next) => {
    let { result, status, newExpression } = State.get();
    newExpression = false;
    if (status === 'invalid' || result.length === 0) {
        result = '0x';
    } else {
        if (/[\+\-x÷]$/g.test(result)) {
            result = result.replace(/.$/, 'x');
        } else {
            result += 'x';
        }
    }
    State.update({ result, newExpression, status: 'valid' });
    next();
};
