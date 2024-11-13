import { useEffect, useState } from 'react'
import { ProductList } from '../../components/ProductList'
import { Game } from '../Home'

export const Categories = () => {
  const [gamesAcao, setGamesAcao] = useState<Game[]>([])
  const [gamesEsportes, setGamesEsportes] = useState<Game[]>([])
  const [gamesLuta, setGamesLuta] = useState<Game[]>([])
  const [gamesRpg, setGamesRpg] = useState<Game[]>([])
  const [gamesSimulacao, setGamesSimulacao] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
      .then((res) => res.json())
      .then((res) => setGamesAcao(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
      .then((res) => res.json())
      .then((res) => setGamesEsportes(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
      .then((res) => res.json())
      .then((res) => setGamesLuta(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
      .then((res) => res.json())
      .then((res) => setGamesRpg(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
      .then((res) => res.json())
      .then((res) => setGamesSimulacao(res))
  })

  return (
    <>
      <ProductList title="Ação" games={gamesAcao} background={'gray'} />
      <ProductList
        title="Esportes"
        games={gamesEsportes}
        background={'black'}
      />
      <ProductList title="Luta" games={gamesLuta} background={'gray'} />
      <ProductList title="Rpg" games={gamesRpg} background={'black'} />
      <ProductList
        title="Simulação"
        games={gamesSimulacao}
        background={'gray'}
      />
    </>
  )
}
