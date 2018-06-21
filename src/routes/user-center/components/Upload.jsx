import { Upload, Button, Icon } from 'antd'
import React from 'react'

const props = {
  action: '//jsonplaceholder.typicode.com/posts/',
  onChange({ file, fileList }) {
    if (file.status !== 'uploading') {
      console.info(file, fileList)
    }
  },
  defaultFileList: []
}

const Uplaod = () => (
  <Upload {...props}>
    <Button>
      <Icon type="upload" /> Upload
    </Button>
  </Upload>
)

export default Uplaod
