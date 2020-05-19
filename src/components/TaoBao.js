import React, {Component} from 'react';
import '../assets/TaoBao.css';

export default class TaoBao extends Component {
  constructor(){
    super();
    this.state={
      list:[
        {
          title:'女装',
          href:'javescript:;',
          hot:false,
          child:[
            {title:'衬衫',href:'javescript:;',hot:false},
            {title:'雪纺衫',href:'javescript:;',hot:true},
            {title:'防晒衣',href:'javescript:;',hot:false}
          ]
        },
        {
          title:'连衣裙',
          href:'javescript:;',
          hot:true,
          child:[
            {title:'雪纺裙',href:'javescript:;',hot:false},
            {title:'长裙',href:'javescript:;',hot:false},
            {title:'短裙',href:'javescript:;',hot:true}
          ]
        },
        {
          title:'T恤',
          href:'javescript:;',
          hot:false,
          child:[
            {title:'打底衫',href:'javescript:;',hot:false},
            {title:'短袖T',href:'javescript:;',hot:true},
            {title:'蝙蝠袖',href:'javescript:;',hot:false}
          ]
        },
        {
          title:'裤子',
          href:'javescript:;',
          last:true,
          hot:false,
          child:[
            {title:'小脚裤',href:'javescript:;',hot:false},
            {title:'连体裤',href:'javescript:;',hot:false},
            {title:'短裤',href:'javescript:;',hot:true}
          ]
        },
        {
          title:'男装',
          href:'javescript:;',
          hot:false,
          child:[
            {title:'新品',href:'javescript:;',hot:true},
            {title:'风格',href:'javescript:;',hot:false},
            {title:'潮牌',href:'javescript:;',hot:false},
            {title:'品牌特惠',href:'javescript:;',hot:false}
          ]
        },
        {
          title:'T恤',
          href:'javescript:;',
          hot:true,
          child:[
            {title:'短袖',href:'javescript:;',hot:false},
            {title:'纯棉',href:'javescript:;',hot:false},
            {title:'简约',href:'javescript:;',hot:false},
            {title:'印花',href:'javescript:;',hot:false}
          ]
        },
        {
          title:'衬衫',
          href:'javescript:;',
          hot:false,
          child:[
            {title:'短袖衫',href:'javescript:;',hot:false},
            {title:'格子',href:'javescript:;',hot:false},
            {title:'纯色',href:'javescript:;',hot:false},
            {title:'修身',href:'javescript:;',hot:true}
          ]
        },
        {
          title:'休闲裤',
          href:'javescript:;',
          hot:false,
          child:[
            {title:'短裤',href:'javescript:;',hot:true},
            {title:'小脚',href:'javescript:;',hot:false},
            {title:'直筒',href:'javescript:;',hot:false}
          ]
        }
      ]
    }
  }
  render() {
    let list=this.state.list;
    return (
      <ul id="ul1">
        {
          list.map((item,index)=>{
            return (
              <li key={index} className={item.last?'last':''}>
                <a className={item.hot?'title hot':'title'} href="{item.href}">{item.title}</a>
                {
                  item.child.map((item,index)=>{
                    return (
                      <a key={index} className={item.hot?'child hot':'child'} href="{item.href}">{item.title}</a>
                    )
                  })
                }
                
              </li>
            )
          })
        }

      </ul>
    )
  }
}