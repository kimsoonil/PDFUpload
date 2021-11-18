import { useEffect, useState, useRef } from 'react';
import "./Zwibbler.scss"
const ZwibblerComponent = () => {
  let Zwibbler = window["Zwibbler"];
  const [ctx, createCtx] = useState<{ [key: string]: any }>({});
  useEffect(() => {
    const zwibblerObj = Zwibbler.create("zwibbler", {
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
      showtoolbar: true,
    })
    zwibblerObj.addKeyboardShortcut("Shift+G", (event) => {
      const nodes = zwibblerObj.getSelectedNodes();
      zwibblerObj.alignNodes("middle", nodes);
      zwibblerObj.forEachNode((id) => {
        console.log("Got node id: ", id);
      })
    });
    createCtx(zwibblerObj);
  }, [])
  return (
    <div
      id="zwibbler"
      className="zwibbler"
      style={{ width: "calc(100% - 200px)", height: "100%", display: "inline-block" }}
    >
    </div>
  )
}
export default ZwibblerComponent