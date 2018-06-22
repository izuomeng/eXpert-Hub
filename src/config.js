/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable max-len */

if (process.env.BROWSER) {
  throw new Error('Do not import `config.js` from inside the client-side code.')
}

require('dotenv').config()

module.exports = {
  // Node.js app
  port: process.env.PORT || 3000,

  // https://expressjs.com/en/guide/behind-proxies.html
  trustProxy: process.env.TRUST_PROXY || 'loopback',

  // API Gateway
  api: {
    // API URL to be used in the client-side code
    clientUrl: process.env.API_CLIENT_URL || '',
    // API URL to be used in the server-side code
    serverUrl:
      process.env.API_SERVER_URL ||
      `http://localhost:${process.env.PORT || 3000}`
  },

  // Database
  databaseUrl: process.env.DATABASE_URL || 'sqlite:database.sqlite',

  // Web analytics
  analytics: {
    // https://analytics.google.com/
    googleTrackingId: process.env.GOOGLE_TRACKING_ID // UA-XXXXX-X
  },

  // Authentication
  auth: {
    jwt: { secret: process.env.JWT_SECRET || 'React Starter Kit' }
  },
  proxy: {
    target: 'http://139.199.80.199:811',
    changeOrigin: true,
    pathRewrite: {
      '^/api': ''
    },
    onProxyReq(proxyReq) {
      proxyReq.removeHeader('content-length')
    },
    onProxyRes(proxyRes) {
      if (proxyRes.headers['set-cookie']) {
        const cookie = proxyRes.headers['set-cookie'].toString()
        const token = cookie.slice(cookie.indexOf('=') + 1)
        // eslint-disable-next-line
        proxyRes.headers[
          'Set-Cookie'
        ] = `token=${token}; Max-Age=15552000; Path=/`
      }
    },
    logLevel: 'debug'
  }
}
