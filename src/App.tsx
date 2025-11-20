import { Container } from './components/Container'
import DadosContato from './components/DadosContato/DadosContato'
import ListaContatos from './components/ListaContatos/ListaContatos'
import GlobalStyles from './styles/globalStyles'

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <ListaContatos />
        <DadosContato />
      </Container>
    </>
  )
}

export default App
