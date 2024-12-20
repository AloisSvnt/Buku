import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import { registerValidator } from '#validators/Auth/register'
import { loginValidator } from '#validators/Auth/login'

export default class SessionController {

  async register({ request, auth, response, session }: HttpContext) {
    const { fullName, email, password, isAdmin } = await request.validateUsing(registerValidator)

    try {
      const user = await User.create({ email, password, fullName, isAdmin })
      await auth.use('web').login(user)
      session.flash({success: 'You are registered and logged in.'})
      return response.redirect('/')

    } catch (error) {
      session.flash({error: 'An error occurred while registering. Please try again.'})
      return response.redirect('/register')
    }
  }

  async login({ request, auth, response, session }: HttpContext) {
    const { email, password } = await request.validateUsing(loginValidator)

    try {
      const user = await User.verifyCredentials(email, password)
      await auth.use('web').login(user)
      if(user.isAdmin) {
        console.log('Admin')
        session.flash({success: `You are logged in as ${user.fullName}.`})
        return response.redirect('/admin/dashboard')
      }
      session.flash({success: 'You are logged in.'})
      return response.redirect('/')

    } catch (error) {
      session.flash({error: 'Incorrect credentials.'})
      return response.redirect('/login')
    }
  }

  async logout({ auth, response, session }: HttpContext) {
    await auth.use('web').logout()
    session.flash({success: 'You are logged out.'})
    return response.redirect('/')
  }

  async showLogin({ inertia }: HttpContext) {
    return inertia.render('Auth/Login')
  }

  async showRegister({ inertia }: HttpContext) {
    return inertia.render('Auth/Register')
  }
}