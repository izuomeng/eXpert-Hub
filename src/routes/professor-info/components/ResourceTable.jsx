import {
  Table,
  Input,
  Button,
  Icon,
  DatePicker,
  Radio,
  Dropdown,
  Menu,
  Divider,
  Tag
} from 'antd'
import React from 'react'
import TimePicker from './TimePicker'

const menu1 = (
  <Menu>
    <Menu.Item key="0">
      <a>工学</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a>力学</a>
    </Menu.Item>
    <Menu.Item key="2">
      <a>机械学</a>
    </Menu.Item>
  </Menu>
)
const menu2 = (
  <Menu>
    <Menu.Item key="0">
      <a>SCI</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a>EI</a>
    </Menu.Item>
    <Menu.Item key="2">
      <a>sbAI</a>
    </Menu.Item>
  </Menu>
)
const data = [
  {
    key: '1',
    name: '基于1的研究',
    ref: 32,
    download: 12,
    subject: '数学',
    level: 'SCI'
    // time: parseDate('2016-11-15'),
  },
  {
    key: '2',
    name: '基于2的研究 ',
    ref: 42,
    download: 1,
    subject: '数学',
    level: 'SCI'
    // time: parseDate('2016-1-15'),
  },
  {
    key: '3',
    name: '基于3的研究',
    ref: 32,
    download: 23,
    subject: '数学',
    level: 'SCI'
    // time: parseDate('2017-11-15'),
  },
  {
    key: '4',
    name: '基于4的研究',
    ref: 32,
    download: 12,
    subject: '数学',
    level: 'SCI'
    // time: parseDate('2017-11-17'),
  }
]

class ResourceTable extends React.Component {
  state = {
    filterDropdownVisible: false,
    data,
    searchText: '',
    filtered: false,
    sortedInfo: null
  }
  onInputChange = e => {
    this.setState({ searchText: e.target.value })
  }
  onChange(pagination, filters, sorter) {
    console.log('params', pagination, filters, sorter)
  }
  onSearch = () => {
    const { searchText } = this.state
    const reg = new RegExp(searchText, 'gi')
    this.setState({
      filterDropdownVisible: false,
      filtered: !!searchText,
      data: data
        .map(record => {
          const match = record.name.match(reg)
          if (!match) {
            return null
          }
          return {
            ...record,
            name: (
              <span>
                {record.name.split(new RegExp(`(?<=${searchText})|(?=${searchText})`, 'i')).map((text, i) => (
                  text.toLowerCase() === searchText.toLowerCase() ?
                    <span key={i} className="highlight">{text}</span> : text // eslint-disable-line
                ))}
              </span>
            ),
          }
        })
        .filter(record => !!record)
    })
  }
  render() {
    const columns = [
      {
        title: '资源名称',
        dataIndex: 'name',
        key: 'name',
        filterDropdown: (
          <div className="custom-filter-dropdown">
            <Input
              ref={ele => (this.searchInput = ele)}
              placeholder="Search name"
              value={this.state.searchText}
              onChange={this.onInputChange}
              onPressEnter={this.onSearch}
            />
            <Button type="primary" onClick={this.onSearch}>
              Search
            </Button>
          </div>
        ),
        filterIcon: (
          <Icon
            type="smile-o"
            style={{ color: this.state.filtered ? '#108ee9' : '#aaa' }}
          />
        ),
        filterDropdownVisible: this.state.filterDropdownVisible,
        onFilterDropdownVisibleChange: visible => {
          this.setState(
            {
              filterDropdownVisible: visible
            },
            () => this.searchInput && this.searchInput.focus()
          )
        }
      },
      {
        title: '被引用次数',
        dataIndex: 'ref',
        key: 'ref',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.ref - b.ref
      },
      {
        title: '被下载次数',
        dataIndex: 'download',
        key: 'download',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.download - b.download
      }
    ]
    return (
      <div>
        <div className="operation-menu">
          <Dropdown overlay={menu1} placement="bottomLeft">
            <Button>学科</Button>
          </Dropdown>
          <Divider type="vertical" />
          <Dropdown overlay={menu2} placement="bottomLeft">
            <Button>层次</Button>
          </Dropdown>
          <Divider type="vertical" />
          <TimePicker onClick={this.setReleaseTime} />
        </div>
        <Divider />
        <Table
          columns={columns}
          dataSource={this.state.data}
          onChange={this.onChange}
        />
      </div>
    )
  }
}

export default ResourceTable
