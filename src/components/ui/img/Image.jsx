import styled from "styled-components";

const StyledImage = styled.img`
  height: 100%;
  max-height: 650px;
  width: 100%;
  object-fit: cover;
`;

export default function Image({ src, alt }) {
  return <StyledImage src={src} alt={alt} />;
}
