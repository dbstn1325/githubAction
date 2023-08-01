import styled from "styled-components";

const SearchBarBtnStyle = styled.div`
  width: 62px;
  height: 40px;

  box-sizing: border-box;
  background: white;
  border: none;
  display: flex;
  border-radius: 0 10rem 10rem 0;
  border: 1px solid #c5c4c4;
  border-left: 0.1px solid #f3f3f3;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #faf9f9;
  margin-right: 20px;
  cursor: pointer;

  transition: box-shadow 0.2s ease-in-out, border-color 0.2s ease-in-out;
`;

export { SearchBarBtnStyle };
