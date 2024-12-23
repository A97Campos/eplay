import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonContainer } from '../Button/style'
import { TagsContainer } from '../Tags/style'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  justify-content: end;
`

export const Sidebar = styled.aside`
  padding: 40px 16px;
  background-color: ${cores.cinza};
  height: 100%;
  width: 360px;
  z-index: 1;

  ${ButtonContainer} {
    width: 100%;
    margin-top: 24px;
  }
`

export const CartItem = styled.li`
  display: flex;
  border-bottom: 1px solid ${cores.cinzaClaro};
  padding: 8px 0;

  img {
    height: 80px;
    width: 80px;
    margin-right: 23px;
  }

  ${TagsContainer} {
    margin: 8px 0 16px 0;
  }
`
export const Quantity = styled.p`
  margin: 32px 0 16px 0;
  font-size: 16px;
`

export const Prices = styled.p`
  font-size: 14px;
  span {
    display: block;
    font-size: 12px;
    color: ${cores.cinzaClaro};
  }
`
