const User = require('./model')

async function getUsers() {
  const users = await User.find({})

  return users
}

async function getUser(root, { id }) {
  const user = await User.findById(id)

  return user
}

async function posts(user) {
  const populated = await user.populate('posts').execPopulate()

  return populated.posts || []
}
const resolvers = {
  Query: {
    getUsers,
    getUser
  },

  User: {
    posts
  }
}

module.exports = resolvers
