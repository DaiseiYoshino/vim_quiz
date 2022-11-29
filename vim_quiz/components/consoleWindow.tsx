import { React } from "../deps.ts";

function ConsoleWindow({text}) {
  const textOut: string = text;

  return (
    <>
      <link rel={'stylesheet'} href={'./../static/css/console.css'}/>
      <div className="console">
        {textOut}
      </div>
    </>
  );
};

export default ConsoleWindow;