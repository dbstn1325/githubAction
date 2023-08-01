import styled from "styled-components";

interface FontProps {
  size: number;
  is_bold?: boolean;
  marginTop?: number;
  marginBottom?: number;
  color?: string;
}

const FontStyle = styled.div<FontProps>`
  font-size: ${({ size }) => `${size}rem`};
  font-weight: ${({ is_bold }) => (is_bold ? 600 : "normal")};
  margin-top: ${({ marginTop }) => (marginTop ? `${marginTop}rem` : "0")};
  margin-bottom: ${({ marginBottom }) =>
    marginBottom ? `${marginBottom}rem` : "0"};
  color: ${({ color }) => (color ? `${color}` : "")};
`;

export { FontStyle };
