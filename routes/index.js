import userRoutes from "./users.js";
import homeRoute from "./home.js"
import triviaRoutes from "./trivia.js"
import bankRoutes from "./bank.js"

const constructorMethod = (app) => {
    app.use('/', homeRoute);
    app.use('/user', userRoutes);
    app.use('/trivia', triviaRoutes);
    app.use('/bank', bankRoutes);
    app.use('*', (req, res) => {
        res.redirect('/');
      });
}
export default constructorMethod;