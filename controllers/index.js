const { State } = require('../models');

module.exports.render = (req, res, next) => {
    if (req.url !== '/') {
        res.redirect('/');
    } else {
        let { result, status, newExpression } = State.get();
        let result_txt, del_btn_txt;
        if (status === 'valid') {
            if (result) {
                result_txt =
                    result.length <= 100
                        ? result
                        : result.substr(result.length - 14);
            } else {
                result_txt = '0';
            }
        } else {
            result_txt = 'Error';
        }
        del_btn_txt = newExpression ? 'AC' : 'CE';
        res.render('index', { result_txt, del_btn_txt });
    }
};
