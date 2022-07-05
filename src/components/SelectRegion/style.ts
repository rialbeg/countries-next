import styled from "styled-components";

export const DropDownContainer = styled.div`
  position: absolute;
  z-index: 99;
  right: 0;

  @media (max-width: 565px) {
    left: 0;
    margin-top: 2rem;
  }
`;
export const DropDownHeader = styled.div`
  margin-bottom: 1rem;
  margin-top: 0.01rem;
  padding: 1.2rem 2.2rem;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 600;
  font-size: 1.2rem;
  border-radius: 5px;
  width: 15rem;
  &:hover {
    cursor: pointer;
  }
`;
export const DropDownListContainer = styled.div`
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  width: 15rem;
`;
export const DropDownList = styled.ul`
  font-size: 1.2rem;
  font-weight: 600;
  padding: 2rem;
`;
export const ListItem = styled.li`
  list-style: none;
  margin-bottom: 1rem;
  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    cursor: pointer;
  }
`;
