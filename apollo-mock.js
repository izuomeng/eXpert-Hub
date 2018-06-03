const { ApolloServer, gql } = require('apollo-server')
const Mock = require('mockjs')

const typeDefs = gql`
  type Account {
    name: String!
    role: [String]!
  }

  type Category {
    name: String!
  }

  # 数据资源服务
  enum FileType {
    # 论文
    PAPER
    # 专利
    PATENT
    # 项目
    PROJECT
  }

  enum Role {
    NORMAL
    EXPERT
    ADMIN
  }

  enum Gender {
    MALE
    FEMALE
  }

  type User {
    id: ID!
    name: String!
    role: Role!
    email: String
    phone: String
    gender: Gender
    # 身份证号
    idcard: String
    # 所属机构
    institute: String
    # 是否处于需要管理员认证的状态
    pending: Int
  }

  input UserInput {
    id: ID!
    name: String!
    email: String
    phone: String
    gender: Gender
    idcard: String
    institute: String
  }

  type TechResource {
    id: ID!
    # 文件名
    name: String!
    # 文件的下载路径
    url: String!
    price: Float!
    # 文件类型
    type: FileType
    # 文件说明
    description: String
    # 文件所有者
    owner: User!
    # 允许下载的人
    permitted: [User!]
    # 评论
    comment: [String!]
    # 资源机构信息
    institute: String
  }

  scalar Upload

  type Query {
    account: Account
    categories: [Category]

    # 获取资源，根据用户ID或者资源ID，都不指定则返回全部资源
    resources(userId: ID, resourceId: ID): [TechResource!]
    # 获取用户，根据用户ID或者用户类型，都不指定则为全部用户
    users(id: ID, role: Role): [User!]
  }

  type Mutation {
    # 上传文件
    createResource(file: Upload!, id: ID!): TechResource
    # 删除文件
    removeResource(id: ID!): TechResource
    # 更新user信息
    updateUser(info: UserInput!): User
    # 创建user
    createUser(info: UserInput!): User
    # 删除user
    removeUser(id: ID!): User
    # 某个用户购买了某个资源
    purchase(userId: ID!, resourceId: ID!): Boolean
  }
`

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
const resolvers = {
  TechResource: {
    owner(parent, args) {
      console.info('user for resource id: ', parent.id, args)
      // parent is TechResource object
      return Mock.mock({
        id: '@guid()',
        name: '@cname()',
        role: /NORMAL|EXPERT|ADMIN/,
        email: '@email()',
        phone: '@string(number, 11)',
        gender: /MALE|FEMALE/,
        institute: '@cname()'
      })
    },
    permitted(parent, args) {
      console.info('permitted user for resource id: ', parent.id, args)
      const data = Mock.mock({
        'list|0-5': [
          {
            id: '@guid()',
            name: '@cname()',
            role: /NORMAL|EXPERT|ADMIN/,
            email: '@email()',
            phone: '@string(number, 11)',
            gender: /MALE|FEMALE/,
            institute: '@cname()'
          }
        ]
      })
      return data.list
    }
  },
  Query: {
    account() {
      return {
        name: 'zuomeng',
        role: ['admin']
      }
    },
    categories() {
      return [
        { name: '力学' },
        { name: '机械工程' },
        { name: '光学工程' },
        { name: '地质工程' },
        { name: '建筑学' },
        { name: '矿业工程' },
        { name: '交通运输' },
        { name: '核科学' }
      ]
    },
    resources(parent, args) {
      console.info('resouces: ', args)
      const data = Mock.mock({
        'list|1-8': [
          {
            id: '@guid()',
            name: '@word(1, 10).@word(2,4)',
            url: '@url()',
            price: '@float(100, 10000, 1, 2)',
            type: /PAPER|PATENT|PROJECT/,
            description: '@csentence()',
            'comment|0-10': ['@csentence()'],
            institute: '@cname()'
          }
        ]
      })
      if (args.userId) {
        return data.list
      } else if (args.resourceId) {
        return data.list.slice(0, 1)
      }
      return data.list
    },
    users(parent, args) {
      console.info('users: ', args)
      const data = Mock.mock({
        'list|1-20': [
          {
            id: '@guid()',
            name: '@cname()',
            role: /NORMAL|EXPERT|ADMIN/,
            email: '@email()',
            phone: '@string(number, 11)',
            gender: /MALE|FEMALE/,
            institute: '@cname()'
          }
        ]
      })
      if (args.id) {
        return data.list.slice(0, 1)
      }
      return data.list
    }
  },
  Mutation: {
    createResource() {
      return Mock.mock({
        id: '@guid()',
        name: '@word(1, 10)',
        url: '@url()',
        price: '@float(100, 10000, 1, 2)',
        type: /PAPER|PATENT|PROJECT/,
        description: '@csentence()',
        institute: '@cname()'
      })
    },
    removeResource() {
      return Mock.mock({
        id: '@guid()',
        name: '@word(1, 10)',
        url: '@url()',
        price: '@float(100, 10000, 1, 2)',
        type: /PAPER|PATENT|PROJECT/,
        description: '@csentence()',
        institute: '@cname()'
      })
    },
    updateUser() {
      return Mock.mock({
        id: '@guid()',
        name: '@cname()',
        idcard: '@string(number, 18)',
        role: /VISITER|EXPERT|ADMIN/,
        email: '@email()',
        phone: '@string(number, 11)',
        gender: /MALE|FEMALE/,
        institute: '@cname()',
        pending: '@natural(0,1)'
      })
    },
    createUser() {
      return Mock.mock({
        id: '@guid()',
        name: '@cname()',
        idcard: '@string(number, 18)',
        role: /VISITER|EXPERT|ADMIN/,
        email: '@email()',
        phone: '@string(number, 11)',
        gender: /MALE|FEMALE/,
        institute: '@cname()',
        pending: '@natural(0,1)'
      })
    },
    removeUser() {
      return Mock.mock({
        id: '@guid()',
        name: '@cname()',
        idcard: '@string(number, 18)',
        role: /VISITER|EXPERT|ADMIN/,
        email: '@email()',
        phone: '@string(number, 11)',
        gender: /MALE|FEMALE/,
        institute: '@cname()',
        pending: '@natural(0,1)'
      })
    },
    purchase() {
      return true
    }
  }
}

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({ typeDefs, resolvers })

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
// eslint-disable-next-line
server.listen().then(({ url, ...rest }) => {
  console.info(`🚀  Server ready at ${url}`)
})
