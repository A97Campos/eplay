import { Imagem, Preco, Titulo } from './style'

import bannerImg from '../../assets/images/banner-homem-aranha.png'
import { Tags } from '../Tags'
import { Button } from '../Button'

export const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Tags size="big">Destaque do dia</Tags>
      <div>
        <Titulo>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</Titulo>
        <Preco>
          De <span>R$ 250,00</span>
          <br />
          por apenas R$ 99,90
        </Preco>
      </div>
      <Button type="link" to="/produto" title="clique para aproveitar a oferta">
        Aproveitar
      </Button>
    </div>
  </Imagem>
)
