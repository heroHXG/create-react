import React,{Component} from 'react';
// import $ from '../data/jquery-3.4.1.js';
import $ from 'jquery';   //npm install jquery -S,  写入package.json的dependencies
import fetchJsonp from 'fetch-jsonp';

export default class DataAjax extends Component{
  render(){
    return (
      <div className="ajax">
        <input type="button" value="jq读static" onClick={this.getJqStatic.bind(this)}/>
        <br/>
        <input type="button" value="fetch读static" onClick={this.getStatic.bind(this)}/>
        <br/>
        <input type="button" value="get读php" onClick={this.getPhp.bind(this)}/>
        <br/>
        <input type="button" value="post读php" onClick={this.postPhp.bind(this)}/>
        <br/>
        <input type="button" value="读jsonp" onClick={this.jsonp.bind(this)}/>
      </div>
    );
  }
  getJqStatic(){
    $.ajax({
      url:'/data/user.json',
      success:function (res) {
        debugger
        console.log(res)   //返回一个html页面
      }
    })
  }

  getStatic(){
    /*let p1 = fetch(`/data/user.json`);

    let p2 = p1.then(
      // res=>console.log(res)//流
      // res=>res.json()//解流->obj
      res=>res.text()
    );
    console.log(p2);
    p2.then(
      data => console.log(data)
    )*/

    fetch(
      `/data/user.json`
    ).then(
      res=>res.json()
    ).then(
      data=>console.log(data)
    )
  }
  getPhp(){
    fetch(
      `http://localhost:80/get.php?a=1&b=2`,
    ).then(
      res=>res.json()
    ).then(
      data =>console.log(data)
    )
  }
  postPhp(){
    let params = new URLSearchParams();
    params.append('a','1');
    params.append('b','2');

    fetch(
      `http://localhost:80/post.php`,
      {
        method:'POST',
        headers:{'Content-Type':'application/x-www-form-urlencoded'},
        // body:'a=1&b=2'
        body:params
      }
    ).then(
      res=>res.json()
    ).then(
      data =>console.log(data)
    )
  }
  jsonp(){
    fetchJsonp(
      `https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=xuxu`,
      {
        jsonpCallback:'cb',//回调函数key
        // jsonpCallbackFunction:'show1',//回调函数名
        // timeout:10000//超时
      }
    ).then(
      res=>res.json()
    ).then(
      data => console.log(data)
    ).catch(
      err => console.log('err',err)
    );

    fetchJsonp(
      `https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=hehe`,
      {
        jsonpCallback:'cb',//回调函数key
        // jsonpCallbackFunction:'show2',//回调函数名
        // timeout:1//超时
      }
    ).then(
      res=>res.json()
    ).then(
      data => console.log(data)
    ).catch(
      err => console.log('err',err)
    )

  }
}