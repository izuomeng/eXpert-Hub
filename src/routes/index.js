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
    {
      path: '/about',
      load: () => import(/* webpackChunkName: 'about' */ './about')
    },
    {
      path: '/professor-info',
      load: () =>
        import(/* webpackChunkName: 'professor-info' */ './professor-info')
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
