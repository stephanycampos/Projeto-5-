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
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    background-color: ${colors.primary};
  }
`
export const SecondaryButton = styled(PrimaryButton)`
  background-color: ${colors.emphasis};
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    background-color: ${colors.emphasis};
  }
`
export const AlertButton = styled(PrimaryButton)`
  background-color: ${colors.alertPrimary};
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    background-color: ${colors.alertPrimary};
  }
`
