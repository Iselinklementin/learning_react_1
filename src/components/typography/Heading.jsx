import styled from "styled-components";

const StyledHeading = styled.h1`
  color: ${(props) => props.theme.primaryColour};
  margin-top: 3rem;
  margin-bottom: 1rem;
  font-size: 34px;
`;

export default function Heading({ title }) {
  return <StyledHeading>{title}</StyledHeading>;
}
