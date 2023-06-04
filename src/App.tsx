//import Message from "./Message";  //period means the current folder
import Alert from "./Components/Alert";
import ListGroup from "./Components/ListGroup";
import Button from "./Components/Button";
import { useState } from "react";

function App() {
  let items = ["New York", "San Francisco", "London", "Tokyo", "Mumbai"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisibility] = useState(false);

  //return <div><Message /></div> //Always close react components using tags or self closing opening tags or we'll get compilation error
  //return <div><ListGroup /></div> shows error when interface is added
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      {alertVisible && (
        <Alert onClickClose={() => setAlertVisibility(false)}>
          {/* Hello <span>World!</span> */}
          My Alert
        </Alert>
      )}
      <Button onClickEvent={() => setAlertVisibility(true)}>My Button</Button>
    </div>
  );
}

export default App;
