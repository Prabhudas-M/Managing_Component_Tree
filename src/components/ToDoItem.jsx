import React, { useState } from "react";

function ToDoItem(props) {
  const [isDone, setisDone] = useState(false);
  function ClickedYesNo() {
    setisDone((preValue) => !preValue);
  }
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      {/* <li style={{ textDecoration: isDone ? "line-through" : "none" }}> */}
      <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
        {props.text}
        {props.id}
      </li>
    </div>
  );
}

// class ToDoItem extends React.Component {
//   render() {
//     return <li>{this.props.text}</li>;
//   }
// }
export default ToDoItem;
