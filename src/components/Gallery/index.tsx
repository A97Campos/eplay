import { Section } from '../Section'

import { Items, Item, Action, Modal, ModalContent } from './style'

import imagemHogwarts from '../../assets/images/image_hogwarts.png'
import hogwartsFundo from '../../assets/images/fundo_hogwarts.png'

import zoom from '../../assets/images/zoom.png'
import play from '../../assets/images/play.png'
import fechar from '../../assets/images/fechar.png'
import { useState } from 'react'
import { isVisible } from '@testing-library/user-event/dist/utils'

interface GalleryItem {
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
    url: 'https://www.youtube.com/embed/25y1b5yHi18?si=lO0X56mILNM4bnRG&amp;controls=0'
  }
]

type Props = {
  defaultCover: string
  nome: string
}

interface ModalState extends GalleryItem {
  isVisible: boolean
}

export const Gallery = ({ defaultCover, nome }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: ''
  })

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }
  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }

  const closeModal = () => {
    setModal({
      isVisible: false,
      type: 'image',
      url: ''
    })
  }

  return (
    <>
      <Section background="black" title="Galeria">
        <Items>
          {mock.map((media, index) => (
            <Item
              key={media.url}
              onClick={() => {
                setModal({
                  isVisible: true,
                  type: media.type,
                  url: media.url
                })
              }}
            >
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
      <Modal
        className={modal.isVisible ? 'visivel' : ''}
        onClick={() => closeModal()}
      >
        <ModalContent className="container">
          <header>
            <h4>{nome}</h4>
            <img
              src={fechar}
              alt="Botao de fechar"
              onClick={() => closeModal()}
            />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} alt="" />
          ) : (
            <iframe src={modal.url} />
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
