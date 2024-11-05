import { Container, Titulo } from './style'

export type Props = {
  title: string
  background: 'black' | 'gray'
  children: JSX.Element
}

export const Section = ({ title, background, children }: Props) => (
  <Container background={background}>
    <div className="container">
      <Titulo>{title}</Titulo>
      {children}
    </div>
  </Container>
)
