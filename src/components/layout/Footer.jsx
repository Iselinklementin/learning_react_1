import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: ${(props) => props.theme.secondaryBackgroundColour};
  padding: 1rem;
  margin-top: 8rem;
  text-align: center;
`;

export default function Footer() {
  return <StyledFooter>This is my footer</StyledFooter>;
}
