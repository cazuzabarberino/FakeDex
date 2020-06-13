import styled from "styled-components";
import colorByType from "../../global/colorByType";

export const Container = styled.div`
  width: 250px;
  background: ${({ theme }) => theme.secondary};
  font-family: "Roboto Slab", monospace;

  display: grid;
  grid-auto-flow: row;
  justify-items: center;
  /* row-gap: 8px; */

  /* padding: 16px; */
  border-radius: 8px;

  > img {
    width: 100%;
  }
`;

function gradientColor(types: string[]) {
  let color = "";

  types.forEach((type, i) => {
    if (i > 0) color += ", ";
    color += colorByType[type];
  });

  return color;
}

interface CardHeaderProps {
  types: string[];
}

export const CardHeader = styled.div<CardHeaderProps>`
  position: relative;
  border-radius: 8px 8px 0 0;
  width: 100%;
  padding: 8px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ types }) =>
    types.length > 1
      ? `linear-gradient(90deg, ${gradientColor(types)})`
      : colorByType[types[0]]};

  > h3 {
    position: absolute;
    left: 8px;
    top: 100%;
  }
`;

export const BadgeWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  column-gap: 16px;
  margin-bottom: 16px;
`;
