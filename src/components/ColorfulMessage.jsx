import React from "react";

// propsには呼び出し時のHTMLのタグ内で指定された任意のパラメータと
// children というHTMLタグの子要素をが格納されている変数が存在している
export const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    // プロパティ名と変数名が同一の場合省略できる
    // color: color,
    color,
    fontSize: "18px"
  };
  // return <p style={contentStyle}>{props.children}</p>;
  return <p style={contentStyle}>{children}</p>;
};

// デフォルトエクスポート
// export default ColorfulMessage;
