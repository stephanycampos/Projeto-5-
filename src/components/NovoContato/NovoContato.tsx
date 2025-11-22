import { useNavigate } from 'react-router-dom'
import { AlertButton, SecondaryButton } from '../Buttons'
import { ContainerWrapper } from '../Container'
import { DadosContainer } from '../DadosContato/styles'
import { ActionsButtonsForm, FormNewContact, InputNewContact } from './styles'
import { Text } from '../Texts'

const NovoContato = () => {
  const navigate = useNavigate()

  return (
    <ContainerWrapper>
      <DadosContainer>
        <Text>Novo Contato</Text>
        <FormNewContact>
          <label htmlFor="nome">Nome</label>
          <InputNewContact type="text" id="nome" />
          <label htmlFor="telefone">Telefone</label>
          <InputNewContact type="number" id="telefone" />
          <label htmlFor="e-mail">E-mail</label>
          <InputNewContact type="text" id="e-mail" />
          <ActionsButtonsForm>
            <SecondaryButton type="submit">Salvar</SecondaryButton>
            <AlertButton onClick={() => navigate('/')}>Cancelar</AlertButton>
          </ActionsButtonsForm>
        </FormNewContact>
      </DadosContainer>
    </ContainerWrapper>
  )
}

export default NovoContato
