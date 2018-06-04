/* eslint-disable global-require */

// The top-level (parent) route
const routes = {
  path: '/',

  // Keep in mind, routes are evaluated in order
  children: [
    {
      path: '',
      load: () => import(/* webpackChunkName: 'home' */ './home')
    },
    {
      path: '/login',
      load: () => import(/* webpackChunkName: 'login' */ './login')
    },
    {
      path: '/register',
      load: () => import(/* webpackChunkName: 'register' */ './register')
    },
    // 购物车
    {
      path: '/cart',
      load: () =>
        import(/* webpackChunkName: 'shopping-cart' */ './shopping-cart')
    },
    // 我的订单列表
    {
      path: '/orders',
      children: [
        {
          path: '',
          load: () =>
            import(/* webpackChunkName: 'my-account' */ './my-account')
        },
        // 单个订单详情
        {
          path: '/:id',
          load: () =>
            import(/* webpackChunkName: 'personal-order' */ './personal-order')
        }
      ]
    },
    // 专家列表
    {
      path: '/expert',
      children: [
        {
          path: '',
          load: () => import(/* webpackChunkName: 'expert' */ './expert')
        },
        // 专家详情
        {
          path: '/:id',
          load: () =>
            import(/* webpackChunkName: 'professor-info' */ './professor-info')
        }
      ]
    },
    // 商品列表
    {
      path: '/commodity',
      load: () => import(/* webpackChunkName: 'commodity' */ './commodity')
    },
    // Wildcard routes, e.g. { path: '(.*)', ... } (must go last)
    {
      path: '(.*)',
      load: () => import(/* webpackChunkName: 'not-found' */ './not-found')
    }
  ],

  async action({ next }) {
    // Execute each child route until one of them return the result
    const route = await next()
    // Provide default values for title, description etc.
    route.title = `${route.title || 'Untitled Page'}`
    route.description = route.description || ''
    // 如果没有token，重定向到登陆页
    return route
  }
}

// The error page is available by permanent url for development mode
if (__DEV__) {
  routes.children.unshift({
    path: '/error',
    action: require('./error').default
  })
}

export default routes
