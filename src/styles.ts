import { createGlobalStyle } from 'styled-components'

export const cores = {
  preta: '#111111',
  cinza: '#333',
  verde: '#10AC84',
  branca: '#EEEEEE',
  cinzaClaro: '#A3A3A3'
}

export const GlobalCss = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Roboto", sans-serif;
      list-style-type: none;
      text-decoration: none;
      color: ${cores.branca};
}

body {
  background-color: ${cores.preta};
}

.container {
  max-width: 1024px;
  width: 80%;
  margin: 0 auto;
  padding-top: 40px;

  @media only screen and (min-width: 600px) {
    width: 100%;
  }
}
`
