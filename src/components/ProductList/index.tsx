import { Product } from '../Product'
import { List, Container, Titulo } from './styles'
import { Game } from '../../models/Game'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
}

export const ProductList = ({ title, background, games }: Props) => (
  <Container background={background}>
    <div className="container">
      <Titulo>{title}</Titulo>
      <List>
        {games.map((game) => (
          <Product
            key={game.id}
            category={game.category}
            description={game.description}
            image={game.image}
            infos={game.infos}
            system={game.system}
            title={game.title}
          />
        ))}
      </List>
    </div>
  </Container>
)
