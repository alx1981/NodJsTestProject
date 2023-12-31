const UserSymbol = require("../../models/mysql/user-symbol")
const SymbolValue = require('../../models/mongo/symbol-value')

const addSymbol = async (req, res, next) => {
    try {
        const userSymbol = new UserSymbol(req.pool);
        await userSymbol.create({
            userId: 123,
            symbol: req.body.symbol 
        });
        res.redirect('/dashboard');
    } catch (err) {
        next(err);
    } 
}

const dashboard = async (req, res, next) => {
    try {
        const userSymbol = new UserSymbol(req.pool);
        const userSymbols = await userSymbol.getForUser({userId: 123});

        const promises = userSymbols.map((userSymbol) => SymbolValue.findOne({symbol: userSymbol.symbol}).sort({when: -1}).limit(1))
        const symbolValues = await Promise.all(promises);
        res.render('dashboard', {
            username: 'shlomo',
            userSymbols,
            symbolValues,
        });
    } catch (err) {
        next(err);
    }
}

module.exports = {
    addSymbol,
    dashboard
};