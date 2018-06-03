import ACCOUNT_INFO from 'gql/account/ACCOUNT_INFO.gql'
import { setUserInfo } from 'actions/user'

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
    console.info(store.getState())
    // 有token却没有用户信息，去拉取
    if (cookie.token) {
      if (!user) {
        const { data } = await client.query({
          query: ACCOUNT_INFO
        })
        // 提取结果中的用户信息
        const info = data.account
        store.dispatch(
          setUserInfo({
            ...info
          })
        )
      } else if (pathname === '/login') {
        route.redirect = '/'
        return route
      }
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
