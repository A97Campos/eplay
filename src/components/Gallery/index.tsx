import { Section } from '../Section'

import { Items, Item } from './style'

import imagemHogwarts from '../../assets/images/image_hogwarts.png'

export const Gallery = () => (
  <Section background="black" title="Galeria">
    <Items>
      <Item>
        <img src={imagemHogwarts} />
      </Item>
      <Item>
        <img src={imagemHogwarts} />
      </Item>
      <Item>
        <img src={imagemHogwarts} />
      </Item>
      <Item>
        <img src={imagemHogwarts} />
      </Item>
    </Items>
  </Section>
)
