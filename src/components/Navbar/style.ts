import styled from "styled-components";

export const Container = styled.nav``;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  padding: 1.2rem 0;

  p.title {
    font-size: 1.8rem;
    font-weight: 800;
  }
  div.toggle-theme-container {
    display: flex;
    align-items: center;

    p {
      font-weight: 600;
      margin-left: 0.6rem;
      font-size: 1.2rem;
    }
    &:hover {
      cursor: pointer;
    }
  }
`;
