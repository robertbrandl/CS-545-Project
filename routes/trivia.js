import {Router} from 'express';
import {triviaData} from '../data/index.js';
const router = Router();
let questions = [
    [
        "Why do some states have more Representatives in Congress than other states?",
        "The U.S. System of Government",
        "Geographical size of the state",
        "State's Location",
        "State's population",
        "Date of Statehood"
    ],
    [
        "Which one right or freedom is not in the First Amendment to the U.S. Constitution?",
        "Understanding American Democracy",
        "Freedom of the press",
        "Freedom of Religion",
        "Right to petition the government",
        "Right to vote"
    ],
    [
        "For how many years is a U.S. senator elected – that is, how many years are there in one full term of office for a U.S. senator?",
        "The U.S. System of Government",
        "1 year",
        "6 years",
        "It is a lifetime appointment",
        "30 years"
    ],
    [
        "What is a responsibility that can only be fulfilled by American citizens?",
        "U.S. Citizen Rights and Responsibilities",
        "Serve on a jury",
        "Pay federal income tax",
        "Put out the flag",
        "Follow all laws"
    ],
    [
        "Who was the first President of the United States?",
        "American History",
        "Thomas Jefferson",
        "James Madison",
        "George Washington",
        "John Adams"
    ],
    [
        "What are the first 10 amendments of the U.S. Constitution collectively called?",
        "Understanding American Democracy",
        "The Declaration of Independence",
        "The Bill of Rights",
        "The Core Rights Treaty",
        'The Federalist Papers'
    ],
    [
        "At what age can men register for Selective Service?",
        "U.S. Citizen Rights and Responsibilities",
        "23",
        "16",
        "18",
        "15"
    ],
    [
        "Which of the following is not a position in the President's Cabinet?",
        "The U.S. System of Government",
        "Secretary of the Interior",
        "Secretary of Energy",
        "Secretary of Commerce",
        "Secretary of Military Affairs"
    ],
    [
        "What year was the Declaration of Independence adopted?",
        "American History",
        "1789",
        "1803",
        "1776",
        "1769"
    ],
    [
        "Which of the following best describes the economic practice of the United States?",
        "Understanding American Democracy",
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
        ["State's population", "The U.S. System of Government"],
        ["Right to vote", "Understanding American Democracy"],
        ["6 years", "The U.S. System of Government"],
        ["Serve on a jury", "U.S. Citizen Rights and Responsibilities"],
        ["George Washington", "American History"],
        ["The Bill of Rights", "Understanding American Democracy"],
        ["18", "U.S. Citizen Rights and Responsibilities"],
        ["Secretary of Military Affairs", "The U.S. System of Government"],
        ["1776", "American History"],
        ["Capitalism", "Understanding American Democracy"]
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
    let ind = 0;
    for (let key in quizData) {
        if (quizData[key] === correctAns[ind][0]){
            numCorrect++;
        }
        else{
            incorrectCats.push([correctAns[ind][1], correctAns[ind][1].replace(/\s+/g, '-')]);
        }
        ind++;
    }
    incorrectCats = incorrectCats.filter((value, index, self) => {
        const currentValue = value[0]; 
        return self.findIndex((arr) => arr[0] === currentValue) === index;
    });
    
    let modqs = [];
    let count = 0;
    for (let x of questions){
        let newEl = x.slice(0,3);
        const key = Object.keys(quizData)[count];
        const value = quizData[key];
        for (let j = 3; j <= 6; j++) {
            if (x[j] === correctAns[count][0]){
                if (x[j] === value){
                    newEl.push([x[j], true, true]);
                }
                else{
                    newEl.push([x[j], true, false]);
                }
            }
            else{
                if (x[j] === value){
                    newEl.push([x[j], false, true]);
                }
                else{
                    newEl.push([x[j], false, false]);
                }
            }
        }
        modqs.push(newEl)
        count++;
    }
    const incorrectCatNames = incorrectCats.map(cat => cat[0]);
    const commaSeparatedArray = incorrectCatNames.join(', ');
    if (req.session.user){
        const currentDate = new Date();
        const formattedDate = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;
        const formattedTime = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
        await triviaData.addScore(req.session.user.emailAddress, numCorrect, formattedDate + " " + formattedTime, commaSeparatedArray);
        return res.render('trivia', {title: "Civics Trivia Quiz", notLoggedIn: false, firstName: req.session.user.firstName, questions: questions, submitted: true, score: numCorrect, modqs, badCategories: incorrectCats})
    }
    else{
        return res.render('trivia', {title: "Civics Trivia Quiz", notLoggedIn: true, questions: questions, submitted: true, score: numCorrect, modqs, badCategories: incorrectCats})
    }

});
export default router;