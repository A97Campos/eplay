import { useState } from 'react'

import { Section } from '../Section'

import { GalleryItem } from '../../pages/Home'

import zoom from '../../assets/images/zoom.png'
import play from '../../assets/images/play.png'
import fechar from '../../assets/images/fechar.png'

import { Items, Item, Action, Modal, ModalContent } from './style'

type Props = {
  defaultCover: string
  nome: string
  items: GalleryItem[]
}

interface ModalState extends GalleryItem {
  isVisible: boolean
}

export const Gallery = ({ defaultCover, nome, items }: Props) => {
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
          {items.map((media, index) => (
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
