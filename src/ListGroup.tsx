import { useState } from "react";
import styles from "./ListGroup.css";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 20px;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding: 20px;
  background: ${(props) =>
    props.active ? "rgba(80, 80, 255, 0.629)" : "none"};
  border-radius: 10px;
`;

interface ListGroupProps {
  items: string[];
  heading: string;
  // (item : string) => void
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1); // updater function

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found.</p>}
      <List className="list-group">
        {items.map((item, index) => (
          <ListItem
            active={index === selectedIndex}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
            style={{ cursor: "pointer" }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
