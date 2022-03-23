import { Form, Button, FormControl, FormLabel } from "react-bootstrap";
import styled from "styled-components";

const StyledForm = styled(Form)`
  max-width: 500px;
`;

const StyledInput = styled(FormControl)`
  padding: 0.5rem;
  border-radius: 4px;
  border: none;
`;

const StyledButton = styled(Button)`
  background-color: ${(props) => props.theme.secondaryColour};
  width: 100%;
  height: 58px;
  border: none;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${(props) => props.theme.primaryColour};
    cursor: pointer;
  }
`;

const StyledLabel = styled(FormLabel)`
  margin: 1rem 0;
  color: ${(props) => props.theme.primaryColour};
`;

export default function FormContact() {
  return (
    <StyledForm>
      <Form.Group>
        <StyledLabel>Name</StyledLabel>
        <StyledInput type="text" placeholder="Name" />
      </Form.Group>

      <Form.Group>
        <StyledLabel>Email</StyledLabel>
        <StyledInput type="email" placeholder="Email" />
      </Form.Group>

      <Form.Group>
        <StyledLabel>Message</StyledLabel>
        <Form.Control as="textarea" rows={6} />
      </Form.Group>

      <StyledButton type="submit" className="mt-4">
        Submit
      </StyledButton>
    </StyledForm>
  );
}
