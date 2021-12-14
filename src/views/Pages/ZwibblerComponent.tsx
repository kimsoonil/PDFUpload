import React, { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import { useHistory } from "react-router-dom";
import { ZwibblerClass, ZwibblerContext } from "./zwibbler2";
import "./zwibbler-style.scss";
import { rootCertificates } from "tls";

/*TODO
- main area and toolbar area
- buttons on top
- paper border takes into account buttons on top.
- icons for alignment buttons
- alignment buttons
- selected rectangle's width/height
- list of rectangles
- alignment selection buttons work

- save as image
- set page size
- X, Y, height, width of created reactangle
- 10 List of created rectangles
*/

declare let Zwibbler: ZwibblerClass;

export interface ZwibblerProps {
    handleSaveModal
}

export interface ZwibblerComponentAPI {
    ctx: ZwibblerContext | null;
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
        defaultfillstyle: "white",
        background: "white",
        defaultpapersize: "a4",
        outsidepagecolour: "#545861",
        pageview: "true",
        defaultzoom: "page",
        viewmargin: "100,0,0,0",
        showcolourpanel: "false",
    };

    const zwibblerEl = useRef<HTMLDivElement | null>(null);
    const ctx = useRef<ZwibblerContext | null>(null);
    

    // When component is unmounted, destroy Zwibbler.
    useEffect(() => {
        if (!zwibblerEl.current) {
            console.error("Element ref was null");
            return;
        }

        const scope = Zwibbler.attach(zwibblerEl.current, {});
        //ctx.current = scope.ctx;
        console.log("Creating...");
        return () => {
            console.log("Destroying");
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
        }
    }));

    return (
        <div {...zwibblerConfig} ref={zwibblerEl} className="zwibbler flex-row">
           
            <div className="zwibbler-page-selector">
            <div className="logo">
            <button className="mybutton"onClick={history.goBack}><img src={require("src/images/pages/logo.png").default} alt="logo" /></button>
            </div>
            <div className="page-count">페이지 1</div>
                <button z-if="ctx.getConfig('showPageSelectorControls')"
                    z-click="ctx.setCurrentPage(ctx.insertPage(ctx.getCurrentPage()+1))">
                    +
                </button>
                <button z-if="ctx.getConfig('showPageSelectorControls')"
                    z-click="ctx.deletePage(ctx.getCurrentPage())">
                    -
                </button>
                <br />
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
            </div>            <div className="stretch flex-row" style={{ position: "relative" }}>
                <div z-canvas="" className="stretch" />
                <div className="toptoolbar flex-row">
                    <div className="toptoolbar-left" style={{ justifyContent: "flex-start" }}>
                        <button className="mybutton"onClick={history.goBack}><img src={require("src/images/pages/home.png").default} alt="home" /></button>
                        <button className="mybutton" onClick={props.handleSaveModal}>내보내기</button>
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
                        <button> 210mm x 297mm</button>
                        <input z-model="myzoom" style={{ width: "55px" ,textAlign:'center'}} disabled/>
                    </div>
                </div>
            </div>
            <div className="righttoolbar">
                <div className="flex-row pad bottom-bar">
                    <button z-click="ctx.usePickTool()" z-selected="ctx.getCurrentTool()==='pick'" className="mybutton">
                        <div className="select-btn"/>
                    </button>
                    <button z-click="ctx.useRectangleTool({_rect:true})" className="mybutton"
                        z-selected="ctx.getCurrentTool()==='rectangle'">
                        <div className="square_draw_btn" />
                    </button>
                    <button title="Insert image" z-click="insertImage()" className="mybutton"><i className="fa fa-file-image-o"></i></button>
                </div>
                <div z-if="true||oneRectangleSelected()" 
                // className="flex-row wrap edit-rect pad"
                >
                <div className="transform">  
                    <div className="transform-title">트랜스폼</div>
                    <div className="transform-axis">
                        <div className="transform-X-axis"><span>X</span><input type="text" defaultValue="0" /></div>
                        <div className="transform-Y-axis"><span>Y</span><input type="text" defaultValue="0" /></div>
                        <div className="transform-width"><span>W</span><input type="text" defaultValue="0" /></div>
                        <div className="transform-height"><span>H</span><input type="text" defaultValue="0" /></div>
                    </div>
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

    scope.rightTriangleClicked = () => {
        ctx.useShapeTool(
            "PathNode",
            {
                //@ts-ignore
                commands: Zwibbler.commandsFromSVGPath("M0,0l100,100h-100v-100z")
            },
            100,
            100
        );
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

    scope.downloadAs = (type: string) => {
        let ext = type;
        if (type === "yup") {
            type = "zwibbler3";
        }

        ctx.download(type, `${scope.title()}.${ext}`);
    };

    scope.openClicked = () => {
        ctx.openFromComputer("yup");
    };

    // add in the ability to zoom by typing into an input box with this property.
    Object.defineProperty(scope, "myzoom", {
        get() {
            return Math.round(ctx.getCanvasScale() * 100) + '%';
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
});

// Zwibbler directive to call a method when enter is clicked.