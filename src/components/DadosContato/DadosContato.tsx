import { AlertButton, PrimaryButton, SecondaryButton } from '../Buttons'
import { Line } from '../ListaAlfabetica/styles'
import { EmphasisText, EmphasisTitle, Text } from '../Texts'
import * as S from './styles'

const DadosContato = () => {
  return (
    <S.DadosContainer>
      <S.DadosLetra>T</S.DadosLetra>
      <EmphasisTitle>Thiago Sousa</EmphasisTitle>
      <S.InfoContainer>
        <EmphasisText>Telefone:</EmphasisText>
        <Text>+55 92 98100-0000</Text>
        <Line />
        <EmphasisText>E-mail:</EmphasisText>
        <Text>thiago@gmail.com</Text>
      </S.InfoContainer>
      <S.ActionsContainer>
        <PrimaryButton>Editar</PrimaryButton>
        <SecondaryButton>Salvar</SecondaryButton>
        <AlertButton>Excluir</AlertButton>
      </S.ActionsContainer>
    </S.DadosContainer>
  )
}

export default DadosContato
