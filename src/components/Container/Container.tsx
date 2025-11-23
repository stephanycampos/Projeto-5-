import { Outlet } from 'react-router-dom'
import { ContainerGeneral } from './styles'
import ListaContatos from '../ListaContatos/ListaContatos'

export const Container = () => {
  return (
    <ContainerGeneral>
      <ListaContatos />
      <Outlet />
    </ContainerGeneral>
  )
}
