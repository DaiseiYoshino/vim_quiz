import { React } from "../deps.ts";

type textObj = {
  style?: string,
  text: string
};

function toConsoleText(textObjs: textObj[]) {
  let ret = Array();

  textObjs.forEach((singleObj, index) => {
    switch (singleObj.style) {
      case 'blink-always':
        ret.push((<span key={index} className="char-pointer-always">{singleObj.text}</span>))
        break;
      case 'none':
      default:
        ret.push((<span key={index}>{singleObj.text}</span>))
        break;
    }
  })

  return ret;
}

function ConsoleWindow({text}) {
  const outText = toConsoleText(text);

  return (
    <>
      <link rel={'stylesheet'} href={'./../static/css/console.css'}/>
      <div className="console">
        {outText}
      </div>
    </>
  );
};

export default ConsoleWindow;