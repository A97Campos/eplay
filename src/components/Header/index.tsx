import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { open } from '../../store/reducers/cart'
import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'
import { HeaderBar, Links, LinkItem, CartButton } from './style'

export const Header = () => {
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderBar>
      <div>
        <Link to="/">
          <img src={logo} alt="EPLAY" />
        </Link>
        <nav>
          <Links>
            <LinkItem>
              <Link to="/categories">Categorias</Link>
            </LinkItem>
            <LinkItem>
              <a href="#">Novidades</a>
            </LinkItem>
            <LinkItem>
              <a href="#">Promoções</a>
            </LinkItem>
          </Links>
        </nav>
      </div>
      <CartButton onClick={openCart}>
        0 produto(s)
        <img src={carrinho} alt="Carrinho de compras" />
      </CartButton>
    </HeaderBar>
  )
}
