import { ProductList } from '../../components/ProductList'
import { Game } from '../../models/Game'

import resident from '../../assets/images/resident.png'
import starWars from '../../assets/images/star_wars.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import fifa from '../../assets/images/fifa.png'
import streetFighter from '../../assets/images/streetFighter.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4',
    system: 'Windows, Ps5 e Xbox',
    infos: ['10%', 'R$250,00'],
    image: resident
  },
  {
    id: 2,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4',
    system: 'Windows, Ps5 e Xbox',
    infos: ['-10%', 'R$250,00'],
    image: resident
  },
  {
    id: 3,
    category: 'Esporte',
    description:
      'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
    title: 'Fifa 23',
    system: 'Windows, Ps5 e Xbox',
    infos: ['-50%', 'R$99,00'],
    image: fifa
  },
  {
    id: 4,
    category: 'Esporte',
    description:
      'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
    title: 'Fifa 23',
    system: 'Windows, Ps5 e Xbox',
    infos: ['-50%', 'R$99,00'],
    image: fifa
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    title: 'Diablo IV',
    system: 'Windows',
    infos: ['05/04'],
    image: diablo
  },
  {
    id: 6,
    category: 'Aventura',
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    title: 'Star Wars Jedi Survivor',
    system: 'Windows',
    infos: ['05/04'],
    image: starWars
  },
  {
    id: 7,
    category: 'Luta',
    description:
      'Street Fighter 6 é um próximo jogo de luta desenvolvido e publicado pela Capcom.',
    title: 'Street Fighter 6',
    system: 'Windows',
    infos: ['05/04'],
    image: streetFighter
  },
  {
    id: 8,
    category: 'RPG',
    description:
      'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™...',
    title: 'The Legend of Zelda - TOK',
    system: 'Switch',
    infos: ['05/04'],
    image: zelda
  }
]

export const Categories = () => (
  <>
    <ProductList title="RPG" games={promocoes} background={'gray'} />
    <ProductList title="Ação" games={emBreve} background={'black'} />
    <ProductList title="Aventura" games={promocoes} background={'gray'} />
    <ProductList title="FPS" games={emBreve} background={'black'} />
  </>
)
