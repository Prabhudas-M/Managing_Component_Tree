import React from "react";

function ToDoItem(props) {
  const strikThrough = { textDecoration: "line-through" };
const isDone = "ture";
  return <li style={strikThrough}>{props.text}</li>;
}

// class ToDoItem extends React.Component {
//   render() {
//     return <li>{this.props.text}</li>;
//   }
// }
export default ToDoItem;
