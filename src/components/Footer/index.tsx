import { Link, Links, ContainerFooter, SectionFooter, Title } from './style'

const current = new Date().getFullYear()

export const Footer = () => (
  <ContainerFooter>
    <div className="container">
      <SectionFooter>
        <Title>Categorias</Title>
        <Links>
          <li>
            <Link to="/categories#rpg">RPG</Link>
          </li>
          <li>
            <Link to="/categories#action">Ação</Link>
          </li>
          <li>
            <Link to="/categories#sports">Esportes</Link>
          </li>
          <li>
            <Link to="/categories#simulation">Simulação</Link>
          </li>
          <li>
            <Link to="/categories#fight">Luta</Link>
          </li>
        </Links>
      </SectionFooter>
      <SectionFooter>
        <Title>Acesso rápido</Title>
        <Links>
          <li>
            <Link to="#on-sale">Promoções</Link>
          </li>
          <li>
            <Link to="#coming-soon">Em breve</Link>
          </li>
        </Links>
      </SectionFooter>
      <p>{current} - &copy; E-PLAY Todos os direitos reservados</p>
    </div>
  </ContainerFooter>
)
