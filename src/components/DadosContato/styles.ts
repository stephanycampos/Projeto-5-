import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const DadosContainer = styled.div`
  display: block;
  text-align: center;
  margin: 0 auto;
  padding: 30px;
  background-color: ${colors.tertiary};
  border: 1px solid ${colors.secondary};
  border-radius: 20px;
`

export const DadosLetra = styled.span`
  font-weight: bold;
  font-size: 128px;
  display: flex;
  width: 200px;
  height: 200px;
  align-items: center;
  justify-content: center;
  border: 1px solid ${colors.primary};
  border-radius: 50%;
  margin-bottom: 24px;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: left;
  padding: 12px;
  margin-top: 24px;
  margin-bottom: 24px;
  background-color: ${colors.offWhite};
  border-radius: 8px;
`

export const ActionsContainer = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
`
