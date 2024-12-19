import { useEffect, useState } from 'react'
import { ProductList } from '../../components/ProductList'
import { Game } from '../Home'
import {
  useGetActionGamesQuery,
  useGetFightGameQuery,
  useGetRpgGameQuery,
  useGetSportGamesQuery,
  useGetSimulationGameQuery
} from '../../services/api'

export const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: fightGames } = useGetFightGameQuery()
  const { data: rpgGames } = useGetRpgGameQuery()
  const { data: simulationGames } = useGetSimulationGameQuery()
  const { data: sportGames } = useGetSportGamesQuery()

  if (actionGames && fightGames && rpgGames && simulationGames && sportGames) {
    return (
      <>
        <ProductList title="Ação" games={actionGames} background={'gray'} />
        <ProductList title="Esportes" games={sportGames} background={'black'} />
        <ProductList title="Luta" games={fightGames} background={'gray'} />
        <ProductList title="Rpg" games={rpgGames} background={'black'} />
        <ProductList
          title="Simulacão"
          games={simulationGames}
          background={'gray'}
        />
      </>
    )
  }
  return <h4>Carregando...</h4>
}
