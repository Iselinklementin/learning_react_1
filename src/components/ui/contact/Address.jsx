import styled from "styled-components";
import Paragraph from "../../typography/Paragraph";

// Adding custom styles to a component I`ve made earlier
const ParagraphAddress = styled(Paragraph)`
  margin-bottom: 0.5rem;
`;

const StyledDiv = styled.div`
  margin: 1rem 0 2rem 0;
`;

// This can probably be done neater,
// I got time to practice styles, props and how it works - so why not :)

export default function Address(props) {
  return (
    <>
      {props.addressList.map((info) => (
        <StyledDiv key={info.lastName}>
          <ParagraphAddress key={info.firstName} intro="Name: " bodytext={info.firstName + " " + info.lastName} />
          <ParagraphAddress key={info.address} intro="Address: " bodytext={info.address} />
          <ParagraphAddress key={info.phone} intro="Phone: " bodytext={info.phone} />
        </StyledDiv>
      ))}
    </>
  );
}
