// My config.js is responsible for creating a Sequelize instance, 
// and establishing a connection to the database using the sequelize package.

require('dotenv').config(); // using 'require' function to import 'dotenv' module.  This module
                            // loads environment variables from the .env file into process.env.  
                            // 'config()' function is called to load those variables.

const config ={                                 // Defining 'config' object that contains two objects:
    development: {                              // 'development' and 'production' objects.  These objects  
        username: process.env.DB_USER,          // are used to configure db connection settings for different environments.
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host:'localhost',
        dialect:'mysql',
        port: 3306
    },
    production:{
        use_env_variable:'JAWSDB_URL',
        dialect:'mysql'
    }
};
module.exports = config;    // Exporting 'config' object so it can be imported into other files. (part of Node.js)