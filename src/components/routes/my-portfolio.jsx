import Heading from "../typography/Heading";
import List from "../ui/List";
import ImageGrid from "../ui/img/ImageGrid";
import Paragraph from "../typography/Paragraph";
import { developerList, portfolioProjects, websiteProjects } from "../constant/Data";
import { Container } from "react-bootstrap";

export default function MyPortfolio() {
  return (
    <>
      <Container>
        <Heading title="My portfolio" />
        <Paragraph
          bodytext="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum."
        />
        <List listItems={developerList} />
      </Container>

      <Container>
        <h2 className="mt-5 mb-4">Websites</h2>
        <ImageGrid projects={websiteProjects} />
      </Container>

      <Container>
        <h2 className="mt-5 mb-4">Design</h2>
        <ImageGrid projects={portfolioProjects} />
      </Container>
    </>
  );
}
