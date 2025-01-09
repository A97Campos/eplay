import styled from 'styled-components'
import { cores } from '../../styles'

export const Row = styled.div`
  display: flex;
  column-gap: 24px;
`

export const InfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: auto;

  label {
    font-size: 14px;
    margin: 8px 0;
  }

  input {
    height: 32px;
    padding: 0 8px;
    border: 1px solid ${cores.branca};
    background-color: ${cores.branca};
    color: ${cores.preta};
    widht: 100%;
  }
`
