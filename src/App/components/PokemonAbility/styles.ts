import styled from "styled-components";

export const Container = styled.div`
  margin: 0 8px;
  padding: 8px 16px;
  background: ${({ theme }) => theme.primary.light};
  border-radius: 8px;

  + div {
    margin-top: 8px;
  }

  > div {
    margin-bottom: 8px;
  }

  span {
    font-size: 12px;
    font-weight: 500;
  }
`;
