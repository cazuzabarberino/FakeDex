import styled, { keyframes, css } from "styled-components";
import colorByType from "../../global/colorByType";

interface ContainerProps {
  x: number;
  y: number;
  width: number;
  height: number;
  animate: boolean;
}

const expandAnimation = (
  x: number,
  y: number,
  width: number,
  height: number
) => keyframes`
  from {
    left: ${x + "px"};
    top: ${y + "px"};
    width: ${width + "px"};
    height: ${height + "px"};
  }

  to {
    top: 64px;
    left: 0;
    width: 100vw;
    height: calc(100vh - 64px);
    overflow: auto;
  }
`;

export const Container = styled.div<ContainerProps>`
  font-family: "Roboto Slab", monospace;
  position: fixed;
  z-index: 3;
  opacity: 0;
  overflow: hidden;

  ${({ x, y, width, height, animate }) =>
    animate &&
    css`
      opacity: 1;
      animation: ${expandAnimation(x, y, width, height)} 0.3s ease-out forwards;
    `}
`;

interface ReverseContainerProps {
  animatonEnded: boolean;
}

export const ReverseContainer = styled(Container)<ReverseContainerProps>`
  animation-direction: reverse;

  ${({ animatonEnded }) =>
    animatonEnded &&
    css`
      pointer-events: none;
      opacity: 0;
    `}
`;

export const Visual = styled.div`
  position: relative;
  background: ${({ theme }) => theme.primary.dark};
  border-radius: 8px;
  min-height: 100vh;
  width: 100%;

  display: grid;
  grid-auto-flow: row;
  justify-items: center;
  align-items: center;
  align-content: start;

  > img {
    width: 200px;
    padding: 8px;
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
  place-content: center;
`;

export const AbilityWrapper = styled.div`
  margin-top: 20px;
`;
