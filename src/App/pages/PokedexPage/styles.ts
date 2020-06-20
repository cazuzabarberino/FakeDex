import styled from "styled-components";

export const Container = styled.div`
  padding: 84px 20px 20px 20px;
`;

export const PokemonCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  /* grid-template-columns: 1fr; */
  column-gap: 8px;
  row-gap: 8px;
`;
