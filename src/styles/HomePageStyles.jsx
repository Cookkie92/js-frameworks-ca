// HomePageStyles.jsx

import styled from "styled-components";

export const HomePageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;
export const ProductsTitle = styled.h1`
  text-align: center;
`;
export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

export const SearchContainer = styled.div`
  position: relative;
  width: 300px;
  margin: auto;
`;

export const SearchInput = styled.input`
  font-family: "Inconsolata", monospace;
  width: 100%;
  height: 50px;
  outline: none;
  border: none;
  background: crimson;
  color: white;
  text-shadow: 0 0 10px crimson;
  padding: 0 20px;
  border-radius: 30px;
  box-shadow: 0 0 25px 0 crimson, 0 20px 25px 0 rgba(0, 0, 0, 0.2);
  transition: all 1s;
  z-index: 5;
  font-weight: bolder;
  letter-spacing: 0.1em;

  &:hover {
    cursor: pointer;
  }

  &::placeholder {
    color: white;
    opacity: 0.5;
    font-weight: bolder;
  }
`;
