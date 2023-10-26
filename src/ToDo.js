function ToDo(props) {

  return (
    <>
        <p>{props.todo.title}</p>
        <input type="checkbox" checkvalue={props.todo.completed}></input>
        
    </>
  );
}

export default ToDo;
