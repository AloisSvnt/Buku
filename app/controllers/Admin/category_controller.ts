import Category from '#models/category'
import type { HttpContext } from '@adonisjs/core/http'

export default class CategoryController {
  /**
   * Display a list of resource
   */
  async index({ inertia }: HttpContext) {
    const categories = await Category.all()
    return inertia.render('Admin/Categories/Index', { categories })
  }

  /**
   * Display form to create a new record
   */
  async create({inertia}: HttpContext) {
    return inertia.render('Admin/Categories/Create')
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response, session }: HttpContext) {
    const categoryData = request.only([
      'name',
      'description',
    ])
    await Category.create(categoryData)
    session.flash({ success: 'Category created successfully' })
    return response.redirect().toRoute('admin.category.index')
  }

  /**
   * Show individual record
   */
  async show({ params, response, inertia }: HttpContext) {
    const category = await Category.find(params.id)
    return category
      ? inertia.render('Admin/Categories/Show', { category })
      : response.status(404).send('Category not found')
  }

  /**
   * Edit individual record
   */
  async edit({ params, response, inertia }: HttpContext) {
    const category = await Category.find(params.id)
    return category
      ? inertia.render('Admin/Categories/Edit', { category })
      : response.status(404).send('Category not found')
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response, session }: HttpContext) {
    const category = await Category.find(params.id)
    if (!category) {
      return response.redirect().toRoute('admin.category.index')
    }
    const categoryData = request.only([
      'name',
      'description',
    ])
    category.merge(categoryData)
    await category.save()
    session.flash({ success: 'Category updated successfully' })
    return response.redirect().toRoute('admin.category.index')

  }

  /**
   * Delete record
   */
  async destroy({ params, response, session }: HttpContext) {
    const category = await Category.find(params.id)
    if (!category) {
      return response.redirect().toRoute('admin.category.index')
    }
    await category.delete()
    session.flash({ success: 'Category deleted successfully' })
    return response.redirect().toRoute('admin.category.index')
  }
}