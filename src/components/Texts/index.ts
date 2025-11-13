import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  color: ${colors.primary};
`
export const Subtitle = styled(Title).attrs({ as: 'h2' })`
  font-size: 24px;
  color: ${colors.secondary};
`
