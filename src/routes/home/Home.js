/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react'
import PropTypes from 'prop-types'
// import { graphql, compose } from 'react-apollo'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
// import newsQuery from './news.graphql'
import s from './Home.css'

class Home extends React.Component {
  static propTypes = {
    news: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        age: PropTypes.number,
        gender: PropTypes.number
      })
    ).isRequired
  }

  render() {
    const { news } = this.props
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>User List</h1>
          {news.map(item => (
            <article key={item.name} className={s.newsItem}>
              <h1 className={s.newsTitle}>
                <div>{item.name}</div>
              </h1>
            </article>
          ))}
        </div>
      </div>
    )
  }
}

export default withStyles(s)(Home)
