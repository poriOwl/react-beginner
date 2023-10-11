import React, { useEffect, useState } from "react";

// デフォルトエクスポートの場合のインポート
// import ColorfulMessage from "./components/ColorfulMessage";
// export const 関数名 の場合のインポート
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  // [変数名, 変数を操作する関数名] = useState(初期値)
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  // 関心の分離
  // useEffectの第2引数(配列指定)で読み込むタイミングを決めることができる
  // 空([])であれば初回実行時のみ通る
  // 第2引数の配列に値(state)を指定した場合、その値が操作された場合のみ第1引数で指定した関数が動作する(第2引数に指定した値を監視する)
  useEffect(() => {
    if (num % 3 === 0) {
      faceShowFlag || setFaceShowFlag(true);
    } else {
      faceShowFlag && setFaceShowFlag(false);
    }
    // useEffectの第2引数には第1引数の関数内で現れている変数をすべて指定しないと
    // eslint(構文チェック)でエラー(warn)がでる
    // ファイル先頭に /* eslint エラーメッセージ:off */ を記載することでファイル単位で無効にすることができるほか
    // 以下の行のように第2引数直前に // eslint-disable-next-line エラーメッセージ と記載することで次の行のみエラーを無効にすることができる
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  // jsx記法(JSの中にHTML形式で記載する)
  // 複数行記載する場合はかっこで括る
  // ただし、返却できるタグは1つのみなので何かしらで1つにまとめる必要がある
  // divでまとめると余計にレンダリングされてしまうので
  // エラーを解消したいが何も表示させたくない場合　React.Fragment　を利用するとよい
  // <></> で囲めば React.Fragment と同じ効果を得られる
  // {} の部分はJSとして判断される
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="green">お元気ですか?</ColorfulMessage>
      <ColorfulMessage color="pink">元気です!</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>('ω')</p>}
    </>
  );
};

export default App;
