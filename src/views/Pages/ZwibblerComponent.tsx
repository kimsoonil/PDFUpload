import React, { useState,forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import { useHistory } from "react-router-dom";
import { CustomNode, CustomNodeClass, ExternalMatrix, FormatterInterface, ICanvasContext, NodeID, ZwibblerClass, ZwibblerContext } from "./zwibbler2";
import "./zwibbler-style.scss";
import { AiOutlineCheck } from "react-icons/ai";
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf";
import pdfjsWorker from "pdfjs-dist/legacy/build/pdf.worker.entry";
import Loading from 'src/components/Loading';
import SaveModal from './SaveModal';
import Registration from './Registration'
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

declare let Zwibbler: ZwibblerClass;

export interface ZwibblerProps {
    data
    CreateSection
    importClicked
    handleSaveModal
}

export interface ZwibblerComponentAPI {
    ctx: ZwibblerContext | null;
    openPDFPage(url: string, pageNo: number): Promise<void>;
}


declare global {
    namespace JSX {
        interface IntrinsicElements {
            "snaptag-page-selector": any;
        }
    }
}

export const ZwibblerComponent = forwardRef<ZwibblerComponentAPI, ZwibblerProps>((props, ref) => {

    const history = useHistory();  
    // Zwibbler configuration, see
    // https://zwibbler.com/configurator.html
    // All names are lower case due to react convention.
    
    const zwibblerConfig = {
        zwibbler: "",
        showtoolbar: "false",
        "z-controller": "mycontroller",
        defaultarrowsize: "10",
        defaultarrowstyle: "solid",
        defaultbrushwidth: "3",
        adaptivebrushwidth: "true",
        defaultfillstyle: "rgba(11, 206, 165, 0.1)",
        background: "white",
        defaultpapersize: "a4",
        outsidepagecolour: "#545861",
        pageview: "true",
        defaultzoom: "page",
        viewmargin: "100,0,0,0",
        showcolourpanel: "false",
        debugoutlinecolour:"transparent",
        defaultstrokestyle:"#0BCEA5",
        defaultlinewidth:0,
        keydragduplicate: "alt",
        keypan: " ",
    };
    const [pageCheckbox, setPageCheckbox] = useState("all");
    const zwibblerEl = useRef<HTMLDivElement | null>(null);
    const ctx = useRef<ZwibblerContext | null>(null);

    // When component is unmounted, destroy Zwibbler.
    useEffect(() => {
        if (!zwibblerEl.current) {
            console.error("Element ref was null");
            return;
        }

        const scope = Zwibbler.attach(zwibblerEl.current, {});
        
        ctx.current = scope.ctx;
        
        return () => {
        
            scope.ctx.destroy();
        };
    }, []);

    // Here we define things that we want to make available in our ref
    useImperativeHandle(ref, () => ({
        get ctx() {
            return ctx.current;
        },

        addImage(url: string) {
            console.log("Child addImage called");
            if (ctx.current) {
                ctx.current.insertImage({ url: url });
            }
        },

        async openPDFPage(url: string, pageno: number) {
            let scale = 2.0;
            let pages = await PDFToImages(url, [pageno], scale);
            if (pages.length !== 1) {
                throw new Error(`Expected one page to be imported`);
            }

            let current = ctx.current;
            if (!current) {
                throw new Error(`Instance has been destroyed`);
            }

            current.begin();
            current.setPageSize(0, pages[0].width / scale, pages[0].height / scale);
            let node = current.createNode("ImageNode", {
                url: pages[0].imageURI,
                layer: "pdfbackground",
            });
            current.scaleNode(node, 1 / scale, 1 / scale);
            current.commit();
        }
    }));
    const listAddStyleClick = el => {
        console.log(el.target.parentElement.parentElement.className);
        let isList = false; 
        if(el.target.parentElement.parentElement.className.indexOf("active") !== -1){
            
            isList=true;
        }
        [...el.target.parentElement.parentElement.parentElement.children].forEach(sib => sib.classList.remove('active'))
        if(!isList)
        el.target.parentElement.parentElement.classList.add('active')
        };
        
    // if (!props.data) return <Loading />
    return (
        <div {...zwibblerConfig} ref={zwibblerEl} className="zwibbler flex-row" z-init="filename='',filetype='pdf'">
            <div className="zwibbler-page-selector">
            <div className="logo">
            <button className="mybutton"onClick={history.goBack}><img src={require("src/images/pages/logo.png").default} alt="logo" /></button>
            </div>
            <div className="page-count">페이지 1</div>
                <div z-sort="ctx.movePage($from,$to)">
                    <div z-for="page in ctx.getPageCount()"
                        draggable='true'
                        z-sortable='true'
                        z-page="page"
                        z-width="130"
                        z-height="130"
                        z-click="ctx.setCurrentPage(page)"
                        z-selected="page==ctx.getCurrentPage()">
                    </div>
                </div>
            </div> 
            <div className="stretch flex-row" style={{ position: "relative" }}>
                <div z-canvas="" className="stretch" />
                <div className="toptoolbar flex-row">
                    <div className="toptoolbar-left" style={{ justifyContent: "flex-start" }}>
                        <button className="mybutton"onClick={history.goBack}><img src={require("src/images/pages/home.png").default} alt="home" /></button>
                        <button className="mybutton download-pdf" onClick={() => props.handleSaveModal()} >내보내기</button>
                        {/* <div z-popup="my-menu"  z-show-position="centre" z-click-dismiss="outside">
                             <SaveModal />
                        </div> */}
                        </div>
                    <div className="toptoolbar-center" style={{ justifyContent: "center" }}>
                        <button className="mybutton" z-disabled="ctx.summary.nodes.length < 2"
                            z-click="ctx.alignNodes('left')">
                            <img src={require('src/images/pages/align-left.png').default} alt="align-left" />
                        </button>
                        <button className="mybutton" z-disabled="ctx.summary.nodes.length < 2"
                            z-click="ctx.alignNodes('centre')">
                            <img src={require('src/images/pages/align-center.png').default} alt="align-center" />
                        </button>
                        <button className="mybutton" z-disabled="ctx.summary.nodes.length < 2"
                            z-click="ctx.alignNodes('right')">
                            <img src={require('src/images/pages/align-right.png').default} alt="align-right" />
                        </button>
                        <button className="mybutton" z-disabled="ctx.summary.nodes.length < 2"
                            z-click="ctx.alignNodes('top')">
                            <img src={require('src/images/pages/align-top.png').default} alt="align-top" />
                        </button>
                        <button className="mybutton" z-disabled="ctx.summary.nodes.length < 2"
                            z-click="ctx.alignNodes('middle')">
                            <img src={require('src/images/pages/align-middle.png').default} alt="align-middle" />
                        </button>
                        <button className="mybutton" z-disabled="ctx.summary.nodes.length < 2"
                            z-click="ctx.alignNodes('bottom')">
                            <img src={require('src/images/pages/align-bottom.png').default} alt="align-bottom" />
                        </button>
                    </div>
                    <div className="toptoolbar-right" style={{ justifyContent: "flex-end" }}>
                        <button> 210<span className="unit">mm</span> x 297<span className="unit">mm</span></button>
                        <div style={{ flex:0,position:"relative"}}><input z-model="myzoom" disabled/><span className="unit percent">%</span></div>
                    </div>
                </div>
            </div>
            <div className="righttoolbar">
                <div className="flex-row pad bottom-bar">
                    <button z-click="ctx.usePickTool()" z-selected="ctx.getCurrentTool()==='pick'" className="mybutton tool-pick">
                        <div className="select-btn"/>
                    </button>
                    <button z-click="useMyRectangleTool()" className="mybutton tool-rectangle"
                        z-selected="ctx.getCurrentTool()==='shape'">
                        <div className="square_draw_btn" />
                    </button>
                    
                    <button  title="Insert image" onClick={props.importClicked} className="mybutton"></button>
                </div>
                
                <div className="transform">  
                    <div className="transform-title">트랜스폼</div>
                    <div className="transform-axis">
                        <div className="transform-X-axis"><span>X</span><input type="number" z-model="currentX"/></div>
                        <div className="transform-Y-axis"><span>Y</span><input type="number" z-model="currentY" /></div>
                        <div className="transform-width"><span>W</span><input type="number" z-model="currentWidth" /></div>
                        <div className="transform-height"><span>H</span><input type="number" z-model="currentHeight" /></div>
                        
                    </div>
                    
                </div>
                <div className="registration">
                    <div className="registration-title">
                    <div className="ceateSection" ><button className="ceateBtn" onClick={() => props.CreateSection()}>등록하기</button> </div></div>
                    <div className="registration-list">
                        <Registration />
                        {/* {props.data?.results.map((item,index) =>{
                            <Registration />
                        })} */}
                        </div>
                    </div>
                </div>
            </div>
    );
});

Zwibbler.controller("mycontroller", (scope: any) => {
    let ctx = scope.ctx as ZwibblerContext;
    scope.snapping = false;

    // widths of each of the brush types
    scope.widths = {
        highlighter: 30,
        brush: 3,
        eraser: 30
    };
    scope.highlighterWidth = 30;
    scope.brushWidth = 3;
    scope.eraserWidth = 30;
    let confirm = window.confirm;

    scope.clearClicked = () => {
        if (confirm("Clear the document?")) {
            ctx.newDocument();
        }
    };

    scope.$watch("snapping", (value: boolean) => {
        ctx.setConfig("snap", value ? 20 : 0);
    });

    console.log("Defining usingHighlighter");
    // We are using the highlighter if we are in brush mode and highlighter has been set to true.
    scope.usingHighlighter = () => {
        return (
            ctx.getCurrentTool() === "brush" && scope.brushMode === "highlighter"
        );
    };

    Object.defineProperty(scope, "opacity", {
        get() {
            return ctx.summary.properties.opacity || 1.0;
        },

        set(value) {
            ctx.setProperty("opacity", parseFloat(value));
        }
    });

    // Make a fake property brushWidth so z-model will work on the brush slider. The property
    // will actually affect the brush in use.
    Object.defineProperty(scope, "brushWidth", {
        get() {
            return scope.widths[scope.brushMode];
        },

        set(value) {
            scope.widths[scope.brushMode] = value;
            ctx.setProperty("lineWidth", value);
        }
    });

    // Called when the user selects a custom background image
    scope.uploadBackground = async () => {
        let result = await ctx.openFile({
            accept: "image/png,image/jpeg",
            format: "data-uri"
        });
        ctx.begin();
        // delete existing background, if present.
        let node = ctx.findNode("background"); // tag
        if (node) {
            ctx.deleteNodes(node);
        }
        await ctx.insertImage({
            url: result.data,
            layer: "background",
            tag: "background"
        });
        ctx.commit();
    };

    scope.getPolygonRotation = (sides: number) => {
        // calculate rotation for an even numbered sides polygon such that
        // its base will be horizontal
        if (sides % 2) {
            return 0;
        }

        return Math.PI / sides;
    };

    scope.openClicked = () => {
        ctx.openFromComputer("yup");
    };

    // add in the ability to zoom by typing into an input box with this property.
    Object.defineProperty(scope, "myzoom", {
        get() {
            return Math.round(ctx.getCanvasScale() * 100);
        },

        set(value) {
            // HTML input control's value is always a string.
            let v = parseFloat(value);
            if (!isNaN(v)) {
                ctx.setZoom(value / 100);
            }
        }
    });

    scope.oneRectangleSelected = () => {
        return ctx.summary.nodes.length === 1 && ctx.summary.properties["_rect"];
    };

    // retrieve the value of the x / y /width/height property of a rectangle
    // as text
    function getRectsProp(name: string) {
        if (!ctx.summary.nodes[0]) return "";
        const sectionData = {
            "sectionX" : Math.round(ctx.summary.properties["x"]),
            "sectionY" : Math.round(ctx.summary.properties["y"]),
            "sectionWidth" : Math.round(ctx.summary.properties["width"]),
            "sectionHeight" : Math.round(ctx.summary.properties["height"]),
        }
        localStorage.setItem("sectionData",JSON.stringify(sectionData))
        return Math.round(ctx.summary.properties[name]);
        
    }

    function setRectsProp(name: string, value: string) {
        let num = parseFloat(value);
        if (isNaN(num) || num < 0) return;
        ctx.setNodeProperty(ctx.getSelectedNodes(), name, num);
    }


    // Allow you to set the current width / height of a rectangle
    Object.defineProperty(scope, "currentX", {
        get() {
            return getRectsProp("x");
        },

        set(value) {
            setRectsProp("x", value);
        }
    });
    Object.defineProperty(scope, "currentY", {
        get() {
            return getRectsProp("y");
        },

        set(value) {
            setRectsProp("y", value);
        }
    });
    Object.defineProperty(scope, "currentWidth", {
        get() {
            return getRectsProp("width");
        },

        set(value) {
            setRectsProp("width", value);
        }
    });
    Object.defineProperty(scope, "currentHeight", {
        get() {
            return getRectsProp("height");
        },

        set(value) {
            setRectsProp("height", value);
        }
    });

    // define a rectangle tool
    scope.useMyRectangleTool = (props: any = {}) => {
        ctx.useShapeTool("RectangleNode", {
            x: 0,
            y: 0,
            width: 100,
            height: 100,
            lockRotation: true,
        }, 100, 100);
    };

    ctx.addKeyboardShortcut("R", (event) => {
        ctx.setNodeProperties(ctx.getSelectedNodes(), {lineWidth: 0});
        let element: HTMLElement = document.getElementsByClassName('tool-rectangle')[0] as HTMLElement;
        element.click();
      });
      //클릭 , 상태 변경시 node style 변경
      ctx.on("node-clicked", function(node, x, y) {
        ctx.setNodeProperties(ctx.getSelectedNodes(), {lineWidth: 3});
    });
    ctx.on("tool-changed", function(toolname) {
        ctx.setNodeProperties(ctx.getSelectedNodes(), {lineWidth: 0});
    });

      ctx.addKeyboardShortcut("V", (event) => {
        let element: HTMLElement = document.getElementsByClassName('tool-pick')[0] as HTMLElement;
        element.click();
      });
      ctx.addKeyboardShortcut("Ctrl + S, \u2318 + S", (event) => {
          
        let element: HTMLElement = document.getElementsByClassName('ceateBtn')[0] as HTMLElement;
        element.click();
      });
      ctx.addKeyboardShortcut("Ctrl + +, ⌘ + + , Ctrl + =, ⌘ + = ", (event) => {
        event.preventDefault();
        document.dispatchEvent(new KeyboardEvent('keypress', {key: '+'}))
        const Keyboard=new KeyboardEvent('keypress', {key: '+'})
        console.log(Keyboard)
      });
      ctx.addKeyboardShortcut("Ctrl + -, ⌘ + -", (event) => {
        event.preventDefault();
        document.dispatchEvent(new KeyboardEvent('keypress', {key: '-'}))
      });
});
interface PDFPage {
    pageno: number;
    imageURI: string;
    width: number;
    height: number;
}

// Relies on pdf.js. Convert the URL to the PDF file into a list of images
// Page numbers start from 0.
// scale lets you increase resulution.
async function PDFToImages(url: string, pages: number[] | null = null, scale = 1.0): Promise<PDFPage[]> {
    console.log("PDFJSLib is ", pdfjsLib);
    let result: PDFPage[] = [];
    scale *= 96 / 72;
    let canvas = document.createElement("canvas");

    let pdf = await pdfjsLib.getDocument(url).promise;
    if (pages === null) {
        pages = [];
        for (let i = 0; i < pdf.numPages; i++) {
            pages.push(i);
        }
    }
    for (let pageno of pages) {
        let page = await pdf.getPage(pageno + 1);
        let view = page.getViewport({ scale });
        canvas.width = view.width;
        canvas.height = view.height;
        let renderContext = {
            canvasContext: canvas.getContext("2d")!,
            viewport: view,
        };
        let d = page.render(renderContext).promise;
        await d;

        result.push({
            pageno: pageno,
            width: canvas.width,
            height: canvas.height,
            imageURI: canvas.toDataURL(),
        });
    }

    return result;
}

// Use a custom node for the rectangles, for more predictable sizing.
// has x, y, width, and height and is not rotatable.
class RectangleNode implements CustomNode {
    constructor(public id: NodeID, private formatter: FormatterInterface) { }
    
    private getRect() {
        return {
            x: this.formatter.getProperty("x"),
            y: this.formatter.getProperty("y"),
            width: this.formatter.getProperty("width"),
            height: this.formatter.getProperty("height"),
        };
    }

    getUntransformedRect() {
        return this.getRect();
    }

    // We don't store a matrix, instead modify x/y/width/height directly.
    // assume no rotation or skew.
    // returns the properties that change by applying the matrix.
    applyTransform(xform: ExternalMatrix) {
        return applyTransformToRect(xform, this.getRect());
    }

    draw(ctx: ICanvasContext) {
        
        // ctx.lineWidth = this.formatter.getProperty("lineWidth")|| 0;
        // ctx.strokeStyle =  this.formatter.getProperty("strokeStyle") || "#0BCEA5";
        // ctx.fillStyle =  this.formatter.getProperty("fillStyle") || "rgba(11, 206, 165, 0.1)";
        ctx.lineWidth = -1;
        ctx.strokeStyle = "#0BCEA5";
        ctx.fillStyle =  "rgba(11, 206, 165, 0.1)";
        let rect = this.getRect();
        ctx.beginPath();
        ctx.rect(rect.x, rect.y, rect.width, rect.height);
        ctx.fill();
        // ctx.stroke();
    }
}

interface IRectangle {
    x: number;
    y: number;
    width: number;
    height: number;
}

function xformPoint(xform: ExternalMatrix, x: number, y: number) {
    return {
        x: xform.m11 * x + xform.m12 * y + xform.dx,
        y: xform.m21 * x + xform.m22 * y + xform.dy,
    };
}

function applyTransformToRect(xform: ExternalMatrix, rect: IRectangle) {
    let tl = xformPoint(xform, rect.x, rect.y);
    let tr = xformPoint(xform, rect.x + rect.width, rect.y);
    let br = xformPoint(xform, rect.x + rect.width, rect.y + rect.height);
    let bl = xformPoint(xform, rect.x, rect.y + rect.height);

    let minx = Math.min(tl.x, tr.x, br.x, bl.x);
    let maxx = Math.max(tl.x, tr.x, br.x, bl.x);
    let miny = Math.min(tl.y, tr.y, br.y, bl.y);
    let maxy = Math.max(tl.y, tr.y, br.y, bl.y);
    return {
        x: minx,
        y: miny,
        width: maxx - minx,
        height: maxy - miny,
    };
}
Zwibbler.addCustomNode("RectangleNode", RectangleNode);