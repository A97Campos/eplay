import { Link, Links, ContainerFooter, SectionFooter, Title } from './style'

const current = new Date().getFullYear()

export const Footer = () => (
  <ContainerFooter>
    <div className="container">
      <SectionFooter>
        <Title>Categorias</Title>
        <Links>
          <li>
            <Link href="#">RPG</Link>
          </li>
          <li>
            <Link href="#">Ação</Link>
          </li>
          <li>
            <Link href="#">Aventura</Link>
          </li>
          <li>
            <Link href="#">Esportes</Link>
          </li>
          <li>
            <Link href="#">Simulação</Link>
          </li>
          <li>
            <Link href="#">Estratégia</Link>
          </li>
          <li>
            <Link href="#">FPS</Link>
          </li>
        </Links>
      </SectionFooter>
      <SectionFooter>
        <Title>Acesso rápido</Title>
        <Links>
          <li>
            <Link href="#">Novidades</Link>
          </li>
          <li>
            <Link href="#">Promoções</Link>
          </li>
          <li>
            <Link href="#">Em breve</Link>
          </li>
        </Links>
      </SectionFooter>
      <p>{current} - &copy; E-PLAY Todos os direitos reservados</p>
    </div>
  </ContainerFooter>
)
