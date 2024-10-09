import { Banner } from './components/Banner'
import { Header } from './components/Header'
import { GlobalCss } from './styles'

function App() {
  return (
    <div className="App">
      <>
        <GlobalCss />
        <div className="container">
          <Header />
        </div>
        <Banner />
      </>
    </div>
  )
}

export default App
