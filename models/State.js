const state = {
    result: '0',
    status: 'valid',
    newExpression: true,
};

module.exports.update = newState => {
    Object.assign(state, newState);
};

module.exports.get = () => state;
