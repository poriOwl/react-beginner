import React from "react";
import ReactDom from "react-dom";

import App from "./App";

// .render レンダリングAPI
// App(API)の呼び出しはHTMLのタグみたく <API名 />で指定
// 第二引数はレンダリング先のID(index.htmlに存在している)
ReactDom.render(<App />, document.getElementById("root"));
