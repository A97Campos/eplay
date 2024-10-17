import styled from 'styled-components'
import { cores } from '../../styles'

export const ContainerFooter = styled.footer`
  background-color: ${cores.cinza};
  font-size: 14px;
  padding-bottom: 32px;
`

export const SectionFooter = styled.section`
  margin-bottom: 64px;
`

export const Title = styled.h4`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 16px;
`

export const Links = styled.ul`
  display: flex;
`

export const Link = styled.a`
  color: ${cores.cinzaClaro};
  margin-right: 8px;
`
