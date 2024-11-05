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

  p,
  ul {
    font-size: 14px;
    line-height: 22px;
    max-width: 640px;
  }
`

export const Titulo = styled.h2`
  margin-bottom: 40px;
`
