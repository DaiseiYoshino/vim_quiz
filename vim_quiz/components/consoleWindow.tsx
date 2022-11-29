import { React } from "../deps.ts";

function toConsoleText(textObj: {style: string, text: string}[]) {
  let ret = Array();

  textObj.forEach((singleObj, index) => {
    switch (singleObj.style) {
      case 'none':
        ret.push((<span key={index}>{singleObj.text}</span>))
        break;
      case 'blink':
        ret.push((<span key={index} className="char-pointer">{singleObj.text}</span>))
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