import { PrimaryButton } from '../Buttons'
import { ContainerWrapper } from '../Container'
import ListaAlfabetica from '../ListaAlfabetica/ListaAlfabetica'
import { Title } from '../Texts'

const ListaContatos = () => {
  return (
    <ContainerWrapper>
      <Title>Contatos</Title>
      <PrimaryButton>Novo Contato</PrimaryButton>
      <ListaAlfabetica />
    </ContainerWrapper>
  )
}

export default ListaContatos
