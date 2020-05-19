import React, {Component} from 'react';
import fetchJsonp from 'fetch-jsonp';    //npm install fetch-jsonp --save-dev,写入package.json的 devDependencies

export default class Search extends Component {

  //实例属性，定义在类内 es7
  state = {
    a: 1,
    ipt: '',
    b: 2
  };

  changeIpt(ev) {

    /* this.setState({
       ipt:ev.target.value
     });

     //读取数据,丢出去 this.porps.update(数据)
     fetchJsonp(
       `https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=${this.state.ipt}`,
       {
         jsonpCallback:'cb',//回调函数key
       }
     ).then(
       res=>res.json()
     ).then(
       data => this.props.update(data)
     )*/

    /*this.setState((prevState,props)=>{
      console.log(prevState);
      return Object.assign({},this.state,{ipt:prevState.ipt+'2'})
    });
    this.setState(function (prevState,props) {
      console.log(prevState);
      return Object.assign({},this.state,{ipt:prevState.ipt+'2'})
    });*/

    //01
    /*this.setState({
      ipt:ev.target.value
    });
    this.setState((prevState)=>{
      fetchJsonp(
        `https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=${prevState.ipt}`,
        {
          jsonpCallback:'cb',//回调函数key
        }
      ).then(
        res=>res.json()
      ).then(
        data => this.props.update(data)
      )
    })*/

    //02

    this.setState({
      ipt: ev.target.value
    });

    setTimeout(()=>{
      fetchJsonp(
        `https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=${this.state.ipt}`,
        {
          jsonpCallback: 'cb',//回调函数key
        }
      ).then(
        res => 
          res.json()
          // console.log(res) //{ok: true, json: ƒ}
          // console.log(res.json())  //Promise {<resolved>: {…}}  [PromiseStatus]]: "resolved" [[PromiseValue]]: Object
        
      ).then(
        data => {
          console.log(data)

          this.props.update(data)
        }
      ).catch(
        err=> console.log(err)  //undefined
      )
    },0)


  }

  render() {
    return (
      <input
        type="text"
        placeholder="百度一下"
        value={this.state.ipt}
        onChange={this.changeIpt.bind(this)}
      />
    );
  }

}