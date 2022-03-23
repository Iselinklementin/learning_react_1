import Heading from "../typography/Heading";
import FlexRowContainer from "../layout/FlexRowContainer";
import Carousels from "../ui/img/Carousels";
import Paragraph from "../typography/Paragraph";
import styled from "styled-components";
import { device } from "../styles/Theme";
import { CarouselProjects } from "../constant/Data";

const StyledDiv = styled.div`
  @media ${device.laptop} {
    width: 35%;
    padding-right: 2rem;
    margin-right: 2rem;
  }
`;

export default function Home() {
  return (
    <>
      <FlexRowContainer>
        <StyledDiv>
          <Heading title="Hello!" />
          <Paragraph intro="I`m Iselin. Nice to meet you!" />
          <Paragraph
            bodytext="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur."
          />
          <Paragraph
            bodytext="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur."
          />
        </StyledDiv>
        <Carousels projects={CarouselProjects} />
      </FlexRowContainer>
    </>
  );
}
