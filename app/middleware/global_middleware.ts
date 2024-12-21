import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

export default class GlobalMiddleware {
  async handle(ctx: HttpContext, next: NextFn) {
    if (await ctx.auth.check()) {
      const user = ctx.auth.user || {}
      ctx.inertia.share({
        auth: {
          user: user,
        },
      })
    } else {
      ctx.inertia.share({
        auth: {
          user: undefined,
        },
      })
    }

    await next()
  }
}
