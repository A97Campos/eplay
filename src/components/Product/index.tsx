import { Tags } from '../Tags'
import { Card, Titulo, Descricao, Infos } from './style'

export type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
}

export const Product = ({
  title,
  category,
  system,
  description,
  infos,
  image
}: Props) => (
  <Card>
    <img src={image} />
    <Infos>
      {infos.map((info) => (
        <Tags key={info}>{info}</Tags>
      ))}
    </Infos>
    <Titulo>{title}</Titulo>
    <Tags>{category}</Tags>
    <Tags>{system}</Tags>
    <Descricao>{description}</Descricao>
  </Card>
)
