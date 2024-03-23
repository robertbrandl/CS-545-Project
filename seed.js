import {dbConnection, closeConnection} from './config/mongoConnection.js';
import users from './data/users.js';
const db = await dbConnection();
await db.dropDatabase();


//Adds sample user information into the database
let user1 = await users.registerUser("Robert", "Brandl", "robert@gmail.com", "User1234!");
let u1id = await users.getUser("robert@gmail.com")
u1id = u1id._id.toString();
let user2 = await users.registerUser("Krystal", "Hong", "krystal@gmail.com", "User3456!");
let u2id = await users.getUser("krystal@gmail.com")
u2id = u2id._id.toString();


console.log('Done seeding database');
await closeConnection();