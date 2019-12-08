const posts = require('../../../models/posts')
export default async (req, res) => {
  console.log(posts.find({ _id: req.query.postId }));
  await posts.find({ _id: req.query.postId }).deleteOne();
};
