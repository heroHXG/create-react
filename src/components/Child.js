import React,{Component} from 'react';
export default class Child extends Component{
  constructor(props){
    super(props);
    console.log('child getDefaultProps');
    this.state={
      msg1:'子数据'
    };
    console.log('child getInitailState');
  }
  componentWillMount(){
    console.log('child componentWillMount');
  }
  render(){
    console.log('child render');
    return (
      <div className="Child">
        <h3>子组件</h3>
        <div>数据:{this.state.msg1}</div>
        <input
          type="button"
          value="修改子数据"
          onClick={()=>{
            this.setState({msg1:'修改后的子数据'+Math.random()})
          }}
        />
      </div>
    )
  }
  componentDidMount(){
    console.log('child componentDidMount');
  }
  shouldComponentUpdate(){
    console.log('child shouldComponentUpdate');//场景: 设置条件，优化部分业务，-》手动更新
    return true;
  }
  componentWillUpdate(){
    console.log('child componentWillUpdate');
  }
  componentDidUpdate(){
    console.log('child componentDidUpdate');
  }
  componentWillUnmount(){
    console.log('child componentWillUnmount');
  }
}