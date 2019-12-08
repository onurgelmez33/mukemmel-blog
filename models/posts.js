var mongoose = require('mongoose');
const db = mongoose.connect('mongodb://root:147852Qqq@ds131137.mlab.com:31137/heroku_b0lmkm3s')
const PostsSchema = new mongoose.Schema({
    _id:{
        type: String,
    },
    title: {
        type: String,
    },
    slug: {
        type: String,
    },
    details: {
        type: String,
    },
    short: {
        type: String,
    },
    date: {
        type: String,
    },
    user: {
        type: String,
    },
    image: {
        type: String,
    }
});

module.exports = mongoose.models.posts || mongoose.model('posts', PostsSchema);