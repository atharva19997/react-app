import { useState } from "react";
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void; //like onClick. returns void. Used so we can tell the parent of the function, here App.tsx what is selected for further actions
} // Like a model, but in form of attributes to tags in HTML

//function ListGroup(Props: Props) { There is error everywhere items is called, and we would have to write props.items
function ListGroup({ items, heading, onSelectItem }: Props) {
  const message = items.length === 0 && <p>No items found</p>;

  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
      {message}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
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
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
