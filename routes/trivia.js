import {Router} from 'express';
const router = Router();
router.route('').get(async (req, res) => {
    //code here for GET will render the home handlebars file
    if (req.session.user){
        return res.render('trivia', {title: "Civics Trivia Quiz", notLoggedIn: false, firstName: req.session.user.firstName});
    }
    else{
        return res.render('trivia', {title: "Civica Trivia Quiz", notLoggedIn: true});
    }
})
.post(async (req, res) => {

});
export default router;