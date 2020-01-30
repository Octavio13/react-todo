import React from 'react';
import './App.css';

function App() {
    const [todo, setTodo] = React.useState('');
    const [list, setList] = React.useState([]);

    const onAdd = (e) => {
        setList([...list, todo]);
        setTodo('')
    }

    const onRemove = (e) => {
        const newList = [...list.filter(x => x !== e)]
        setList(newList);

        //// [...list.filter(x=> x!== item1)]= [ item2, item3]
    }

    const onInputChange = (e) => {
        setTodo(e.target.value)
    }

    console.log('I am redering')

    return <div style={{ margin: 10 }}>
        <div style={{ paddingBottom: 10 }}>Todo</div>
        <div>
            <label>
                Todo:
    <input type="text" name="todo" value={todo} style={{ marginLeft: 5 }} onChange={onInputChange} />
            </label>
            <input type="button" value="Submit" onClick={(x) => onAdd(x)}></input>
        </div>
        <div>
            <ul>
                {list.map((item, i) => <li  >{item} 
                <button type="button">mark as Done!</button> <button type="button" onClick={(x) => onRemove(item)} > delete</button> </li>   )}
            </ul>
        </div>

    </div>


}


export default App;

