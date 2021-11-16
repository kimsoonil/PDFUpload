import { useEffect, useState, useRef } from 'react';
import "./Zwibbler.scss"
const ZwibblerComponent = () => {
  let Zwibbler = window["Zwibbler"];
  const [ctx, createCtx] = useState<{ [key: string]: any }>({});

  useEffect(() => {
    createCtx(Zwibbler.create("zwibbler", {
      showPropertyPanel: false,
      showColourPanel: false,
      showCircleTool: false,
      showBrushTool: false,
      showArrowTool: false,
      showCurveTool: false,
      showTextTool: false,
      showLineTool: false,
      showCopyPaste: false,
      showUndoRedo: false,
      showtoolbar: true
    }));
    console.log(ctx);
  }, [])
  return (
    <div
      id="zwibbler"
      className="zwibbler"
      style={{ width: "calc(100% - 200px)", height: "100%", display: "inline-block" }}
    ></div>

  )
}
export default ZwibblerComponent