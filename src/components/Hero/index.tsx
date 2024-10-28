import { Banner, Infos } from './style'
import { Button } from '../Button'
import { Tags } from '../Tags'

import bannerImg from '../../assets/images/fundo_hogwarts.png'

export const Hero = () => (
  <>
    <Banner style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="container">
        <div>
          <Tags>PS5</Tags>
          <Tags>RPG</Tags>
        </div>
        <Infos>
          <h2>Hogwarts Legacy</h2>
          <p>
            <span>De R$290,90</span>
            Por R$190,90
          </p>
          <Button
            type="button"
            title="clique aqui para adiocar esse jogo ao carrinho"
            variant="primary"
          >
            Adicionar ao carrinho
          </Button>
        </Infos>
      </div>
    </Banner>
  </>
)
