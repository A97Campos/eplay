import styled from 'styled-components'
import { cores } from '../../styles'

export const Items = styled.ul`
  @media only screen and (min-width: 600px) {
    display: flex;
  }
`

export const Item = styled.li`
  border: 2px solid ${cores.branca};
  border-radius: 8px;
  margin-bottom: 16px;
  overflow: hidden;
  widht: 100%;
  height: 300px;

  @media only screen and (min-width: 600px) {
    width: 150px;
    height: 150px;
    margin-right: 16px;
  }

  img {
    width: 100%;
    height: 100%;
    overflow: hidden;
    object-fit: cover;
  }
`
