function ListGroup() {
  return (
    <ul className="list-group">
      <li className="list-group-item">An item</li>
      <li className="list-group-item">A second item</li>
      <li className="list-group-item">A third item</li>
      <li className="list-group-item">A fourth item</li>
      <li className="list-group-item">And a fifth one</li>
    </ul>
  ); //class is reserved keyword in JS or TS, so rename here to className.
  // Cool trick: click ctrl + D and select keywords and you can select multiple words to edit. Similar to ctrl + shift + click.
}

export default ListGroup;
