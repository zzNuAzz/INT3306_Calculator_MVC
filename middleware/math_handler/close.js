const { State } = require('../../models');

const countOpen = expression => (expression.match(/\(/g) || []).length;
const countClose = expression => (expression.match(/\)/g) || []).length;

module.exports = (req, res, next) => {
    let { result, status, newExpression } = State.get();
    if (status === 'invalid') {
        result = '';
    }
    const open = countOpen(result);
    const close = countClose(result);
    if (open === close) return;
    result += ')';
    newExpression = false;
    State.update({ result, newExpression, status: 'valid' });
    next();
};
