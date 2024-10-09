import { Imagem, Preco, Titulo } from './style'

import bannerImg from '../../assets/images/banner-homem-aranha.png'

export const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <div>
        <Titulo>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</Titulo>
        <Preco>
          De <span>R$ 250,00</span>
          <br />
          por apenas R$ 99,90
        </Preco>
      </div>
    </div>
  </Imagem>
)
