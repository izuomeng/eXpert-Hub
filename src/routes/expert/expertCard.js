import React from 'react'
import { Card } from 'antd'
import { InjectClass } from 'utils/HOC'
import styled from 'styled-components'
import p from './expert.jpeg'

const StyledCard = styled(InjectClass(Card))`
  width: 500px;
  display: inline-block;
  vertical-align: top;
`
const StyledImg = styled.div`
  width: 200px;
  display: inline-block;
  vertical-align: top;
  border-style: solid;
  border-width: 1px;
`
const StyledExpert = styled.div`
  margin-bottom: 20px;
  width: 710px;
  height: 300px;
  font-size: 0;
`

class ExpertCard extends React.Component {
  render() {
    return (
      <StyledExpert>
        <StyledImg>
          <img src={p} alt="无法加载" />
        </StyledImg>
        <StyledCard title="谭火彬" hoverable>
          <p>
            2003获得北京航空航天大学计算机学院计算机软件与理论硕士学位，现任软件学院软件工程与管理专业实践指导主任。曾参加IBM
            Rational培训和Microsoft体系架构师A2K2000培训。目前主要关注面向对象技术领域发展，对系统集成和数据库设计和管理也有一定的项目经历。是软件学院“面向对象的程序设计”等专业课程的主讲教师。
          </p>
        </StyledCard>
      </StyledExpert>
    )
  }
}

export default ExpertCard
