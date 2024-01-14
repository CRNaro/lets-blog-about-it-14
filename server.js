// Entry point of my application.  Responsible for starting my server, syncing my models and handling incoming requests.
const express = require("express"); // Importing the 'express' module
const session = require("express-session"); // Importing the 'express-session' module
const routes = require("./controllers"); // Importing my 'controllers' folder
const sequelize = require("./config/connection"); // Importing my 'connection.js' file
const exphbs = require("express-handlebars"); // Importing the 'express-handlebars' module
const SequelizeStore = require("connect-session-sequelize")(session.Store); // Importing the 'connect-session-sequelize' module
const path = require("path"); // Importing the 'path' module

const app = express(); // Instantiating the 'express' module
const PORT = process.env.PORT || 3001; // Setting the 'PORT' to either the environment variable 'PORT' or '3001'

const sess = {
    secret: "Super secret secret",  //Need to connect to dotenv to manage environment variables
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
    }),
};

app.use(session(sess)); // Using the 'session' module

app.use(express.json()); // Using the 'express.json()' method
app.use(express.urlencoded({ extended: true })); // Using the 'express.urlencoded()' method
app.use(express.static(path.join(__dirname, "public"))); // Using the 'express.static()' method

app.use(routes); // Using the 'routes' folder



app.engine("handlebars", exphbs()); // Using the 'exphbs()' method

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
});

sequelize.sync({ force: false }).then(() => {
    // Using the 'sequelize.sync()' method
    app.listen(PORT, () => console.log("Now listening")); // Using the 'app.listen()' method
});