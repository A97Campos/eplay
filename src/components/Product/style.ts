import styled from 'styled-components'
import { cores } from '../../styles'
import { TagsContainer } from '../Tags/style'

export const Card = styled.div`
  margin-bottom: 8px;
  padding: 8px 8px 16px 8px;
  border-radius: 8px;
  background-color: ${cores.cinza};
  position: relative;

  img {
    width: 100%;
  }

  ${TagsContainer} {
    margin-right: 8px;
  }
`

export const Titulo = styled.h3`
  font-size: 16px;
  font-weiight: bold;
  margin: 16px 0 8px 0;
`

export const Descricao = styled.p`
  margin-top: 16px;
  font-size: 14px;
`

export const Infos = styled.div`
  top: 16px;
  right: 16px;
  position: absolute;
`
