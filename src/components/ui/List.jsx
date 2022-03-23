import styled from "styled-components";

const ListItem = styled.li`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Icon = styled.i`
  margin-right: 10px;
  font-size: 10px;
  color: ${(props) => props.theme.primaryColour};
`;

// A reusable list-function

export default function List(props) {
  return (
    <ul className="p-0">
      {props.listItems.map((item) => (
        <ListItem key={item}>
          <Icon className="far fa-circle"></Icon> {item}
        </ListItem>
      ))}
    </ul>
  );
}
