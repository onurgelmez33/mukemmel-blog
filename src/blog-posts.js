var mongoose = require('mongoose');
const db = mongoose.connect('mongodb://admin:05354418476Qa@ds131137.mlab.com:31137/heroku_b0lmkm3s')
const posts = require('../models/posts')
export const getPosts = () => {
  var data;
  posts.find({}, (err, posts) => {
    data = posts;
  });
  return data;
};
