import { createGlobalStyle } from 'styled-components'

const cores = {
  preta: '#111111',
  cinza: '#333',
  verde: '#10AC84',
  branca: '#EEEEEE'
}

export const GlobalCss = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Roboto", sans-serif;
}

body {
  background-color: ${cores.preta};
  color: ${cores.branca};
}
`
