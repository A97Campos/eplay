import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'
import { HeaderBar, Links, LinkItem, LinkCard } from './style'

export const Header = () => (
  <HeaderBar>
    <div>
      <img src={logo} alt="EPLAY" />
      <nav>
        <Links>
          <LinkItem>
            <a href="#">Categorias</a>
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
    <LinkCard>
      0 produto(s)
      <img src={carrinho} alt="Carrinho de compras" />
    </LinkCard>
  </HeaderBar>
)
