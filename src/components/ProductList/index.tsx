import { Game } from '../../pages/Home'
import { Product } from '../Product'
import { List, Container, Titulo } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

export const ProductList = ({ title, background, games }: Props) => {
  const getGameTags = (game: Game) => {
    const tags = []

    if (game.relase_date) {
      tags.push(game.relase_date)
    }

    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`)
    }

    if (game.prices.current) {
      tags.push(formataPreco(game.prices.current))
    }

    return tags
  }

  return (
    <Container background={background}>
      <div className="container">
        <Titulo>{title}</Titulo>
        <List>
          {games.map((game) => (
            <Product
              key={game.id}
              category={game.details.category}
              description={game.description}
              image={game.media.thumbnail}
              infos={getGameTags(game)}
              system={game.details.system}
              title={game.name}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}
