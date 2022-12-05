import { React } from "../deps.ts";

type textObj = {
  style?: string,
  animationNum?: number,
  text: string
};

class ConsoleWindow extends React.Component {
  constructor (props) {
    super(props);
  }

  toConsoleText(textObjs: Array<string | textObj>) {
    let ret = Array();

    /**
     * アニメーションコマ数を取得する
     */
    const animationNum: number = Math.max(
      ...textObjs.map(
        singleObj => {
          if (typeof singleObj == 'string') return 1;
          return singleObj?.animationNum ? singleObj.animationNum : 1
        }
      )
    );

    textObjs.forEach((singleObj, index) => {
      const animationSteps =
        animationNum == 1 ? 'always'
          : typeof singleObj == 'string' ? 'always' 
          : `${singleObj.animationNum ? singleObj.animationNum : 1}of${animationNum}`;
      if (typeof singleObj == 'string') {
        ret.push((<span key={index}>{singleObj}</span>))
      } else {
        switch (singleObj.style) {
          case 'blink':
            ret.push((<span key={index} className={`char-pointer-${animationSteps}`}>{singleObj.text}</span>))
            break;
          case 'none':
          default:
            ret.push((<span key={index}>{singleObj.text}</span>))
            break;
        }
      }
    })

    return ret;
  }

  render () {
    return (
      <>
        <link rel={'stylesheet'} href={'./../static/css/console.css'}/>
        <div className="console">
          {this.toConsoleText(this.props.text)}
        </div>
      </>
    );
  }
}

export default ConsoleWindow;
