import userRoutes from "./users.js";
import homeRoute from "./home.js"
const constructorMethod = (app) => {
    app.use('/', homeRoute);
    app.use('/user', userRoutes);
    app.use('*', (req, res) => {
        res.redirect('/');
      });
}
export default constructorMethod;