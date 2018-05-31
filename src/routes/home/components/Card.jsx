import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'antd'
import styled from 'styled-components'
import { InjectClass } from 'utils/HOC'

const StyledCard = styled(InjectClass(Card))`
  width: calc(25% - 10px);
  padding-top: 25% !important;
  position: relative;
  margin-left: 10px !important;
  margin-bottom: 10px !important;
  & > div {
    padding: 0;
  }
`
const CardBody = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
  color: #5a5e63;
`
const CategoryCard = ({ name }) => (
  <StyledCard hoverable>
    <CardBody>{name}</CardBody>
  </StyledCard>
)

CategoryCard.propTypes = {
  name: PropTypes.string.isRequired
}

export default CategoryCard
