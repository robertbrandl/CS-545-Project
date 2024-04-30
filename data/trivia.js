import {users} from '../config/mongoCollections.js';
import * as validation from "../validation.js";
import validator from 'email-validator';

const addScore = async (emailAddress, score, date, cats) => {
    let email = validation.checkString(emailAddress);
    email = email.toLowerCase();
    if (validator.validate(email) === false){throw "Invalid email"}
    const userCollection = await users();
    let foundUser = await userCollection.findOne({ emailAddress: email });

    if (!foundUser) {
        throw "User not found";
    }

    let updatedScores = foundUser.quizScores;
    updatedScores.push([score, date, cats]); 
    await userCollection.updateOne({ emailAddress: email }, { $set: { quizScores: updatedScores } });
    return await userCollection.findOne({ emailAddress: email });
}


export default {addScore};