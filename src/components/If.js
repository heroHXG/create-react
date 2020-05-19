import React from 'react';
export default class If extends React.Component{
  constructor(){
    super();
    this.state={
      bl:false
    }
  }
  render(){
    return (
      <div className="if">
        {this.state.bl && <div>box1</div>}
        {this.state.bl?<div>box2</div>:''}
        {this.state.bl?<div>box3</div>:null}
        {this.state.bl?<div>box4</div>:undefined}
      </div>
    )
  }
}