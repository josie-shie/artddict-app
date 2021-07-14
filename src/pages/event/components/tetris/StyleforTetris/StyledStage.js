import styled from 'styled-components'

export const StyledStage = styled.div`
  display: grid;
  grid-template-rows: repeat(
    ${(props) => props.height},
    calc(25vw / ${(props) => props.width})
  );
  grid-template-columns: repeat(
    ${(props) => props.width},
    1fr
  );
  grid-gap: 0px;
  border: 2px solid white;
  width: 100%;
  max-width: 25vw;
  background: #111;
`
