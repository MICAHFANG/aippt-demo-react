import { useEffect } from "react";
import "./lib/base64js.js";
import "./lib/chart.js";
import "./lib/geometry.js";
import "./lib/marked.js";
import "./lib/pako.js";
import "./lib/ppt2canvas.js";
import "./lib/ppt2svg.js";
import "./lib/sse.js";
import { pptxObj } from './data/pptx.js'

function App() {
  useEffect(() => {
    const painter = new window.Ppt2Svg("right_canvas",undefined, undefined, pptxObj);
    console.log(pptxObj);
    painter.drawPptx(pptxObj, 0)
    const canvas = painter.svgNode();
    painter.setMode("edit");
  }, []);
  return <svg id="right_canvas"></svg>;
}

export default App;
