//import Message from "./Message";  //period means the current folder
import Alert from "./Components/Alert";
//import ListGroup from "./Components/ListGroup";

function App() {
  // let items = ["New York", "San Francisco", "London", "Tokyo", "Mumbai"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  //};

  //return <div><Message /></div> //Always close react components using tags or self closing opening tags or we'll get compilation error
  //return <div><ListGroup /></div> shows error when interface is added
  return (
    // <div>
    //   <ListGroup
    //     items={items}
    //     heading="Cities"
    //     onSelectItem={handleSelectItem}
    //   />
    // </div>
    <div>
      <Alert>
        Hello <span>World!</span>
      </Alert>
    </div>
  );
}

export default App;
