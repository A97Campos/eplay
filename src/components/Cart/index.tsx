import { Tags } from '../Tags'
import starWars from '../../assets/images/star_wars.png'
import {
  CartContainer,
  Overlay,
  Sidebar,
  CartItem,
  Prices,
  Quantity
} from './style'
import { Button } from '../Button'

export const Cart = () => {
  return (
    <CartContainer>
      <Overlay />
      <Sidebar>
        <ul>
          <CartItem>
            <img src={starWars} />
            <div>
              <h3>nome do jogo</h3>
              <Tags>RPG</Tags>
              <Tags>PS5</Tags>
              <p>R$ 190,90</p>
            </div>
          </CartItem>
          <CartItem>
            <img src={starWars} />
            <div>
              <h3>nome do jogo</h3>
              <Tags>RPG</Tags>
              <Tags>PS5</Tags>
              <p>R$ 190,90</p>
            </div>
          </CartItem>
        </ul>
        <div>
          <Quantity>2 jogo(s) no carrinho</Quantity>
          <Prices>
            Total de R$ 381,80
            <span>em até 6x sem juros</span>
          </Prices>
        </div>
        <Button type="button" title="Continuar a compra">
          Continuar a compra
        </Button>
      </Sidebar>
    </CartContainer>
  )
}
