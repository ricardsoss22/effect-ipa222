import { useState } from "react";

function ToDo(props) {
const [check,setCheck] = useState(props.todo.completed)
  return (
    <>
        <p>{props.todo.title}</p>
  <p>userID: {props.todo.userId}</p>
  <p>userId: {props.todo.id}</p>
        <input type="checkbox" checked={check} onChange={(e) => setCheck(e.target.checked)}></input>
        
    </>
  );
}

export default ToDo;
