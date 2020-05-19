import React,{Component} from 'react';
import Search from "./Search";
// import List from "./List";
import {List} from "./List";
import HandleStyle from "./handle-style"
import fetchJsonp from "fetch-jsonp"

export default class BaiDu extends Component{
  constructor(){
    super();
    this.state={
      list:[],
      json:[]
    };
    this.update = this.update.bind(this);
    this.getJsonp = this.getJsonp.bind(this)
  }
  update(data){
    this.setState({
      list:data.s
    })
  }
  updateJson(list){
    this.setState({
      json:list
    })
  }
  componentWillMount(){
    this.getJsonp()
  }
  getJsonp(){
    var api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=2';
    fetchJsonp(api, {
      method: 'GET',
    })
    .then(response=> {
      return response.json()
      // response.json()   //要return出来才对
    }).then(json=> {
      console.log('parsed json >>>', json)
      // this.list=json.result;
      var list = []
      json.result.map(item=>{
        list.push(item.title)
      })
      this.updateJson(list)
      console.log(this,list)  //this指向BaiDu
      
    }).catch(ex=>{
      console.log('parsing failed', ex)
    })
  }
 
  render(){
    return (
      <div className="baidu-list">
        <HandleStyle/>
        <Search update={this.update} />
        <List list={this.state.list}/>
        <List list = {this.state.json}/>
      </div>
    );
  }

}