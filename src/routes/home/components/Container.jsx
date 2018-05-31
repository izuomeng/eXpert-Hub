import styled from 'styled-components'
import EXPERT_IMG from './expert.png'

export const Main = styled.div`
  max-width: 1000px;
  width: 80%;
  margin: 0 auto;
  display: flex;
  margin-top: 20px;
`

export const RightContainer = styled.div`
  flex: 11;
  display: flex;
  flex-wrap: wrap;
`

export const LeftContainer = styled.div`
  flex: 3;
  min-height: 100%;
  margin-bottom: 10px;
  background-image: url(${EXPERT_IMG});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border: 1px solid #e8e8e8;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.09);
    border-color: rgba(0, 0, 0, 0.09);
  }
`
