import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface CategoryProps {
  width: number;
}

const CategoryWrapperStyle = styled.div`
  display: flex;
  width: 100%;
  background-color: white;
  position: fixed;
  padding: 1.5rem 0 0.6rem 1rem;
  margin-top: 0.1rem;
`;

const Category = styled.div<CategoryProps>`
  display: flex;
  box-sizing: border-box;
  background-color: #f0f0f0;
  border-radius: 0.5rem;
  width: ${({ width }) => `${width}px`};
  height: 29.8px;
  align-items: center;
  justify-content: center;
  color: balck;
  margin-right: 1.2rem;
  font-size: 0.9rem;
  cursor: pointer;
  &:hover,
  &:active {
    background-color: black;
    color: white;
  }
`;

export { Category, CategoryWrapperStyle };
