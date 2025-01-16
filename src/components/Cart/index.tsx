import { useDispatch, useSelector } from 'react-redux'

import { Tags } from '../Tags'
import { Button } from '../Button'
import { formataPreco } from '../ProductList'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'

import {
  CartContainer,
  Overlay,
  Sidebar,
  CartItem,
  Prices,
  Quantity
} from './style'

export const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.prices.current!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'isOpen' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.media.thumbnail} />
              <div>
                <h3>{item.name}</h3>
                <Tags>{item.details.category}</Tags>
                <Tags>{item.details.system}</Tags>
                <p>{formataPreco(item.prices.current)}</p>
              </div>
              <button onClick={() => removeItem(item.id)} type="button" />
            </CartItem>
          ))}
        </ul>
        <div>
          <Quantity>{items.length} jogo(s) no carrinho</Quantity>
          <Prices>
            Total de {formataPreco(getTotalPrice())}
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
