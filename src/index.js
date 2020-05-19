import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import './assets/base.css'; // 02 全局引入公共样式

import BaiDu from './components/BaiDu.js'  //import 必须在其它所有业务代码前面（eslint 暴出）,异步组件导入了,也不能插在其他导入的东西前面.
import DataAjax from './components/DataAjax.js'
import TaoBap from './components/TaoBao.js'
import TaoBao from './components/TaoBao.js';
registerServiceWorker();

ReactDOM.render(
  <div>
    <BaiDu />
    <DataAjax/>
    <TaoBao/>
  </div>,
  document.getElementById('root')
);


