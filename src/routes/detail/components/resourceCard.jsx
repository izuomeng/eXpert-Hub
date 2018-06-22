import React from 'react'
import PropTypes from 'prop-types'
import { Card, Tag, Button } from 'antd'
import styled from 'styled-components'
import { InjectClass } from 'utils/HOC'

// const { confirm } = Modal

const StyledCard = styled(InjectClass(Card))`
  width: 500px;
  height: 300px;
`

// function showConfirm() {
//   confirm({
//     title: '购买该资源需要花费3积分，是否购买？',
//     content: '',
//     onOk() {
//       message.success('购买成功')
//     },
//     onCancel() {
//       console.log('Cancel') // eslint-disable-line
//     }
//   })
// }

const StyledButton = styled(InjectClass(Button))`
  font-size: 15px;
  margin-left: 355px;
  margin-top: 20px;
  width: 90px;
  display: block;
  text-align: center;
`
const Styledp = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

const ResourceCard = ({ query }) => (
  <StyledCard title={query.title} hoverable>
    {console.log(query) // eslint-disable-line
    }
    <p>
      作者：{query.author}
      {/* {data.items[zero].authoritemSet
        .map(authorSet => authorSet.author.name)
        .join(' ')} */}
    </p>
    <Styledp>
      摘要：A system and method for maskless direct write lithography are
      disclosed. The method includes receiving a plurality of pixels that
      represent an integrated circuit IC layout; identifying a first subset of
      the pixels that are suitable for a first compression method; and
      identifying a second subset of the pixels that are suitable for a second
      compression method. The method further includes compressing the first and
      second subset using the first and second compression method respectively.
    </Styledp>
    {/* <p>摘要：{data.items[zero].abstract}</p> */}
    <p>
      出版社：MICS International
      {/* {data.items[zero].publisher} */}
    </p>
    <Tag color="#2db7f5">computer science</Tag>
    <Tag color="#2db7f5">AI</Tag>
    <Tag color="#2db7f5">engineering</Tag>
    <StyledButton size="large" onClick={() => window.open(query.url)}>
      查看详情
    </StyledButton>
  </StyledCard>
)

ResourceCard.propTypes = {
  query: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired
}

// ResourceCard.propTypes = {
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

// ResourceCard.defaultProps = {
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
export default ResourceCard
