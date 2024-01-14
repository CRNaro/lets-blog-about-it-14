// My 'index.js' is used to define the relationships between all of my models.
const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

// define the relationships
User.hasMany(Post, {
  // User has many Posts
  foreignKey: "user_id",
  onDelete: "RESTRICT",
});
Post.belongsTo(User, {
  // Post belongs to User
  foreignKey: "user_id",
  onDelete: "RESTRICT",
});
Post.hasMany(Comment, {
  // Post has many Comments
  foreignKey: "post_id",
  onDelete: "RESTRICT",
});
Comment.belongsTo(User, {
  // Comment belongs to User
  foreignKey: "user_id",
  onDelete: "RESTRICT",
});
Comment.belongsTo(Post, {
  // Comment belongs to Post
  foreignKey: "post_id",
  onDelete: "RESTRICT",
});

module.exports = { User, Post, Comment };

// Future Development: 
// add 'likes' to Posts and Comments
// add 'dislikes' to Posts and Comments
// add followers/following to Users
// add 'tags' to Posts and Comments
// add 'replies' to Comments
// add 'reactions' to Posts and Comments    
// add 'media' to Comments