var mongoose = require('mongoose');
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