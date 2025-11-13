import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const PrimaryButton = styled.button`
  background-color: ${colors.primary};
  padding: 5px 8px;
  font-weight: bold;
  font-size: 12px;
  color: ${colors.offWhite};
  border: none;
  border-radius: 20px;
  width: fit-content;
  cursor: pointer;

  :hover {
    color: ${colors.emphasis};
  }
`
