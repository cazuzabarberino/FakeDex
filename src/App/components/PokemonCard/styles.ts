import styled from "styled-components";
import colorByType from "../../global/colorByType";

export const Container = styled.div``;

export const Visual = styled.div`
  font-family: "Roboto Slab", monospace;
  position: relative;
  background: ${({ theme }) => theme.primary.dark};
  border-radius: 8px;

  cursor: pointer;

  display: grid;
  grid-auto-flow: row;
  justify-items: center;

  > img {
    width: 200px;
    padding: 8px;
  }

  transition: 0.2s ease-out, width 0.5s;
  box-shadow: 0 0 black;
  :hover {
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.5);
    transform: translateY(-8px) scale(1.05);
    z-index: 1;
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

  text-align: center;

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
