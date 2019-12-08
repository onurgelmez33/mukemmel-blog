const posts = require('../../../models/posts')
export default async (req, res) => {
  posts.findByIdAndRemove(req.query.postId, (err, response) => {
    res.json("deneme");
  });
};
