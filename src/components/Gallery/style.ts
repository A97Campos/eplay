import styled from 'styled-components'
import { cores } from '../../styles'

export const Items = styled.ul`
  @media only screen and (min-width: 600px) {
    display: flex;
  }
`

export const Action = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.73);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  cursor: pointer;
  transition: opacity 0.5s ease;
`

export const Item = styled.li`
  position: relative;
  border: 2px solid ${cores.branca};
  border-radius: 8px;
  margin-bottom: 16px;
  overflow: hidden;
  widht: 100%;
  height: 300px;

  &:hover {
    ${Action} {
      opacity: 1;
      transition: opacity 0.5s ease;
    }
  }

  @media only screen and (min-width: 600px) {
    width: 150px;
    height: 150px;
    margin-right: 16px;
  }

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
