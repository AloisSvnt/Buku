/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

const BookController = () => import('#controllers/book_controller')
const SessionController = () => import('#controllers/Auth/session_controller')

router.on('/').renderInertia('home')

router
  .group(() => {
    router.get('/register', [SessionController, 'showRegister']).as('showRegister')
    router.post('/register', [SessionController, 'register']).as('register')
    router.get('/login', [SessionController, 'showLogin']).as('showLogin')
    router.post('/login', [SessionController, 'login']).as('login')

    router
      .group(() => {
        router.get('', [BookController, 'index']).as('index')
        router.get('/:slug', [BookController, 'show']).as('show')
      }
    )
    .prefix('books')
  })
.use(middleware.guest())


router
  .group(() => {
    router.post('/logout', [SessionController, 'logout']).as('logout')
  })
  .use(middleware.auth())

router
.group(()=> {

  router.get('', [SessionController, 'showLogin']).as('showAdminLogin')
  router.post('', [SessionController, 'login']).as('adminLogin')

  router.group(() => {

    router.group(() => {
      router.get('/create', [BookController, 'create']).as('create')
      router.post('', [BookController, 'store']).as('store')
      router.get('/:slug/edit', [BookController, 'edit']).as('edit')
      router.put('/:slug', [BookController, 'update']).as('update')
      router.delete('/:slug', [BookController, 'destroy']).as('destroy')
    })
    .prefix('books')

  })
  .prefix('dashboard')

  })
  .prefix('admin')
  .use(middleware.admin())