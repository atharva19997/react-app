//import { Fragment } from "react";
//import { MouseEvent } from "react";
import { useState } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "London", "Tokyo", "Mumbai"]; //Dynamic adding of list in the list.
  // if (items.length === 0)
  //   return (
  //     <>
  //       <h1>List</h1>
  //       <p>No item found</p>
  //     </>
  //   );   Kinda becomes repetitive. So we add it in the return itself
  //const message = items.length === 0 ? <p>No items found</p> : null; Or write it in a better way
  const message = items.length === 0 && <p>No items found</p>; //Check in console, true && 'any value' returns 'any value', so it can be used this way.
  //Event handler
  //const handleClick = (e) => console.log(item, index, e); // We get a ts error saying e has a type any. so if we add a dot after e in log, we can't see any properties of event
  //const handleClick = (event: MouseEvent) => console.log(event); //This syntax is called type annotation in typescript

  //let selectedIndex = 0; cannot use directly because cannot hold state
  //One of the hooks is state. By this we tell react that this variable can change state over time.
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //      variable      updater function
  return (
    //<h1>List</h1> If you uncomment this, it will show errors because in React, a function cannot return more than one element.
    //Other way you can return this is by wrapping all this in an element such as div.
    //Another shortcut, select all things you want in the wrapper, go to command pallete and say wrap with abbreviation and say div.

    //But adding div adds another layer in the DOM, which is unnecessary. We can use fragment here.
    //After importing fragment, replace the div with fragment.
    //Another shortcut is to remove the word fragment, keeping empty tags by which we are saying to React to use the fragment.
    //<div>
    //<Fragment>
    <>
      <h1>List</h1>
      {
        //items.length === 0 ? <p>No item found</p> : null
        //If you dont want to mess this syntax, do this outside in the form of a variable or function and then call them here.
        message
      }
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            //onClick={(e) => console.log(item, index, e)}  if bigger things than event are needed, use the handler above.
            //When we hover over e or event here, we see the type of the event, as react knows the type and we don't get the error.
            //onClick={handleClick} //No need to call as function, just add reference.
            onClick={() => {
              //selectedIndex = index; does not work
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
        {/*1. We can use map function in JS to convert the array into another form.
          2. we say items =>(transform to) <li> such that:-  items.map((item) => <li>{item}</li> )
          3. We remove the hard coded list and add the map line but it shows error because in JSX syntax, we can only use html or React tags.
          4. So we add parenthesis around it to add dynamic values. 
          5. Doing this, we get an error in console in devtools saying each list item should have a unique 'key' prop
          */}
        {/* <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li> */}
      </ul>
    </>
    //</Fragment>
    //</div>
  ); //class is reserved keyword in JS or TS, so rename here to className.
  // Cool trick: click ctrl + D and select keywords and you can select multiple words to edit. Similar to ctrl + shift + click.
}

export default ListGroup;
