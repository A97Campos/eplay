import { Tags } from '../Tags'
import starWars from '../../assets/images/star_wars.png'
import { CartContainer, Overlay, Sidebar } from './style'

export const Cart = () => {
  return (
    <CartContainer>
      <Overlay />
      <Sidebar>
        <div>
          <ul>
            <li>
              <img src={starWars} />
              <div>
                <h3>nome do jogo</h3>
                <Tags>RPG</Tags>
                <Tags>PS5</Tags>
                <p>R$ 190,90</p>
              </div>
            </li>
          </ul>
        </div>
        <p>2 jogo(s) no carrinho</p>
        <p>
          Total de R$ 381,80
          <span>em até 6x sem juros</span>
        </p>
      </Sidebar>
    </CartContainer>
  )
}
