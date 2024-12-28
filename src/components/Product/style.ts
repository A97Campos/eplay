import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'
import { TagsContainer } from '../Tags/style'

export const Card = styled(Link)`
  height: 450px;
  margin-bottom: 8px;
  padding: 8px 8px 16px 8px;
  border-radius: 8px;
  background-color: ${cores.cinza};
  position: relative;
  display: block;
  text-decoration: none;
  color: ${cores.branca};

  img {
    display: bolock;
    width: 100%;
    height: 250px;
    object-fit: cover;
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
