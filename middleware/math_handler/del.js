const { State } = require('../../models');

module.exports = (req, res, next) => {
    let { result, status, newExpression } = State.get();

    if (status === 'invalid' || newExpression) {
        result = '';
    }
    if (result.length > 0) {
        result = result.slice(0, -1);
    }
    State.update({ result, newExpression, status: 'valid' });
    next();
};
