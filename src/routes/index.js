/* eslint-disable global-require */

// The top-level (parent) route
const routes = {
  path: '/',

  // Keep in mind, routes are evaluated in order
  children: [
    // 首页变成了资源列表
    {
      path: '',
      children: [
        // 资源列表
        {
          path: '',
          load: () => import(/* webpackChunkName: 'resources' */ './resources')
        },
        {
          path: '/resources',
          load: () => import(/* webpackChunkName: 'resources' */ './resources')
        },
        // 资源详情
        {
          path: '/resources/:id',
          load: () => import(/* webpackChunkName: 'detail' */ './detail')
        },
        // 资源附属资源
        {
          path: '/attached/:id',
          load: () => import(/* webpackChunkName: 'attached' */ './attached')
        }
      ]
    },
    {
      path: '/login',
      load: () => import(/* webpackChunkName: 'login' */ './login')
    },
    {
      path: '/register',
      load: () => import(/* webpackChunkName: 'register' */ './register')
    },
    // 个人中心
    {
      path: '/account',
      load: () => import(/* webpackChunkName: 'user-center' */ './user-center')
    },
    // 专家列表
    {
      path: '/expert',
      children: [
        {
          path: '',
          load: () =>
            import(/* webpackChunkName: 'expert-list' */ './expert-list')
        },
        // 专家详情
        {
          path: '/:id',
          load: () =>
            import(/* webpackChunkName: 'expert-info' */ './expert-info')
        }
      ]
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
    route.title = `${route.title || 'eXpert hub'}`
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
