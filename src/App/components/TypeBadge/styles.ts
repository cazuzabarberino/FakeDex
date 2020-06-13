import styled from "styled-components";
import colorByType from "../../global/colorByType";

interface ContainerProps {
  type: string;
}

export const Container = styled.div<ContainerProps>`
  background: ${({ type }) => colorByType[type]};
  color: #fff;
  width: 80px;
  padding: 8px 16px;
  border-radius: 32px;

  display: grid;
  place-content: center;
  font-weight: 700;
`;
