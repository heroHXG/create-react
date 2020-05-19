import React, {Component} from 'react';

/*
export default class ListItem extends Component {
  render() {
    return (
      <li>{this.props.val}</li>
    );
  }
}*/

//无状态组件/函数式组件/UI组件
/*const Listitem=function (props) {
  return (
    <li>{props.val}</li>
  );
};*/

const ListItem=(props) => {
  return (
    <li>{props.val}</li>
  );
};

// const Listitem=(props) => <li>{props.val}</li>;

// const ListItem=props => <li>{props.val}</li>;

export default ListItem;