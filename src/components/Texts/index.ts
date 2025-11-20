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
export const Text = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: ${colors.secondary};
`

export const EmphasisText = styled(Text)`
  font-size: 12px;
  font-weight: 700;
  color: ${colors.primary};
`

export const EmphasisTitle = styled(Title).attrs({ as: 'h3' })`
  font-size: 20px;
  color: ${colors.primary};
`
