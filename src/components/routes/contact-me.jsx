import Heading from "../typography/Heading";
import Address from "../ui/contact/Address";
import FormContact from "../ui/contact/FormContact";
import { Container } from "react-bootstrap";
import { addresses } from "../constant/Data";

export default function ContactMe() {
  return (
    <Container>
      <Heading title="Contact me" />
      <Address addressList={addresses} />
      <FormContact />
    </Container>
  );
}
