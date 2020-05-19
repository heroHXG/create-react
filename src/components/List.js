import React, {Component} from 'react';
import ListItem from "./ListItem";

/*
export default class List extends Component {
  render() {
    return (
      <ul className="List">
        {
          this.props.list.map((val,index)=>{
            return <ListItem key={index} val={val} />
          })
        }
      </ul>
    );
  }

}*/


/*
export default (props)=>{
  return (
    <ul className="List">
      {
        props.list.map((val,index)=>{
          return <ListItem key={index} val={val} />
        })
      }
    </ul>
  );
}*/

/*export const List = (props)=>{
  return (
    <ul className="List">
      {
        props.list.map((val,index)=>{
          return <ListItem key={index} val={val} />
        })
      }
    </ul>
  );
};*/

/*export const List = props=>
  <ul className="List">
    {
      props.list.map((val,index)=>{
        return <ListItem key={index} val={val} />
      })
    }
  </ul>*/


//√
/*export const List = props => (
  <ul className="List">
    {
      props.list.map((val,index)=>{
        return <ListItem key={index} val={val} />
      })
    }
  </ul>
);*/


/*export const List = props => {
  let list=props.list;
  return (
    <ul className="List">
      {
        list.map((val,index)=>{
          return <ListItem key={index} val={val} />
        })
      }
    </ul>
  );
};*/

//√
export const List = ({list}) => (
  // console.log(list)
  <ul className="List">
    {
      list.map((val,index)=>{
        return <ListItem key={index} val={val} />
      })
    }
  </ul>
);

