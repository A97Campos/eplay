import { Game } from '../../pages/Home'

import { Banner, Infos } from './style'
import { Button } from '../Button'
import { Tags } from '../Tags'
import { formataPreco } from '../ProductList'

type Props = {
  game: Game
}

export const Hero = ({ game }: Props) => (
  <>
    <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tags>{game.details.system}</Tags>
          <Tags>{game.details.category}</Tags>
        </div>
        <Infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices.discount && (
              <span>De {formataPreco(game?.prices.old)}</span>
            )}
            {game.prices.current && (
              <>Por {formataPreco(game?.prices.current)}</>
            )}
          </p>
          {game.prices.current && (
            <Button
              type="button"
              title="clique aqui para adiocar esse jogo ao carrinho"
              variant="primary"
            >
              Adicionar ao carrinho
            </Button>
          )}
        </Infos>
      </div>
    </Banner>
  </>
)
