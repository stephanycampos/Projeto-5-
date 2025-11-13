import { Container } from './components/Container'
import ListaContatos from './components/ListaContatos/ListaContatos'
import GlobalStyles from './styles/globalStyles'

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <ListaContatos />
        <div>Dados do Contato</div>
      </Container>
    </>
  )
}

export default App
