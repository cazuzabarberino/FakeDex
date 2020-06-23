import styled from "styled-components";
import { setColorByStat } from "../../global/setColorByStat";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  align-items: flex-start;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;

    + div {
      margin-top: 4px;
    }

    > p {
      font-size: 16px;

      :nth-of-type(1) {
        width: 75px;
        text-align: right;
      }
    }
  }
`;

interface StatValueProps {
  statValue: number;
}

export const StatValue = styled.div<StatValueProps>`
  padding: 4px 8px;
  margin-left: 4px;
  background: ${({ theme }) => theme.primary.light};
  text-align: left;
  border-radius: 4px;
  width: 200px;
  position: relative;

  > div {
    position: absolute;
    top: 0;
    left: 0;
    width: ${({ statValue }) => statValue}px;
    height: 100%;
    border-radius: 4px;
    background: ${({ statValue }) => setColorByStat(statValue)};
    display: flex;
    align-items: center;
    padding: 4px 8px;
  }
`;
