import {Router} from 'express';
import {bankData} from '../data/index.js';
import bank from '../data/bank.js';
const router = Router();

router.route('').get(async (req, res) => {
    //code here for GET will render the home handlebars file
    if (req.session.user){
        return res.render('bank', {title: "Knowledge Bank", notLoggedIn: false, firstName: req.session.user.firstName, democracy: bankData.democracyFacts, system: bankData.systemFacts, citizen: bankData.citizenFacts, history: bankData.historyFacts});
    }
    else{
        return res.render('bank', {title: "Knowledge Bank", notLoggedIn: true,  democracy: bankData.democracyFacts, system: bank.systemFacts, citizen: bankData.citizenFacts, history: bankData.historyFacts});
    }
});
export default router;