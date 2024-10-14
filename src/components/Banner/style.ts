import styled from 'styled-components'
import { TagsContainer } from '../Tags/style'

export const Imagem = styled.div`
  width: 100%;
  height: 560px;
  padding: 32px 0 56px 0;
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  .container {
    position: relative;
    padding-top: 340px;
    max-height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  ${TagsContainer} {
    position: absolute;
    top: 0;
  }
`

export const Titulo = styled.h2`
  font-size: 32px;
  max-width: 450px;
`

export const Preco = styled.p`
  font-size: 24px;
  margin-top: 24px;
  span {
    text-decoration: line-through;
  }
`
