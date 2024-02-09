// homeRoutes is used to handle HTTP requests for the website's homepage.  
// It is used to render the homepage and any other static pages.  
// It is also used to handle any other requests that are not handled by the apiRoutes.  
const router = require("express").Router(); // Importing the 'express' module and using the 'Router()' method
const { Post, User, Comment } = require("../models"); // Importing the 'Post', 'User', and 'Comment' models

User.hasMany(Post, { // A user can have many posts
    foreignKey: "user_id", // The foreign key is 'user_id'
    onDelete: "CASCADE", // If the user is deleted, then delete the post
});

Post.belongsTo(User, { // A post belongs to a user
    foreignKey: "user_id", // The foreign key is 'user_id'
    onDelete: "CASCADE", // If the post is deleted, then delete the user
});

Comment.belongsTo(User, { // A comment belongs to a user
    foreignKey: "user_id", // The foreign key is 'user_id'
    onDelete: "CASCADE", // If the comment is deleted, then delete the user
});

module.exports = {User, Post, Comment}; // Exporting the 'User', 'Post', and 'Comment' models