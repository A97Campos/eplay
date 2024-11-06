import { useParams } from 'react-router-dom'
import { Hero } from '../../components/Hero'
import { Section } from '../../components/Section'
import { Gallery } from '../../components/Gallery'

import residentEvil from '../../assets/images/resident.png'

export const Product = () => {
  const { id } = useParams()

  return (
    <>
      <Hero />
      <Section background="black" title="Sobre o jogo">
        <p>
          Hogwarts Legacy é um RPG de ação imersivo e de mundo aberto ambientado
          no mundo introduzido pela primeira vez nos livros do Harry Potter.
          Embarque em uma jornada por locais novos e familiares enquanto explora
          e descubra animais fantásticos, personalize seu personagem e crie
          poções, domine o lançamento de feitiços, aprimore talentos e torne-se
          o bruxo que deseja ser.Experimente Hogwarts da década de 1800. Seu
          personagem é um estudante com chave de um antigo segredo que ameaça
          destruir o mundo bruxo. Faça aliados, lute contra os bruxos das trevas
          e decida o destino do mundo bruxo. Seu legado é o que você faz dele.
          Viva o Inesperado.
        </p>
      </Section>
      <Section background="gray" title="Mais detalhes">
        <ul>
          <li>
            <b>Plataforma:</b> Playstation 5
          </li>
          <li>
            <b>Desenvolvedor:</b> Avalanche Software 5
          </li>
          <li>
            <b>Editora:</b> Portkey Games, subsidiária da Warner Bros.
            Interactive Entertainment
          </li>
          <li>
            <b>Idiomas:</b> O jogo oferece suporte a diversos idiomas, incluindo
            inglês, espanhol, francês, alemão, italiano, português, entre
            outros. As opções de áudio e legendas podem ser ajustadas nas
            configurações do jogo
          </li>
        </ul>
      </Section>
      <Gallery nome="Nome do jogo" defaultCover={residentEvil} />
    </>
  )
}