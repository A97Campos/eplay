import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
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
import { close } from '../../store/reducers/cart'

export const Cart = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  return (
    <CartContainer className={isOpen ? 'isOpen' : ''}>
      <Overlay onClick={closeCart} />
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
            <button type="button" />
          </CartItem>
          <CartItem>
            <img src={starWars} />
            <div>
              <h3>nome do jogo</h3>
              <Tags>RPG</Tags>
              <Tags>PS5</Tags>
              <p>R$ 190,90</p>
            </div>
            <button type="button" />
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
