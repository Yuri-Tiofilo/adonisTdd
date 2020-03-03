'use strict'

const User = use('App/Models/User');

class SessionController {

  async store({request, response, auth}) {
    try {
      const {email,password} = request.all()

      const tokenUser = await auth.attempt(email, password)

      const user = await User.findBy('email', email)

      const {token} = tokenUser;

      const {id, username} = user

      const data = {
        id,
        username,
        email,
        token
      }

      return data

    } catch(err) {
      return response.status(err.status).send({error: {message: 'Login errado'}})
    }

  }
}

module.exports = SessionController
