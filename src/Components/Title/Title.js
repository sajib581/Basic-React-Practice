import React, { Component } from "react";
import "./Title.css";

class Title extends Component {
  constructor() {
    super();
    this.state = {
      title: "Timer",
      isInput: false,
    };
  }
  editHandeler() {
    this.setState({
      ...this.state,
      isInput: true,
    });
  }
  inputChange(event){
    this.setState({
      ...this.state,
      title:event.target.value
    })
  }
onKeyPress(event){
  if(event.key === "Enter"){
    this.setState({
      ...this.state,
    isInput:false
    })
  }
}
onBlur(){
  this.setState({
    ...this.state,
  isInput:false
  })
}
  render() {
    let output = null;
    if (this.state.isInput) {
      output = (
        <div className="title">
          <input
            className="form-control"
            type="text"
            value={this.state.title}
            onChange ={(event)=>this.inputChange(event)}
            onKeyPress = {(event)=>this.onKeyPress(event)}
            onBlur = {(event)=>this.onBlur(event)}
          />
        </div>
      );
    } else {
      output = (
        <div className="d-flex title">
          <h1 className="display-4">{this.state.title}</h1>
          <h6 onClick={() => this.editHandeler()} className="ml-auto edit-icon">
            Edit
          </h6>
        </div>
      );
    }
    return <div>{output}</div>;
  }
}

export default Title;
