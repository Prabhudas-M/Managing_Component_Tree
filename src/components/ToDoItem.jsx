import React from "react";

// function ToDoItem(props) {
//   return <li>{props.text}</li>;
// }

class ToDoItem extends React.Component {
  render() {
    return <li>{this.props}</li>;
  }
}
export default ToDoItem;
