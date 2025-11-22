import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container } from './components/Container'
import DadosContato from './components/DadosContato/DadosContato'
import ListaContatos from './components/ListaContatos/ListaContatos'
import GlobalStyles from './styles/globalStyles'
import NovoContato from './components/NovoContato/NovoContato'

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Container>
          <ListaContatos />
          <Routes>
            <Route path="/" element={<DadosContato />} />
            <Route path="/novo" element={<NovoContato />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  )
}

export default App
