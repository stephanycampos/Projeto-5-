import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  max-width: 70%;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr;
  padding: 100px;
  gap: 32px;
`
export const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`

export const ContainerInsideFlex = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`
