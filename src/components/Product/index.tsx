import { Tags } from '../Tags'
import { Card, Titulo, Descricao, Infos } from './style'

export type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
  id: number
}

export const Product = ({
  title,
  category,
  system,
  description,
  infos,
  image,
  id
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 95) {
      return descricao.slice(0, 92) + '...'
    }
  }
  return (
    <Card to={`/product/${id}`}>
      <img src={image} />
      <Infos>
        {infos.map((info) => (
          <Tags key={info}>{info}</Tags>
        ))}
      </Infos>
      <Titulo>{title}</Titulo>
      <Tags>{category}</Tags>
      <Tags>{system}</Tags>
      <Descricao>{getDescricao(description)}</Descricao>
    </Card>
  )
}
