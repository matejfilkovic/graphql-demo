const getUser = () => {
  return {
    firstName: 'Matej',
    lastName: 'Filkovic'
  }
}

const userResolvers = {
  Query: {
    getUser
  }
}

module.exports = userResolvers
