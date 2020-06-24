import styled, { css } from "styled-components";
import { darken } from "polished";

interface ContainerProps {
  color?: string;
  open: boolean;
}

export const Container = styled.div<ContainerProps>`
  margin: 0 8px;
  padding: 8px 16px;
  background: ${({ theme, color }) =>
    color ? darken(0.05, color) : theme.primary.light};
  border-radius: 8px;

  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  column-gap: 8px;
  row-gap: 8px;
  grid-template-rows: 1fr;
  overflow-y: hidden;

  transition: 0.25s ease-out;
  max-height: 48px;

  ${({ open }) =>
    open &&
    css`
      transition: 0.25s ease-in;
      max-height: 200px;
    `};

  cursor: pointer;

  + div {
    margin-top: 8px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > h4 {
    margin-right: 8px;
  }

  > div {
    display: grid;
    grid-auto-flow: row;
    row-gap: 8px;
  }
`;

export const MoveInfo = styled.div`
  display: flex;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.primary.light};
    padding: 8px;
    border-radius: 16px;
    width: 60px;

    > p {
      font-size: 12px;
    }

    + div {
      margin-left: 8px;
    }
  }
`;

interface MoveEffectProps {
  attack: boolean;
}

export const MoveEffect = styled.div<MoveEffectProps>`
  grid-column: 1 / ${({ attack }) => (!attack ? 2 : 3)};
`;

export const MoveTypeAndBadge = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
`;

export const MoveTypeContainer = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  align-self: flex-start;

  background: ${({ theme }) => theme.primary.light};
  color: #fff;
  font-size: 14px;
  width: 80px;
  padding: 8px 16px;
  border-radius: 32px;

  display: grid;
  place-content: center;
  font-weight: 700;
`;
