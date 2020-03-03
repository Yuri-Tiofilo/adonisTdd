'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with posts
 */

const Post = use('App/Models/Post')

class PostController {

  async index ({ request, response, view }) {
    const posts = await Post.all()

    return posts
  }


  async create ({ request, response, view }) {
  }


  async store ({ request, response, auth }) {

    const data = request.all(['title', 'content'])

    const post = await Post.create({...data, user_id: auth.user.id})


    await post.load('user')

    return post
  }


  async show ({ params, request, response, view }) {
  }


  async edit ({ params, request, response, view }) {
  }


  async update ({ params, request, response }) {
  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = PostController
