const { State } = require('../../models');

module.exports = (req, res, next) => {
    let { result, status, newExpression } = State.get();
    newExpression = false;
    if (status === 'invalid' || result.length === 0) {
        result = '-';
    } else {
        const last = result.charAt(result.length - 1);
        if (last === '-') return;
        if (last === '+') {
            result = result.replace(/+$/, '-');
        } else {
            result += '-';
        }
    }
    State.update({ result, newExpression, status: 'valid' });
    next();
};
