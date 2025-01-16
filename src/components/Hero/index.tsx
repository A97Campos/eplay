import { useDispatch } from 'react-redux'

import { Button } from '../Button'
import { Tags } from '../Tags'

import { formataPreco } from '../ProductList'

import { Game } from '../../pages/Home'
import { add, open } from '../../store/reducers/cart'

import { Banner, Infos } from './style'

type Props = {
  game: Game
}

export const Hero = ({ game }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(game))
    dispatch(open())
  }

  return (
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
              onClick={addToCart}
            >
              Adicionar ao carrinho
            </Button>
          )}
        </Infos>
      </div>
    </Banner>
  )
}
