import { useParams } from 'react-router-dom'

import { Hero } from '../../components/Hero'
import { Section } from '../../components/Section'
import { Gallery } from '../../components/Gallery'

import { useGetGameQuery } from '../../services/api'

export const Product = () => {
  const { id } = useParams()

  const { data: game } = useGetGameQuery(id!)

  if (!game) {
    return <h3>...Carregando</h3>
  }

  return (
    <>
      <Hero game={game} />
      <Section background="black" title="Sobre o jogo">
        <p>{game?.description}</p>
      </Section>
      <Section background="gray" title="Mais detalhes">
        <ul>
          <li>
            <b>Plataforma:</b> {game?.details.system}
          </li>
          <li>
            <b>Desenvolvedor:</b> {game?.details.developer}
          </li>
          <li>
            <b>Editora:</b> {game?.details.publisher}
          </li>
          <li>
            <b>Idiomas:</b> O jogo oferece suporte a diversos idiomas, incluindo
            {game?.details.languages.join(', ')}
          </li>
        </ul>
      </Section>
      <Gallery
        nome={game.name}
        defaultCover={game.media.cover}
        items={game.media.gallery}
      />
    </>
  )
}
