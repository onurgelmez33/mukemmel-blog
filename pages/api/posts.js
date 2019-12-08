const posts = require('../../models/posts')

export default async (req, res) => {
  posts.find({}, (err, posts) => {
    res.json(posts);
  });
};
