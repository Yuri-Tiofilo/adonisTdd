const {test, trait, afterEach} = use('Test/Suite')('User registration');

trait('Test/ApiClient')

const User = use('App/Models/User')

test('Create User', async({client, assert}) => {
  const response = await client.post('/users').send({
    username: 'Yurin',
    email: 'yuri@innca.com.br',
    password: '12345'
  }).end()

  response.assertStatus(200)

  response.assertJSONSubset({
    username: 'Yurin',
    email: 'yuri@innca.com.br'
  })

  const user = await User.find(1)

  assert.equal(user.toJSON().email, 'yuri@innca.com.br')
})

test('not create a user', async({client, assert}) => {

  const response = await client.post('/users').end()

  response.assertStatus(500)

  const user = await User.findBy('email', 'yuri@incca.com.br')

  assert.isNull(user)
})
