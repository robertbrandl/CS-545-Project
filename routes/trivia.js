import {Router} from 'express';
import {triviaData} from '../data/index.js';
const router = Router();
let questions = [
    [
        "Why do some states have more Representatives in Congress than other states?",
        "Geographical size of the state",
        "State's Location",
        "State's population",
        "Date of Statehood"
    ],
    [
        "Which one right or freedom is not in the First Amendment to the U.S. Constitution?",
        "Freedom of the press",
        "Freedom of Religion",
        "Right to petition the government",
        "Right to vote"
    ],
    [
        "For how many years is a U.S. senator elected – that is, how many years are there in one full term of office for a U.S. senator?",
        "1 year",
        "6 years",
        "It is a lifetime appointment",
        "30 years"
    ],
    [
        "What is a responsibility that can only be fulfilled by American citizens?",
        "Serve on a jury",
        "Pay federal income tax",
        "Put out the flag",
        "Follow all laws"
    ],
    [
        "Who was the first President of the United States?",
        "Thomas Jefferson",
        "James Madison",
        "George Washington",
        "John Adams"
    ],
    [
        "What are the first 10 amendments of the U.S. Constitution collectively called?",
        "The Declaration of Independence",
        "The Bill of Rights",
        "The Core Rights Treaty",
        'The Federalist Papers'
    ],
    [
        "At what age can men register for Selective Service?",
        "23",
        "16",
        "18",
        "15"
    ],
    [
        "Which of the following is not a position in the President's Cabinet?",
        "Secretary of the Interior",
        "Secretary of Energy",
        "Secretary of Commerce",
        "Secretary of Military Affairs"
    ],
    [
        "What year was the Declaration of Independence adopted?",
        "1789",
        "1803",
        "1776",
        "1769"
    ],
    [
        "Which of the following best describes the economic practice of the United States?",
        "Capitalism",
        "Mercantilism",
        "Trickle-Down Economics",
        "Separatism"
    ]

];
questions = questions.map((questionArray, index) => {
    const questionNumber = index + 1;
    questionArray.unshift(questionNumber);
    return questionArray;
});
router.route('').get(async (req, res) => {
    //questions array: array of arrays (each element array has 5 elements: question, answer choice 1, 2, 3, 4)
    
    if (req.session.user){
        return res.render('trivia', {title: "Civics Trivia Quiz", notLoggedIn: false, firstName: req.session.user.firstName, questions: questions});
    }
    else{
        return res.render('trivia', {title: "Civics Trivia Quiz", notLoggedIn: true, questions: questions});
    }
})
.post(async (req, res) => {
    //array of arrays (each element array has two elements: the correct answer and the category the question belongs to)
    let correctAns = [
        ["State's population", "System of Government"],
        ["Right to vote", "Democracy"],
        ["6 years", "System of Government"],
        ["Serve on a jury", "Rights/Responsibilites"],
        ["George Washington", "History"],
        ["The Bill of Rights", "Democracy"],
        ["18", "Rights/Responsibilites"],
        ["Secretary of Military Affairs", "System of Government"],
        ["1776", "History"],
        ["Capitalism", "Democracy"]
    ];
    let numCorrect = 0;
    let incorrectCats = [];//here we can store the categories for the wrong questions and include links at the end of the quiz
    const quizData = req.body;
    if (!quizData || Object.keys(quizData).length !== 10) {
        if (req.session.user){
            return res
            .status(400)
            .render('error',{code:400, errorText: 'Must complete all quiz questions', notLoggedIn: false, firstName: req.session.user.firstName});
        }else{
            return res
            .status(400)
            .render('error',{code:400, errorText: 'Must complete all quiz questions', notLoggedIn: true});
        }
    }
    console.log(quizData)
    let ind = 0;
    for (let key in quizData) {
        if (quizData[key] === correctAns[ind][0]){
            numCorrect++;
        }
        else{
            incorrectCats.push(correctAns[ind][1]);
        }
        ind++;
    }
    console.log(numCorrect);
    incorrectCats.filter((value, index, self) => self.indexOf(value) === index);
    if (req.session.user){
        await triviaData.addScore(req.session.user.emailAddress, numCorrect);
        return res.render('trivia', {title: "Civics Trivia Quiz", notLoggedIn: false, firstName: req.session.user.firstName, questions: questions, selectedAnswers: correctAns})
    }
    else{
        return res.render('trivia', {title: "Civics Trivia Quiz", notLoggedIn: true, questions: questions, selectedAnswers: correctAns})
    }

});
export default router;