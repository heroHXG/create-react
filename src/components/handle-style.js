import React from "react";

// import '../assets/App.css'//全局引入

import style from '../assets/App.css';//需要设置webpack配置 options:{modules:true}

export default class App extends React.Component{
  constructor(){
    super();
    this.state = {
      num:110
    }
  }
  render(){
    return (
      <div>
        <h3 className="abc">hello</h3>   {/* 有.abc样式 */}
        <h3 className={style.abc}>hello</h3>  {/* 没有样式*/}
        <div style={{background:'purple'}}>box</div>
        <div style={{background: 'violet'}}>oooops</div>
        <div style={{backgroundColor:'pink'}}>box</div>
        <div style={{backgroundColor:'pink',width:'100px'}}>box</div>
        <div style={{backgroundColor:'pink',width:100+'px'}}>box</div>
        <div className={style.box} style={{backgroundColor:'blue',width:this.state.num+'px'}}>box</div>
        <input type="button" value="点击更改box样式" onClick={this.transform.bind(this)}/>
      </div>
    )
  }
  transform(){
    this.setState({
      num:(Math.random()*200).toFixed(0)
    })
  }
}