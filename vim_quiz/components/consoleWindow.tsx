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

    textObjs.forEach((singleObj, index) => {
      if (typeof singleObj == 'string') {
        ret.push((<span key={index}>{singleObj}</span>))
      } else {
        switch (singleObj.style) {
          case 'blink':
            ret.push((<span key={index} className={`char-pointer-always`}>{singleObj.text}</span>))
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
