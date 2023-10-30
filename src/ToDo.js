import { useState } from "react";

function ToDo(props) {
const [check,setCheck] = useState(props.completed)
  return (
    <>
        <p>{props.title}</p>
  <p>userID: {props.userId}</p>
  <p>userId: {props.id}</p>
        <input type="checkbox" checked={check} onChange={(e) => setCheck(e.target.checked)}></input>
        
    </>
  );
}

export default ToDo;
