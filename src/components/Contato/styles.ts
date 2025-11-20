import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const LetraIndice = styled.span`
  font-weight: bold;
  font-size: 24px;
  padding: 2px 8px;
  color: ${colors.offWhite};
  background-color: ${colors.primary};
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: ${colors.primary};
    opacity: 0.8;
  }
`

export const NomeContato = styled.span`
  font-weight: 600;
  font-size: 16px;
  color: ${colors.secondary};
  cursor: pointer;

  &:hover {
    color: ${colors.primary};
    opacity: 0.8;
  }
`
