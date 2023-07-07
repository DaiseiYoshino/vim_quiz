import { React } from "../deps.ts";

type textObj = {
  style?: string,
  text: string
};

class ConsoleWindow extends React.Component {
  constructor (props) {
    super(props);
  }

  toConsoleText(textObjs: Array<Array<string | textObj>>) {
    let ret = Array();

    textObjs.forEach((frame, index) => {
      frame.forEach((textObj, index) => {
        if (typeof textObj == 'string') {
          ret.push((<span key={index}>{textObj}</span>))
        } else {
          switch (textObj.style) {
            case 'blink':
              ret.push((<span key={index} className={`char-pointer-always`}>{textObj.text}</span>))
              break;
            case 'none':
            default:
              ret.push((<span key={index}>{textObj.text}</span>))
              break;
          }
        }
      })
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
