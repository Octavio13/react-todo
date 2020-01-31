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
// This part is the function to set the state for the re-rendering of the button once clicked.
// The idea is to pass the value "onooff" to Handle click in order to chane the state after the rerender
    const handleClick = (onoff) => {
        console.log(this.state.clicked);
            this.setState({clicked:!this.state.clicked})

            //{this.state.clicked:true}
    }

    console.log('I am redering')

    return <div style={{ margin: 10 }}>
        <div style={{ paddingBottom: 10 }}>Todo</div>

        ////Todo label, input and button
        <div>
            <label>
                <input type="text" name="todo" value={todo} style={{ marginLeft: 5 }} onChange={onInputChange} />
            </label>

            <input type="button" value="Submit" onClick={(x) => onAdd(x)}></input>
        </div>

        <div>
            <ul>
                {list.map((item, i) => <li  >{item} 
                //Done! button with triger for chane of state
                <button type="button" onClick={(x)=> handleClick(onoff)} >Done!</button> 
                
                //Delete button
                <button type="button" onClick={(x) => onRemove(item)} > delete</button> </li>   )}
            </ul>
        </div>

    </div>


}


export default App;

