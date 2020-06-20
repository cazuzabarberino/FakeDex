import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 64px;
  background: ${({ theme }) => theme.secondary.dark};
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  box-shadow: 0px 2px rgba(0, 0, 0, 0.2);
`;
