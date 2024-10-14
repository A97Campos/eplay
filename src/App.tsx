import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Header } from './components/Header'
import { GlobalCss } from './styles'
import { Home } from './pages/Home'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
])

function App() {
  return (
    <div className="App">
      <>
        <GlobalCss />
        <div className="container">
          <Header />
        </div>
        <RouterProvider router={rotas} />
      </>
    </div>
  )
}

export default App
