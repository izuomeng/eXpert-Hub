import React from 'react'

import { Tabs, Button } from 'antd'
import { graphql } from 'react-apollo'
import { InjectClass } from 'utils/HOC'
import styled from 'styled-components'
import DETAIL from 'gql/detail/DETAIL.gql'

const { TabPane } = Tabs

const StyledTabs = styled(InjectClass(Tabs))`
  width: 500px;
  margin-top: 40px;
`

const StyledReference = styled.div`
  width: 460px;
  margin-left: 20px;
`
const StyledBorder = styled.div`
  width: 500px;
  border-left: 1px solid #e8e8e8;
  border-right: 1px solid #e8e8e8;
  border-bottom: 1px solid #e8e8e8;
`

const StyledButton = styled(InjectClass(Button))`
  width: 200px;
  margin-left: 150px;
  margin-bottom: 20px;
  margin-top: 20px;
`

const Reference = () => (
  <StyledTabs type="card" tabBarStyle={{ marginBottom: 0 }}>
    {console.log(data) // eslint-disable-line
    }
    <TabPane tab="参考文献" key="1">
      <StyledBorder>
        <StyledReference>
          <p>title</p>
          <p>authors</p>
          <hr />
        </StyledReference>
        <StyledReference>
          <p>title</p>
          <p>authors</p>
          <hr />
        </StyledReference>
        <StyledReference>
          <p>title</p>
          <p>authors</p>
          <hr />
        </StyledReference>
        <StyledButton>加载更多</StyledButton>
      </StyledBorder>
    </TabPane>

    <TabPane tab="印证文献" key="2">
      <StyledBorder>
        <StyledReference>
          <p>title</p>
          <p>authors</p>
          <hr />
        </StyledReference>
        <StyledReference>
          <p>title</p>
          <p>authors</p>
          <hr />
        </StyledReference>
        <StyledButton>加载更多</StyledButton>
      </StyledBorder>
    </TabPane>
  </StyledTabs>
)

// Reference.propTypes = {
//   data: PropTypes.shape({
//     items: PropTypes.arrayOf(
//       PropTypes.shape({
//         title: PropTypes.string.isRequired,
//         abstract: PropTypes.string.isRequired,
//         publisher: PropTypes.string.isRequired,
//         issn: PropTypes.string.isRequired,
//         authoritemSet: PropTypes.arrayOf(
//           PropTypes.shape({
//             author: PropTypes.shape({
//               name: PropTypes.string.isRequired
//             })
//           })
//         ),
//         urlSet: PropTypes.arrayOf(
//           PropTypes.shape({
//             url: PropTypes.string.isRequired
//           })
//         ),
//         referenceSet: PropTypes.arrayOf(
//           PropTypes.shape({
//             reference: PropTypes.shape({
//               title: PropTypes.string.isRequired,
//               abstract: PropTypes.string.isRequired
//             })
//           })
//         ),
//         attachmentSet: PropTypes.arrayOf(
//           PropTypes.shape({
//             attachmentUrl: PropTypes.string.isRequired,
//             item: PropTypes.shape({
//               title: PropTypes.string.isRequired,
//               years: PropTypes.number.isRequired
//             })
//           })
//         )
//       })
//     )
//   })
// }

// Reference.defaultProps = {
//   data: {
//     items: [
//       {
//         title: 'System and Method for Maskless Direct Write Lithography',
//         abstract:
//           'A system and method for maskless direct write lithography are disclosed. The method includes receiving a plurality of pixels that represent an integrated circuit (IC) layout; identifying a first subset of the pixels that are suitable for a first compression method; and identifying a second subset of the pixels that are suitable for a second compression method. The method further includes compressing the first and second subset using the first and second compression method respectively,',
//         publisher: 'Machinery Industry Press',
//         issn: 'sdaddsfasas',
//         authoritemSet: [
//           {
//             author: {
//               name: 'li'
//             }
//           },
//           {
//             author: {
//               name: 'zhang'
//             }
//           }
//         ],
//         urlSet: [
//           {
//             url: 'https://www11254096285745908.com'
//           }
//         ],
//         referenceSet: [
//           {
//             reference: {
//               title: 'title16',
//               abstract: 'aB'
//             }
//           },
//           {
//             reference: {
//               title: 'title16',
//               abstract: 'aB'
//             }
//           },
//           {
//             reference: {
//               title: 'title16',
//               abstract: 'aB'
//             }
//           },
//           {
//             reference: {
//               title: 'title16',
//               abstract: 'aB'
//             }
//           },
//           {
//             reference: {
//               title: 'title16',
//               abstract: 'aB'
//             }
//           }
//         ],
//         attachmentSet: [
//           {
//             attachmentUrl: 'www.baidu.com',
//             item: {
//               title: 'dasdads',
//               years: 2018
//             }
//           },
//           {
//             attachmentUrl: 'www.baidu.com',
//             item: {
//               title: 'dasdads',
//               years: 2018
//             }
//           }
//         ]
//       }
//     ]
//   }
// }
export default graphql(DETAIL)(Reference)
