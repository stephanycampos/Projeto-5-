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

  &:hover {
    background-color: ${colors.primary};
    opacity: 0.8;
  }
`
export const SecondaryButton = styled(PrimaryButton)`
  background-color: ${colors.emphasis};

  &:hover {
    background-color: ${colors.emphasis};
    opacity: 0.8;
  }
`
export const AlertButton = styled(PrimaryButton)`
  background-color: ${colors.alertPrimary};

  &:hover {
    background-color: ${colors.alertPrimary};
    opacity: 0.8;
  }
`
