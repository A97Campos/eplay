import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.button`
  border: 2px solid ${cores.branca};
  color: ${cores.branca};
  border-radius: 8px;
  background: transparent;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: bold;
`

export const ButtonLink = styled(Link)`
  border: 2px solid ${cores.branca};
  color: ${cores.branca};
  border-radius: 8px;
  background: transparent;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: bold;
`
