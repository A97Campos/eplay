import styled from 'styled-components'

export const Imagem = styled.div`
  width: 100%;
  height: 560px;
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding-top: 340px;
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
