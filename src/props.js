import React from 'react';
import ReactDOM from 'react-dom';
console.log(React);

import registerServiceWorker from './registerServiceWorker';
registerServiceWorker();

class App extends React.Component{
  constructor(props){
    super();
    this.state={};
    // console.log(props);//构造器里面获取属性
    // props.title='qq'; //props是只读
  }
  show(ev){
    alert('ok')
  }
  render(){
    // console.log(this.props);
    // this.props.title='q3';//props是只读的
    return (
      <div onClick={alert('ok')}>hello</div>
    )
  }
}

ReactDOM.render(
  <App title="bmw" num={110}/>
  ,
  document.getElementById('root')
);


