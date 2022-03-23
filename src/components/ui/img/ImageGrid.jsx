import { Card, Col, Row } from "react-bootstrap";
import styled from "styled-components";

const StyledCard = styled(Card)`
  border: none;
  background-color: ${(props) => props.theme.secondaryBackgroundColour};
`;

const StyledBody = styled(Card.Body)`
  padding: 1rem;
  color: ${(props) => props.theme.light};
  text-align: center;
`;

const StyledCardHeading = styled.h3`
  font-size: 1.4rem;
`;

// Reusable image-grid function

export default function ImageGrid(props) {
  return (
    <Row className="g-5 gy-5">
      {props.projects.map((project) => {
        return (
          <Col sm={6} lg={4} key={project.id}>
            <StyledCard>
              <Card.Img variant="top" src={project.src} alt={project.alt} />
              <StyledBody>
                <StyledCardHeading>{project.name}</StyledCardHeading>
                <Card.Text>{project.description}</Card.Text>
              </StyledBody>
            </StyledCard>
          </Col>
        );
      })}
    </Row>
  );
}
