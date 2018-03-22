const Post = require('./model')

async function getPosts() {
  const posts = await Post.find({})

  return posts
}

const resolvers = {
  Query: {
    getPosts
  }
}

module.exports = resolvers
