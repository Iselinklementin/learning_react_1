import styled from "styled-components";

const StyledSpan = styled.span`
  font-weight: 600;
`;

export default function Paragraph(props) {
  return (
    <p className={props.className}>
      <StyledSpan>{props.intro}</StyledSpan>
      {props.bodytext}
    </p>
  );
}
