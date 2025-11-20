import { ContainerInsideFlex } from '../Container'
import { LetraIndice, NomeContato } from './styles'

const Contato = () => {
  return (
    <>
      <ContainerInsideFlex>
        <LetraIndice>A</LetraIndice>
        <NomeContato>Aguilar Abecassis</NomeContato>
      </ContainerInsideFlex>
      <ContainerInsideFlex>
        <LetraIndice>E</LetraIndice>
        <NomeContato>Eugenia Menezes</NomeContato>
      </ContainerInsideFlex>
      <ContainerInsideFlex>
        <LetraIndice>T</LetraIndice>
        <NomeContato>Thiago Sousa</NomeContato>
      </ContainerInsideFlex>
    </>
  )
}

export default Contato
