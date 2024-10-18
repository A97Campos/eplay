import styled from 'styled-components'

import { Props } from '.'
import { cores } from '../../styles'
import { Card } from '../Product/style'

export const Container = styled.section<Omit<Props, 'title' | 'games'>>`
  padding-bottom: 32px;
  background-color: ${(props) =>
    props.background === 'black' ? cores.preta : cores.cinza};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'black' ? cores.cinza : cores.preta};
  }
`

export const List = styled.ul`
  @media only screen and (min-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 24px;
  }
`

export const Titulo = styled.h2`
  margin-bottom: 40px;
`
