const { State } = require('../../models');

module.exports = (req, res, next) => {
    let { result, status, newExpression } = State.get();
    const { val } = req.params;
    if (status == 'invalid' || newExpression) {
        result = '';
    }
    newExpression = false;
    if (result === '0' && val === 0) {
        return;
    }
    result += val;
    State.update({ result, newExpression, status: 'valid' });
    next();
};
