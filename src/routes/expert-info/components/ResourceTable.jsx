import { Table } from 'antd'
// import PropTypes from 'prop-types'
import React from 'react'

// fake data
const data = [
  {
    title: '1',
    docType: 'journal',
    nCitation: 3,
    years: 1997
  },
  {
    title: '2',
    docType: 'book',
    nCitation: 13,
    years: 1987
  },
  {
    title: '3',
    docType: 'otherA',
    nCitation: 33,
    years: 1998
  },
  {
    title: '4',
    docType: 'otherB',
    nCitation: 24,
    years: 2011
  },
  {
    title: '5',
    docType: 'otherC',
    nCitation: 33,
    years: 2001
  }
]

class ResourceTable extends React.Component {
  /* static propTypes = {
    data: PropTypes.shape({
      authoritems: PropTypes.arrayOf({
        item: PropTypes.shape({
          title: PropTypes.string.isRequired,
          docType: PropTypes.string.isRequired,
          nCitation: PropTypes.number.isRequired,
          years: PropTypes.number.isRequired
        })
      })
    })
  }
  static defaultProps = {
    data: {
      authoritems: {
        item: [
          {
            title: '1',
            docType: 'journal',
            nCitation: 3,
            years: 1997
          }
        ]
      }
    }
  } */
  onChange = (pagination, filters, sorter) => {
    console.info('params', pagination, filters, sorter)
  }

  render() {
    const columns = [
      {
        title: '资源名称',
        dataIndex: 'title',
        key: 'title'
      },
      {
        title: '文献类型',
        dataIndex: 'docType',
        key: 'docType',
        filters: [
          {
            text: 'journal',
            value: 'journal'
          },
          {
            text: 'book',
            value: 'book'
          },
          {
            text: 'otherA',
            value: 'otherA'
          },
          {
            text: 'otherB',
            value: 'otherB'
          },
          {
            text: 'otherC',
            value: 'otherC'
          }
        ],
        onFilter: (value, record) => record.docType.indexOf(value) === 0
      },
      {
        title: '被引用次数',
        dataIndex: 'nCitation',
        key: 'nCitation',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.nCitation - b.nCitation
      },
      {
        title: '发布时间',
        dataIndex: 'years',
        key: 'years',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.years - b.years
      }
    ]
    return (
      <React.Fragment>
        <Table columns={columns} onChange={this.onChange} dataSource={data} />
      </React.Fragment>
    )
  }
}

export default ResourceTable
