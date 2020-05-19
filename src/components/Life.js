import React,{Component} from 'react';
import Child from './Child';
export default class Life extends Component{
  constructor(){
    super();
    console.log('parent getDefaultProps');
    this.state={
      bl:true,
      msg1:'父数据'
    };
    console.log('parent getInitailState');
  }
  conChild(){
    this.setState({
      bl:!this.state.bl
    })
  }
  componentWillMount(){
    console.log('parent componentWillMount');
  }
  render(){
    console.log('parent render');
    return (
      <div className="life">
        <h3>父组件</h3>
        <div>数据:{this.state.msg1}</div>
        <input
          type="button"
          value="修改父数据"
          onClick={()=>{
            this.setState({msg1:'修改后的父数据'+Math.random()})
          }}
        />
        <input type="button" value="显示隐藏子组件" onClick={this.conChild.bind(this)} />
        {this.state.bl && <Child/>}

      </div>
    )
  }
  componentDidMount(){
    console.log('parent componentDidMount');
  }
  shouldComponentUpdate(){
    console.log('parent shouldComponentUpdate');//场景: 设置条件，优化部分业务，-》手动更新
    return true;
  }
  componentWillUpdate(){
    console.log('parent componentWillUpdate');
  }
  componentDidUpdate(){
    console.log('parent componentDidUpdate');
  }
  componentWillUnmount(){
    console.log('parent componentWillUnmount');
  }
}