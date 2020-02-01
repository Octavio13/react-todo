import React from "react";
import "./App.css";
import { List } from "./List";

function App() {
  const [todo, setTodo] = React.useState("");
  const [list, setList] = React.useState([]);

  const onAdd = e => {
    setList([
      ...list,
      { id: list.length, name: todo, isDone: false, isDeleted: false }
    ]);
    setTodo("");
  };

  const onRemove = item => {
    // const newList = [...list.filter(x => x.name !== e.name)];
    // setList(newList);

    //// [...list.filter(x=> x!== item1)]= [ item2, item3]

    item.isDeleted = true;
    setList([...list.filter(x => x.name !== item.name), item]);
  };

  const onInputChange = e => {
    setTodo(e.target.value);
  };

  // This part is the function to set the state for the re-rendering of the button once clicked.
  // The idea is to pass the value "onooff" to Handle click in order to chane the state after the rerender
  const onDone = item => {
    item.isDone = !item.isDone;
    setList([...list.filter(x => x.name !== item.name), item]);

    //{this.state.clicked:true}
  };

  //   console.log("I am redering");
  console.log(list);
  return (
    <div style={{ margin: 10 }}>
      <div style={{ paddingBottom: 10 }}>Todo</div>
      {/* ////Todo label, input and button */}
      <div>
        <label>
          <input
            type="text"
            name="todo"
            value={todo}
            style={{ marginLeft: 5 }}
            onChange={onInputChange}
          />
        </label>

        <input type="button" value="Submit" onClick={x => onAdd(x)}></input>
      </div>
      <div>
        <List list={list} onDone={onDone} onRemove={onRemove}></List>
      </div>
    </div>
  );
}

export default App;
