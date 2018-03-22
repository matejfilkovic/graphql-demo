const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'comment'
  }]
})

const Post = mongoose.model('post', schema)

module.exports = Post
