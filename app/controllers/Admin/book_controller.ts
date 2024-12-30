import type { HttpContext } from '@adonisjs/core/http'
import Book from '#models/book'
import string from '@adonisjs/core/helpers/string'

export default class BookController {
  /**
   * Display a list of resource
   */
  async index({inertia}: HttpContext) {
    const books = await Book.all()
    return inertia.render('Admin/Books/Index', {books})
  }

  /**
   * Display form to create a new record
   */
  async create({inertia}: HttpContext) {
    return inertia.render('Admin/Books/Create')
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response, session }: HttpContext) {
    const bookData = request.only([
      'title',
      'description',
      'categoryId',
      'authorId',
      'isNew',
      'isPopular',
      'isRecommended',
      'isOnSale',
    ]) as { [key: string]: any; slug?: string }
    let slug = string.slug(bookData.title, { remove: /[*+~.()'"!:@]/g })

    const existingBook = await Book.query().apply((scopes) => scopes.existingSlug(slug)).first()

    if (existingBook) {
      const suffix = existingBook.slug.match(/-(\d+)$/)?.[1]
      slug = `${slug}-${suffix ? parseInt(suffix) + 1 : 1}`
    }
    bookData.slug = slug
    await Book.create(bookData)
    session.flash({ success: 'Book created successfully' })
    return response.redirect().toRoute('books.index')
  }

  /**
   * Show individual record
   */
  async show({ params, response, inertia }: HttpContext) {
    const book = await Book.findBy('slug', params.slug)
    return book
      ? inertia.render('Admin/Books/Show', { book })
      : response.status(404).send('Book not found')
  }

  /**
   * Edit individual record
   */
  async edit({ params, response, inertia }: HttpContext) {
    const book = await Book.findBy('slug', params.slug)
    return book
      ? inertia.render('Admin/Books/Edit', { book })
      : response.status(404).send('Book not found')
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response, session }: HttpContext) {
    const book = await Book.findBy('slug', params.slug)
    if (!book) {
      return response.status(404).send('Book not found')
    }
    const bookData = request.only([
      'title',
      'description',
      'categoryId',
      'authorId',
      'isNew',
      'isPopular',
      'isRecommended',
      'isOnSale',
    ]) as { [key: string]: any }
    let slug = string.slug(bookData.title, { remove: /[*+~.()'"!:@]/g })

    const existingBook = await Book.query().apply((scopes) => scopes.existingTitle(bookData.title)).whereNot('id', book.id).first()

    if (existingBook) {
      const existingBookWithSuffix = await Book.query().apply((scopes) => scopes.existingSlug(slug)).whereNot('id', book.id).first()
      if (existingBookWithSuffix) {
        const suffixMatch = existingBookWithSuffix.slug.match(/-(\d+)$/)
        const suffix = suffixMatch ? parseInt(suffixMatch[1]) + 1 : 1
        slug = `${slug}-${suffix}`
      } else {
        slug = `${slug}-1`
      }
    }
    bookData.slug = slug
    book.merge(bookData)
    await book.save()
    session.flash({ success: 'Book updated successfully' })
    return response.redirect().toRoute('books.index')
  }

  /**
   * Delete record
   */
  async destroy({ params, response, session }: HttpContext) {
    const book = await Book.findBy('slug', params.slug)
    if (!book) {
      return response.status(404).send('Book not found')
    }
    await book.delete()
    session.flash({ success: 'Book deleted successfully' })
    return response.redirect().toRoute('books.index')
  }
}