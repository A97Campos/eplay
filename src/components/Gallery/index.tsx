import { Section } from '../Section'

import { Items, Item, Action } from './style'

import imagemHogwarts from '../../assets/images/image_hogwarts.png'
import hogwartsFundo from '../../assets/images/fundo_hogwarts.png'
import zoom from '../../assets/images/zoom.png'
import play from '../../assets/images/play.png'

type GalleryItem = {
  type: 'image' | 'video'
  url: string
}

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: imagemHogwarts
  },
  {
    type: 'image',
    url: hogwartsFundo
  },
  {
    type: 'video',
    url: 'https://youtu.be/25y1b5yHi18?si=-B68oub4Cz9oaCjs'
  }
]

type Props = {
  defaultCover: string
  nome: string
}
export const Gallery = ({ defaultCover, nome }: Props) => {
  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }
  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }

  return (
    <Section background="black" title="Galeria">
      <Items>
        {mock.map((media, index) => (
          <Item key={media.url}>
            <img
              src={getMediaCover(media)}
              alt={`Midia ${index + 1} de nome do jogo`}
            />
            <Action>
              <img src={getMediaIcon(media)} alt={nome} />
            </Action>
          </Item>
        ))}
      </Items>
    </Section>
  )
}
