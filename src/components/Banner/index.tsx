import { useEffect, useState } from 'react'
import { Game } from '../../pages/Home'

import { Imagem, Preco, Titulo } from './style'

import { Tags } from '../Tags'
import { Button } from '../Button'

import { formataPreco } from '../ProductList'

export const Banner = () => {
  const [game, setGame] = useState<Game>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/destaque')
      .then((res) => res.json())
      .then((res) => setGame(res))
  }, [])

  if (!game) {
    return <h3>Carregando...</h3>
  }

  return (
    <Imagem style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tags size="big">Destaque do dia</Tags>
        <div>
          <Titulo>{game.name}</Titulo>
          <Preco>
            De <span>{formataPreco(game?.prices.old)}</span>
            <br />
            por apenas {formataPreco(game?.prices.discount)}
          </Preco>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="clique para aproveitar a oferta"
        >
          Aproveitar
        </Button>
      </div>
    </Imagem>
  )
}
