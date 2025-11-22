import { useNavigate } from 'react-router-dom'
import { PrimaryButton } from '../Buttons'
import { ContainerWrapper } from '../Container'
import ListaAlfabetica from '../ListaAlfabetica/ListaAlfabetica'
import { Title } from '../Texts'

const ListaContatos = () => {
  const navigate = useNavigate()

  return (
    <ContainerWrapper>
      <Title>Contatos</Title>
      <PrimaryButton onClick={() => navigate('/novo')}>
        Novo Contato
      </PrimaryButton>
      <ListaAlfabetica />
    </ContainerWrapper>
  )
}

export default ListaContatos
