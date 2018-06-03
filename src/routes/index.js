import ACCOUNT_INFO from 'gql/account/ACCOUNT_INFO.gql'
import { setUserInfo } from 'actions/user'

/* eslint-disable global-require */

// The top-level (parent) route
const routes = {
  path: '',

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
      path: '/expert',
      load: () => import(/* webpackChunkName: 'expert' */ './expert'),
      children: [
        {
          path: 'professor-info',
          load: () =>
            import(/* webpackChunkName: 'professor-info' */ './professor-info')
        }
      ]
    },
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

  async action({ next, pathname, store, client, cookie }) {
    // Execute each child route until one of them return the result
    const route = await next()
    // Provide default values for title, description etc.
    route.title = `${route.title || 'Untitled Page'}`
    route.description = route.description || ''
    // 如果没有token，重定向到登陆页
    if (!cookie.token && pathname !== '/login') {
      route.redirect = '/login'
      return route
    }
    const { user } = store.getState()
    if (!user && cookie.token) {
      const { data } = await client.query({
        query: ACCOUNT_INFO
      })
      // 提取结果中的用户信息
      const info = data.getAccount
      store.dispatch(
        setUserInfo({
          ...info
        })
      )
    }
    // 如果有用户数据却访问了登陆页
    if (user && pathname === '/login') {
      route.redirect = '/'
      return route
    }
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
