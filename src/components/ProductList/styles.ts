import styled from 'styled-components'

import { Props } from '.'
import { breakpoint, cores } from '../../styles'
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
  display: grid;
  column-gap: 24px;

  @media only screen and (min-width: ${breakpoint.tablet}) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (min-width: ${breakpoint.desktop}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`

export const Titulo = styled.h2`
  margin-bottom: 40px;
`
