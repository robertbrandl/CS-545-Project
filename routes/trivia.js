import {Router} from 'express';
const router = Router();
router.route('').get(async (req, res) => {
    //questions array: array of arrays (each element array has 5 elements: question, answer choice 1, 2, 3, 4)
    let questions = [];
    if (req.session.user){
        return res.render('trivia', {title: "Civics Trivia Quiz", notLoggedIn: false, firstName: req.session.user.firstName, questions: questions});
    }
    else{
        return res.render('trivia', {title: "Civics Trivia Quiz", notLoggedIn: true, questions: questions});
    }
})
.post(async (req, res) => {
    let correctAns = [];


});
export default router;