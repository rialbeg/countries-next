import styled from "styled-components";

export const Container = styled.div`
  width: 22rem;
  border-radius: 5px;
  box-shadow: 0px 0px 12px -8px #000000;

  div.flag {
    border-radius: 5px;
    overflow: hidden;
  }
  div.country-card-info {
    padding: 2rem;
    h2 {
      font-size: 1.5rem;
      font-weight: 800;
      margin-bottom: 1rem;
    }
    p {
      font-size: 1.2rem;
      span {
        font-weight: 600;
      }
    }
  }
`;
