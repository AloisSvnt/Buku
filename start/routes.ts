/*
 *|--------------------------------------------------------------------------*
 *| Routes file*
 *|--------------------------------------------------------------------------*
 *|*
 *| The routes file is used for defining the HTTP routes.*
 *|*
 */
import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

const BookController = () => import('#controllers/book_controller')
const SessionController = () => import('#controllers/Auth/session_controller')
const AdminBookController = () => import('#controllers/Admin/book_controller')
const DashBoardController = () => import('#controllers/Admin/dashboard_controller')
const AdminCategoryController = () => import('#controllers/Admin/category_controller')

router.on('/').renderInertia('home').use(middleware.global())

router
  .group(() => {
    router.get('/register', [SessionController, 'showRegister']).as('showRegister')
    router.post('/register', [SessionController, 'register']).as('register')
    router.get('/login', [SessionController, 'showLogin']).as('showLogin')
    router.post('/login', [SessionController, 'login']).as('login')
    router
      .group(() => {
        router.get('', [BookController, 'index']).as('book.index')
        router.get('/:slug', [BookController, 'show']).as('book.show')
      })
      .prefix('books')
  })
  .use(middleware.global())

router
  .group(() => {
    router.get('/logout', [SessionController, 'logout']).as('logout')
  })
  .use(middleware.auth())

router.get('/admin', async ({ response, auth }) => {
  if (await auth.check()) {
    return response.redirect('/admin/dashboard')
  }
  return response.redirect('/admin/login')
})

router
  .group(() => {
    router.get('/login', [SessionController, 'showLogin']).as('showAdminLogin')
    router.post('/login', [SessionController, 'login']).as('adminLogin')
  })
  .prefix('admin')
  .use(middleware.guest())

router
  .group(() => {
    router
      .group(() => {
        router.get('', [DashBoardController, 'index']).as('admin.dashboard.index')
        .prefix('dashboard')
        router
          .group(() => {
            router.get('', [AdminBookController, 'index']).as('admin.book.index')
            router.get('/create', [AdminBookController, 'create']).as('admin.book.create')
            router.post('', [AdminBookController, 'store']).as('admin.book.store')
            router.get('/:slug/edit', [AdminBookController, 'edit']).as('admin.book.edit')
            router.put('/:slug', [AdminBookController, 'update']).as('admin.book.update')
            router.delete('/:slug', [AdminBookController, 'destroy']).as('admin.book.destroy')
          })
          .prefix('books')

        router
          .group(() => {
            router.get('', [AdminCategoryController, 'index']).as('admin.category.index')
            router.get('/create', [AdminCategoryController, 'create']).as('admin.category.create')
            router.post('', [AdminCategoryController, 'store']).as('admin.category.store')
            router.get('/:id/edit', [AdminCategoryController, 'edit']).as('admin.category.edit')
            router.put('/:id', [AdminCategoryController, 'update']).as('admin.category.update')
            router.delete('/:id', [AdminCategoryController, 'destroy']).as('admin.category.destroy')
          })
          .prefix('categories')
      })
  })
  .prefix('admin')
  .use(middleware.admin())
