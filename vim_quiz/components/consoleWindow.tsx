import { React } from "../deps.ts";

type textObj = {
  style?: string,
  animationNum?: number,
  text: string
};

function toConsoleText(textObjs: textObj[]) {
  let ret = Array();

  /**
   * アニメーションコマ数を取得する
   */
  const animationNum = Math.max(
    ...textObjs.map(
      singleObj => singleObj.animationNum ? singleObj.animationNum : 1
    )
  );

  textObjs.forEach((singleObj, index) => {
    const animationSteps =
      animationNum == 1 ? 'always'
      : `${singleObj.animationNum ? singleObj.animationNum : 1}of${animationNum}`;
    switch (singleObj.style) {
      case 'blink':
        ret.push((<span key={index} className={`char-pointer-${animationSteps}`}>{singleObj.text}</span>))
        break;
      case 'none':
      default:
        ret.push((<span key={index}>{singleObj.text}</span>))
        break;
    }
  })

  return ret;
}

class ConsoleWindow extends React.Component {
  constructor (props) {
    super(props);
    // this.state = {textElems: toConsoleText(props)}
    this.state = {textElems: toConsoleText(props.text)}
  }

  render () {
    return (
      <>
        <link rel={'stylesheet'} href={'./../static/css/console.css'}/>
        <div className="console">
          {this.state.textElems}
        </div>
      </>
    );
  }
}

export default ConsoleWindow;