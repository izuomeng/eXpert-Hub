const { ApolloServer, gql } = require('apollo-server')
const Mock = require('mockjs')

// This is a (sample) collection of books we'll be able to query
// the GraphQL server for.  A more complete example might fetch
// from an existing data source like a REST API or database.
const users = [
  {
    name: 'Tom Hanks',
    age: 20,
    gender: 0
  },
  {
    name: 'Ware Smith',
    age: 28,
    gender: 0
  },
  {
    name: 'Cherry Dosen',
    age: 16,
    gender: 1
  },
  {
    name: 'Jekky Chan',
    age: 46,
    gender: 0
  }
]

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = gql`
  # enum Gender {
  #   MALE
  #   FEMALE
  # }

  type TestUser {
    name: String!
    age: Int
    gender: Int
  }

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
    VISITER
    EXPERT
    ADMIN
  }

  enum Gender {
    MALE
    FEMALE
  }

  type Institute {
    id: ID!
    name: String!
    role: Role!
    email: String
    phone: String
  }

  input InstituteInput {
    id: ID!
    name: String!
    email: String
    phone: String
  }

  type User {
    id: ID!
    name: String!
    role: Role!
    email: String
    phone: String
    gender: Gender
    # 所属机构
    institute: Institute
  }

  input UserInput {
    id: ID!
    name: String!
    email: String
    phone: String
    gender: Gender
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
    description: String
    # 文件所有者
    user: User!
    keyword: [String!]
  }

  scalar Upload

  type Query {
    getTestUserList: [TestUser]
    getTestUser(name: String!): TestUser
    getAccount: Account
    getCategoryList: [Category]

    # 获取某个user上传的所有文件
    getFilesByUser(id: ID!): [TechResource!]
    # 获取全部资源列表
    getFileList: [TechResource!]
    # 获取某个user的信息
    getUserInfo(id: ID!): User
    # 获取某类型的user列表，type为空则返回所有类型的user
    getUserList(type: Role): [User!]
    # 获取某个机构的信息
    getInstituteInfo(id: ID!): Institute
    # 获取某类型的机构列表，type为空则返回所有类型的机构
    getInstituteList(type: Role): [Institute!]
  }

  type Mutation {
    # 上传文件
    uploadFile(file: Upload!, id: ID!): TechResource
    # 删除文件
    removeFile(id: ID!): TechResource
    # 更新user信息
    updateUser(info: UserInput!): User
    # 创建user
    createUser(info: UserInput!): User
    # 删除user
    removeUser(id: ID!): User
    # 更新机构信息
    updateInstitute(info: InstituteInput!): Institute
    # 创建机构
    createInstitute(info: InstituteInput!): Institute
    # 删除机构
    removeInstitute(id: ID!): Institute
  }
`

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
const resolvers = {
  Query: {
    getTestUserList: () => users,
    getTestUser(parent, args) {
      const { name } = args
      return users.find(user => user.name === name)
    },
    getAccount() {
      return {
        name: 'zuomeng',
        role: ['admin']
      }
    },
    getCategoryList() {
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
    getFilesByUser(parent, args) {
      console.info('getFilesByUser: ', args)
      const data = Mock.mock({
        'list|1-8': [
          {
            id: '@guid()',
            name: '@word(1, 10)',
            url: '@url()',
            price: '@float(100, 10000, 1, 2)',
            type: /PAPER|PATENT|PROJECT/,
            description: '@csentence()',
            user: {
              id: '@guid()',
              name: '@cname()',
              role: /VISITER|EXPERT|ADMIN/,
              email: '@email()',
              phone: '@string(number, 11)',
              gender: /MALE|FEMALE/,
              institute: {
                id: '@guid()',
                name: '@cword(4, 8)',
                role: /VISITER|EXPERT|ADMIN/,
                email: '@email()',
                phone: '@string(number, 11)'
              }
            }
          }
        ]
      })
      return data.list
    },
    getFileList() {
      console.info('getFileList')
      const data = Mock.mock({
        'list|10-50': [
          {
            id: '@guid()',
            name: '@word(1, 10)',
            url: '@url()',
            price: '@float(100, 10000, 1, 2)',
            type: /PAPER|PATENT|PROJECT/,
            description: '@csentence()',
            user: {
              id: '@guid()',
              name: '@cname()',
              role: /VISITER|EXPERT|ADMIN/,
              email: '@email()',
              phone: '@string(number, 11)',
              gender: /MALE|FEMALE/,
              institute: {
                id: '@guid()',
                name: '@cword(4, 8)',
                role: /VISITER|EXPERT|ADMIN/,
                email: '@email()',
                phone: '@string(number, 11)'
              }
            }
          }
        ]
      })
      return data.list
    },
    getUserInfo(parent, args) {
      console.info('getUserInfo: ', args)
      return Mock.mock({
        id: '@guid()',
        name: '@cname()',
        role: /VISITER|EXPERT|ADMIN/,
        email: '@email()',
        phone: '@string(number, 11)',
        gender: /MALE|FEMALE/,
        institute: {
          id: '@guid()',
          name: '@cword(4, 8)',
          role: /VISITER|EXPERT|ADMIN/,
          email: '@email()',
          phone: '@string(number, 11)'
        }
      })
    },
    getUserList() {
      console.info('getUserList')
      const data = Mock.mock({
        'list|1-20': [
          {
            id: '@guid()',
            name: '@cname()',
            role: /VISITER|EXPERT|ADMIN/,
            email: '@email()',
            phone: '@string(number, 11)',
            gender: /MALE|FEMALE/,
            institute: {
              id: '@guid()',
              name: '@cword(4, 8)',
              role: /VISITER|EXPERT|ADMIN/,
              email: '@email()',
              phone: '@string(number, 11)'
            }
          }
        ]
      })
      return data.list
    },
    getInstituteInfo(parent, args) {
      console.info('getInstituteInfo: ', args)
      return Mock.mock({
        id: '@guid()',
        name: '@cword(4, 8)',
        role: /VISITER|EXPERT|ADMIN/,
        email: '@email()',
        phone: '@string(number, 11)'
      })
    },
    getInstituteList() {
      console.info('getInstituteList')
      const data = Mock.mock({
        'list|2-10': [
          {
            id: '@guid()',
            name: '@cword(4, 8)',
            role: /VISITER|EXPERT|ADMIN/,
            email: '@email()',
            phone: '@string(number, 11)'
          }
        ]
      })
      return data.list
    }
  },
  Mutation: {
    removeFile() {
      return Mock.mock({
        id: '@guid()',
        name: '@word(1, 10)',
        url: '@url()',
        price: '@float(100, 10000, 1, 2)',
        type: /PAPER|PATENT|PROJECT/,
        description: '@csentence()',
        user: {
          id: '@guid()',
          name: '@cname()',
          role: /VISITER|EXPERT|ADMIN/,
          email: '@email()',
          phone: '@string(number, 11)',
          gender: /MALE|FEMALE/,
          institute: {
            id: '@guid()',
            name: '@cword(4, 8)',
            role: /VISITER|EXPERT|ADMIN/,
            email: '@email()',
            phone: '@string(number, 11)'
          }
        }
      })
    },
    updateUser() {
      return Mock.mock({
        id: '@guid()',
        name: '@cname()',
        role: /VISITER|EXPERT|ADMIN/,
        email: '@email()',
        phone: '@string(number, 11)',
        gender: /MALE|FEMALE/,
        institute: {
          id: '@guid()',
          name: '@cword(4, 8)',
          role: /VISITER|EXPERT|ADMIN/,
          email: '@email()',
          phone: '@string(number, 11)'
        }
      })
    },
    createUser() {
      return Mock.mock({
        id: '@guid()',
        name: '@cname()',
        role: /VISITER|EXPERT|ADMIN/,
        email: '@email()',
        phone: '@string(number, 11)',
        gender: /MALE|FEMALE/,
        institute: {
          id: '@guid()',
          name: '@cword(4, 8)',
          role: /VISITER|EXPERT|ADMIN/,
          email: '@email()',
          phone: '@string(number, 11)'
        }
      })
    },
    removeUser() {
      return Mock.mock({
        id: '@guid()',
        name: '@cname()',
        role: /VISITER|EXPERT|ADMIN/,
        email: '@email()',
        phone: '@string(number, 11)',
        gender: /MALE|FEMALE/,
        institute: {
          id: '@guid()',
          name: '@cword(4, 8)',
          role: /VISITER|EXPERT|ADMIN/,
          email: '@email()',
          phone: '@string(number, 11)'
        }
      })
    },
    updateInstitute() {
      return Mock.mock({
        id: '@guid()',
        name: '@cword(4, 8)',
        role: /VISITER|EXPERT|ADMIN/,
        email: '@email()',
        phone: '@string(number, 11)'
      })
    },
    createInstitute() {
      return Mock.mock({
        id: '@guid()',
        name: '@cword(4, 8)',
        role: /VISITER|EXPERT|ADMIN/,
        email: '@email()',
        phone: '@string(number, 11)'
      })
    },
    removeInstitute() {
      return Mock.mock({
        id: '@guid()',
        name: '@cword(4, 8)',
        role: /VISITER|EXPERT|ADMIN/,
        email: '@email()',
        phone: '@string(number, 11)'
      })
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
