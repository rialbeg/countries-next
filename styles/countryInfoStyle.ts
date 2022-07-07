import styled from "styled-components";

export const Button = styled.div`
  font-size: 1.4rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  box-shadow: 0px 0px 12px -8px #000000;
  width: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  &:hover {
    cursor: pointer;
  }
`;

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export const Content = styled.div`
  margin-top: 4rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 830px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const CountryInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 2rem 0 2rem 2rem;

  h1 {
    margin-bottom: 2rem;
  }
  div.country-info-attr {
    display: flex;
    margin-bottom: 3rem;
    div.column-1 {
      /* margin-right: 2rem; */
    }
    div.column-2 {
      margin-left: 2rem;
    }
    p {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
      span {
        font-size: 1.4rem;
        font-weight: 600;
      }
    }
    @media (max-width: 830px) {
      flex-direction: column;
      div.column-2 {
        margin-left: 0;
      }
    }
  }
`;

export const BorderCountries = styled.div`
  div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 1fr;
    gap: 0.5rem;
    text-align: center;
  }
  p {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
`;

export const CountryButton = styled.p`
  font-size: 1.2rem;
  padding: 0.5rem 1rem;

  border-radius: 5px;
  box-shadow: 0px 0px 12px -8px #000000;
  width: 9rem;
  /* height: 5rem; */
  display: flex;
  justify-content: center;
  align-items: center;
  /* text-align: center; */
  /* margin: 0 0.5rem; */
  &:hover {
    cursor: pointer;
  }
`;
