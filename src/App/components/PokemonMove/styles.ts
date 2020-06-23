import styled from "styled-components";
import { darken } from "polished";

interface ContainerProps {
  color?: string;
}

export const Container = styled.div<ContainerProps>`
  margin: 0 8px;
  padding: 8px 16px;
  background: ${({ theme, color }) =>
    color ? darken(0.05, color) : theme.primary.light};
  border-radius: 8px;
  + div {
    margin-top: 8px;
  }

  > div {
    :nth-of-type(1) {
      > h4 {
        margin-right: 8px;
      }
      display: flex;
      align-items: center;
      margin-bottom: 8px;
    }
  }
`;
