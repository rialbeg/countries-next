import styled from "styled-components";

export const Container = styled.section`
  width: 90%;
  margin: 0 auto;
`;

export const InputSection = styled.form`
  margin-top: 4rem;
  display: flex;
  justify-content: space-between;

  position: relative;

  div.search-input {
    width: 35rem;
    height: 4rem;
    border-radius: 5px;
    box-shadow: 0px 0px 12px -8px #000000;
    div.search-content {
      padding: 1rem 2rem;
      display: flex;
      align-items: center;

      input {
        margin-left: 1rem;
        width: 100%;
      }
    }
    @media (max-width: 565px) {
      width: 30rem;
    }
    @media (max-width: 330px) {
      width: 23rem;
    }
  }
  @media (max-width: 565px) {
    display: block;
  }
`;

export const CountrySection = styled.section`
  display: grid;
  /* grid-template-columns: repeat(4, 1fr); */
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 2rem;
  justify-items: center;

  margin-top: 3rem;
  margin-bottom: 3rem;

  @media (max-width: 565px) {
    margin-top: 8rem;
  }
`;
