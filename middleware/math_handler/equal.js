const { State } = require('../../models');

module.exports = (req, res, next) => {
    const { result, status } = State.get();
    try {
        if (status === 'invalid') throw new Error();
        const expression = result
            .replace(/(\d)(\()/g, '$1*$2')
            .replace(/(\))(\d)/g, '$1*$2')
            .replace(/(\))(\()/g, '$1*$2')
            .replace(/x/g, '*')
            .replace(/÷/g, '/')
            .replace(/%/g, '/100');
        const value = new Function('return ' + expression)();
        State.update({
            result: `${parseFloat(value.toPrecision(15), 10)}`,
            newExpression: true,
            status: 'valid',
        });
    } catch (err) {
        State.update({ result: '', newExpression: true, status: 'invalid' });
    } finally {
        next();
    }
};
