export declare let Zwibbler: ZwibblerClass;

export interface ZwibblerClass {
    /** Contains references to all of the ZwibblerContexts in use. */
    instances: ZwibblerContext[];

    /** Defines a custom node type */
    addCustomNode(type: string, ctor: CustomNodeClass): void;

    /** Adds a TTF or OTF font for use in PDF files.
     * @param url The url of the font
     * @return aApromise resolving to the name of the font.
     */
    addFont(url: string): PromiseLike<string>;

    /** Attaches a scope to an HTML element, executing all directives.
     * @param id A CSS selector or reference to the element.
     * @param scope The scope to attach.
     */
    attach(id: string | Element, scope: any): MainScope;

    /** Given an SVG Path (as would be used in the d attribute of a path element),
     * returns an array of commands suitable for use in a Zwibbler PathNode.
     */
    commandsFromSVGPath(d: string): number[];

    /** Defines a component for use in the Zwibbler framework, or
     * to be used with in createHTMLNode.
     *
     * @param name The name of the component
     * @param component Defines the component
     */
    component(name: string, component: ComponentWithProperties): void;

    /** Defines a controller function to be used with
     *  &lt;zwibbler z-controller=...
     *
     * @param name The name of the controller that will be specified in z-controller
     * @param fn The controller function to be called.
     */
    controller(name: string, fn: (scope: MainScope) => void): void;

    /** Creates a zwibbler instance, filling the given element with the drawing area.
     * @param id The CSS selector or reference to the element that will contain the drawing area.
     * @param options Optional configuration settings. See Zwibbler configuration settings.
     */
    create(id: string | Element, options?: Properties): ZwibblerContext;

    /** Creates a component previously defined with Zwibbler.component().
     * @param parentScope The parent scope. Any properties defined in the component will be made available to the component.
     * @param name The name of the component, previously registered with Zwibbler.component
     * @param attributes A mapping from property name to expressions. The expression, evaluated on the current scope, will be assigned to the property on the child scope.
     *
     * @return both the HTML element and the child scope.
     */
    createComponent(
        parentScope: any,
        name: string,
        attributes?: { [name: string]: string; },
        childScope?: any
    ): { node: HTMLElement; scope: Scope; };

    /** Destroys a component created with createComponent, removing any event listeners.*/
    destroyComponent(el: HTMLElement): void;

    /** Detach an element previously attached with attach, destroying components and detaching event listeners. */
    detach(el: HTMLElement): void;

    directive(name: string, fn: (d: DirectiveContext) => void): void;

    enableConsoleLogging(): void;

    formatText(ctx: ICanvasContext, o: TextOptions): FormattedText;

    /** Inject some CSS into the web page. The CSS is injected once time, even if called multiple times
     * for the same cssText. It can be removed by calling Zwibbler.destroyAll()
     */
    injectStyle(cssText: string): void;

    /** 
       <ul>
       <li> Destroys an open instances of Zwibbler.
       <li> Removes any styles that have been injected into the web page.
       <li> Forgets any custom nodes or buttons.
       <li> Forgets fonts added by addFont()
       </ul>
       */
    destroyAll(): void;

    /** Draws the given SVG Path commands to the HTML canvas. */
    drawSVGPath(ctx: ICanvasContext, d: string): void;

    /** Converts an rgba object to a string colour.
     * The returned colour is either of the form #000000 or rgba(0,0,0,0.0)
     * if it has transparency.
     */
    makeColour(clr: EColour): string;

    /* Converts a colour string to r, g, b, and a values.
         The values are between 0 and 1.0. */
    parseColour(str: string): EColour;

    /** Creates a popup manually */
    Popup(selector: string | HTMLElement, args: ShowPopupArgs): Popup;

    /**
        Alters a colour to have an opacity value. The colour may be in # or rgb, rgba format.
  
        @param clr The colour, in one of these formats: #ffffff, #fff, rgba(255, 255, 255, 1.0), rgb(255, 255, 255)
        @param opacity Between 0 (fully transparent) and 1 (fully opaque)
  
        @returns colour in rgba or #ffffff format.
       */
    setColourOpacity(clr: string, opacity: number): string;

    setHashValue(name: string, value: string): void;

    /** Loads an image as a promise */
    loadImage(url: string): Promise<HTMLImageElement>;

    /** Convert the document from Zwibbler format to the specified format.
     * The output is returned as a raw string, with each character representing one byte.
     */
    save(docData: string, format: string, options: DrawOptions): Promise<string>;

    /** Opens the document and obtains the number of pages */
    getPageCount(docData: string): number;
}

export interface ZwibblerContext {
    /** A place for you to store application specific data. */
    globals: IAny;

    /** The current property summary, as returned by getPropertySummary(). */
    summary: PropertySummary;

    addKeyboardShortcut(key: string, fn: (e: Event) => void): void;
    addRemoteChanges(changes: string, reset?: boolean): void;
    attach(scope: any, el: HTMLElement): void;

    /** Automatically scroll the document, if necessary, to ensure the given 
          document point is in the view. This is meant to be called by a tool
          repeatedly during a dragging operation.
      */
    autoScroll(docX: number, docY: number): void;

    abortTransaction(): void;
    addSelectionHandle(
        x: number,
        y: number,
        xoffset: number,
        yoffset: number,
        imageUrl: string,
        action: ((pageX: number, pageY: number) => void) | string,
        showFn?: (summary: PropertySummary) => boolean
    ): void;
    addToGroup(parentid: NodeID, ids: NodeIDs): void;
    addToLanguage(data: string): void;
    addPage(width?: number, height?: number): number;
    addPanel(order: number, position: string, div: HTMLElement): void;
    alignNodes(how: AlignRule, ids?: NodeIDs): void;
    begin(): void;
    beginTransaction(): void;

    /** remove keyboard focus */
    blur(): void;

    bringToFront(ids?: NodeIDs): void;
    sendBroadcast(data: string): void;
    setSessionKey(name: string, value: any, persistent: boolean): void;
    canRedo(): boolean;
    canUndo(): boolean;
    clearSelection(): void;
    clearUndo(): void;

    /** @deprecated Use setColour */
    clickColour(colour: string, button2: boolean): boolean | undefined;

    commit(skipUndo?: boolean): void;

    /** @deprecated Use commit(true) */
    commitIrreversibleTransaction(): void;

    /** @deprecated Use commit(false) */
    commitTransaction(): void;

    copy(noStore?: boolean, nodes?: NodeIDs): string;
    createDataNode(properties: any, parent?: NodeID): NodeID;
    createGroup(ids: NodeID[]): NodeID | boolean;
    createLogger(prefix: string): (key: string, ...args: any[]) => void;
    createNode(
        type: string,
        properties: any,
        parent?: NodeID,
        index?: number
    ): NodeID;
    createHTMLNode(
        type: string,
        properties?: any,
        parent?: NodeID,
        index?: number
    ): NodeID;
    createPath(commands: number[]): string;
    createToolbar(divIn: string | HTMLElement, items: ToolbarItem[]): void;
    createShape(points_arr: number[]): null | undefined;
    cut(): string | false;

    /** Define a decoration that is drawn on top of nodes. */
    decoration(decoration: Decoration): void;

    deleteNode(id?: NodeID | NodeID[]): void;
    deleteNodes(id?: NodeID[] | NodeID): boolean | undefined;
    deletePage(index?: number): boolean | undefined;
    deleteSelection(): boolean | undefined;
    destroy(): void;
    digest(fn?: () => void): void;
    dirty(): boolean;
    dispatchEvent(evt: Event): boolean;
    mouseEvent(type: string, argsIn: any): boolean;
    download(
        format: string,
        filename: string,
        rect?: ExternalRect,
        maxWidth?: number
    ): void;
    draw(ctx: ICanvasContext, options?: DrawOptions): void;
    editNodeText(id: NodeID): boolean | undefined;
    duplicate(): void;
    emit(name: string, ...args: any[]): any;
    emitNow(name: string, ...args: any[]): any;
    emitOnce(name: string, ...args: any[]): any;
    skipEvent(name: string): void;
    focus(showKeyboardCursor?: boolean, returnFocus?: HTMLElement | null): void;
    forEachNode(fn: (id: NodeID) => void): void;
    findNode(tag: string): NodeID | null;
    findNodes(tag: string): NodeID[];
    flip(degrees: number, centreX?: number, centreY?: number): void;
    flipNodes(
        nodes: NodeID[],
        degrees: number,
        centreX?: number,
        centreY?: number
    ): void;
    generatePalette(
        divIn: string | HTMLElement,
        size: number,
        options?: PaletteOptions
    ): void;
    getActiveLayer(): string;
    getAllNodes(): NodeID[];
    getBackgroundImage(): string | null;
    getBoundingRectangle(ids: NodeID[]): ExternalRect;

    /** Return the index of the node in its parent, or -1 if it has no parent. */
    getNodeIndex(id: NodeID): number;

    getConfig(name: string): any;
    getCurrentPage(): number;

    /** @deprecated Use getFillColour() */
    getCurrentFillColour(): any;

    /** @deprecated Use getStrokeColour() */
    getCurrentOutlineColour(): any;
    getCurrentTool(): string | null;
    getCustomNode(id: NodeID): any;
    getDocumentCoordinates(
        x: number,
        y: number,
        width?: number,
        height?: number
    ): ExternalRect;
    getDocumentProperty(name: string): any;
    getDocumentSize(page?: number): ExternalRect;
    getElement(): HTMLElement;

    /** Returns the current fill colour for future actions. */
    getFillColour(): string;
    getHistory(): {
        cid: string;
        ts: number;
    }[];
    getImageUrl(src: string): string;
    getLanguageString(key: string): string;
    getLocalChanges(): string;
    getDrawingRectangle(): ExternalRect;
    getGroupParent(id: NodeID): NodeID | null;
    getGroupMembers(id: NodeID): NodeID[];
    getItemProperty(id: NodeID, property: string): any;
    getLayers(): string[];
    getLayerNodes(layerName: string): NodeID[];
    getNodeCoordinates(id: NodeID, x: number, y: number): ExternalPoint | null;
    getNodePageNumber(node: NodeID): number | null;
    getNodeProperty(id: NodeID, property: string): any;
    getNodeRectangle(idsIn: NodeID | NodeID[]): ExternalRect;
    getNodeScale(id: NodeID): ExternalPoint | null;
    getNodeTransform(id: NodeID): number[] | undefined;
    getNodeType(id: NodeID): string;
    getNodeUnderPoint(x: number, y: number): NodeID | null;
    getNodesUnderPoint(x: number, y: number, radius?: number): NodeID[];
    getPageCount(): number;
    getPageNode(pageNumber: number): NodeID | null;
    getPageRect(page: number): ExternalRect;
    getPathData(id: NodeID): number[] | null;
    getPathAsPoints(id: NodeID): ExternalPoint[][] | null;
    getCanvasScale(): number;
    getEditNode(): NodeID | null;
    getScreenCoordinates(x: number, y: number): ExternalPoint;
    getScreenCoordinates(
        x: number,
        y: number,
        width: number,
        height: number
    ): ExternalRect;
    getSelectedEditHandle(): EditHandle | null;

    /** Returns the current outline colour for future actions. */
    getStrokeColour(): string;
    getEditHandleType(id: NodeID, handle: EditHandle): string | null;
    setEditHandle(id: NodeID, handle: EditHandle, type: string): boolean;
    getSelectedNodes(expandGroups?: boolean): NodeID[];
    getPropertySummary(nodes?: NodeID[]): PropertySummary;
    getViewRectangle(): ExternalRect;
    goToRevision(rev: string | null): void;
    /**
        When an API error happens, report it.
      */
    openFile(
        options?: OpenFileArgs
    ): PromiseLike<{
        data: string | ArrayBuffer | File;
        contentType: string;
    }>;
    insertImage(): void;
    insertImage(props: Properties): void;

    /** Insert a page. The page number will be the current page. */
    insertPage(): number;

    /** Insert a page at the given zero-based index. */
    insertPage(index: number): number;

    /** Insert a page of the given size. */
    insertPage(index: number, width: number, height: number): number;

    isLayerVisible(name: string): boolean;
    isNodeSelected(id: NodeID): boolean;
    isPointOverCanvas(pageX: number, pageY: number): boolean;
    load(format: string, data?: any): boolean;
    lockUpdates(timeout: number): void;
    markChangesSent(changes: string): void;
    moveDown(nodes?: NodeID[] | NodeID): void;
    movePage(from: number, to: number): void;
    moveUp(nodes?: NodeID[] | NodeID): void;
    newDocument(): void;
    nextPage(): void;
    on(name: "blur", fn: () => void): this;
    on(
        name: "node-clicked",
        fn: (node: NodeID, x: number, y: number) => void
    ): this;
    on(
        name: "colour-clicked",
        fn: (colour: string, useFill: boolean) => string
    ): this;
    on(name: "connected", fn: () => void): this;
    on(name: "connect-error", fn: (error: Error) => void): this;
    on(name: "document-changed", fn: (info: { remote: boolean; }) => void): this;
    on(
        name: "double-click",
        fn: (x: number, y: number, node: NodeID) => void
    ): this;
    on(name: "drop-shape", fn: (detail: DropDetails) => boolean): this;
    on(name: "destroy", fn: () => void): this;
    on(name: "draw", fn: (canvasContext: ICanvasContext) => void): this;
    on(name: "hint", fn: (text: string) => void): this;
    on(name: "nodes-added", fn: (nodes: NodeID[]) => void): this;
    on(
        name: "nodes-removed",
        fn: (nodes: NodeID[], properties: { [key: string]: Properties; }) => void
    ): this;
    on(name: "nodes-changed", fn: (nodes: NodeID[]) => void): this;
    on(name: "paste", fn: (file: File) => boolean): this;
    on(name: "selected-nodes", fn: () => void): this;
    on(name: "set-page", fn: (pageNumber: number) => void): this;
    on(name: "tool-changed", fn: (toolName: string) => void): this;
    on(name: "resize", fn: () => void): this;
    on(name: "scroll", fn: () => void): this;
    on(name: "session-error", fn: (e: Error) => void): this;
    on(name: "resource-loaded", fn: () => void): this;
    on(name: string, fn: EventFn): this;
    onComplete(fn: (arg?: any) => void): void;
    onNewDocument(): void;
    openFromComputer(extension: string): PromiseLike<this>;
    paste(data?: string): void;
    previousPage(): void;
    print(pageSpec: number | number[], rectIn: ExternalRect): void;
    redo(): void;
    redraw(fn?: (ctx: ICanvasContext) => void): void;
    removeEventListener(name: string, fn: (arg?: any) => void): void;
    resize(): void;
    save(format?: string, erect?: ExternalRect, maxWidth?: number): any;
    setCursor(cursor: string): void;

    /** This tool, if set, is checked before doing anything and may override behaviour of any tool */
    setCustomMouseHandler(tool: CustomTool): void;

    setToolProperty(name: string, value: any): void;
    selectNodes(nodes: NodeID[] | NodeID): void;
    sendToBack(idsin?: NodeID[] | NodeID): void;
    setActiveLayer(layerName: string): void;
    setConfig(name: string, value: any): void;
    setColour(colour: string, useFill: boolean): boolean;
    setCurrentPage(index: number): void;
    setCustomBackgroundFn(fn: BackgroundFn): void;
    setDocumentProperty(name: string, value: any): void;
    setDocumentSize(width: number | null, height: number | null): void;
    setDocumentSizeInTransaction(width: number, height: number): void;
    setDomElement(id: NodeID, element: HTMLElement): void;
    setDomNode(ExtNodeID: NodeID, element: HTMLElement): void;
    getDomElement(id: NodeID): HTMLElement | null;
    getNodeFromElement(el: HTMLElement): NodeID | null;
    getNodeObject(id: NodeID): NodeContext | null;
    setLayerName(oldName: string, newName: string): void;
    setPageBackground(pageNo: number, background: string): void;

    /** Set the paper size to a precise size. */
    setPaperSize(width: number, height: number): void;

    /** Set the paper size to a named size, such as letter, legal, tabloid, a4. */
    setPaperSize(size: string, landscape?: boolean): void;

    setItemProperty(id: NodeID, property: string, value: any): void;
    setNodeProperties(id: NodeID | NodeID[], properties: any): void;
    setNodeProperty(id: NodeID | NodeID[], property: string, value: any): void;
    setNodeVisibility(idsIn: NodeID | NodeID[], visible: boolean): void;
    setOpacity(opacity: number, useFill: boolean): void;
    setPageSize(pageNo: number, width: number, height: number): void;
    setPageView(shown: boolean): void;
    setProperties(obj: any): void;
    setProperty(name: string, value: any): void;
    setViewRectangle(rect: ExternalRect): void;
    setZoom(zoom: string | number, x?: number, y?: number): void;
    showLayer(layerName: string, shown?: boolean): void;
    snap(x: number, y: number, snap?: number): ExternalPoint;

    /** Stop editing node text.
     * @param commit If set to false, changes are discarded.
     */
    stopEditingText(commit: boolean): void;

    /** Returns a string showing the hierarchal relationship of all nodes. */
    toDebugString(): string;
    isFullscreenSupported(): boolean;
    toggleFullscreen(el?: any): void;
    translateNode(id: NodeID | NodeID[], x: number, y: number): false | void;
    removePanel(div: HTMLElement): void;
    removeSelectionHandles(): void;
    rotateDocument(angle: number): void;
    rotateNode(
        idsIn: NodeID[] | NodeID,
        angle: number,
        x?: number,
        y?: number
    ): boolean;
    rotatePage(page: number, angle: number): void;
    scaleNode(
        id: NodeID | NodeID[],
        sx: number,
        sy: number,
        ox?: number,
        oy?: number
    ): boolean;
    setNodeTransform(
        id: NodeID | NodeID[],
        a: number,
        b: number,
        c: number,
        d: number,
        e: number,
        f: number
    ): boolean;
    showColourPicker(x: number, y: number): Promise<string>;
    showColourPicker(property: string, x: number, y: number): void;
    createSharedSession(name?: string): string;
    joinSharedSession(name?: string, allowCreate?: boolean): Promise<void>;

    /** Pauses or resumes sending updates to the shared session. Used for testing. */
    pauseSharedSession(paused: boolean): void;
    stopSharing(): void;
    leaveSharedSession(): void;
    undo(): void;
    ungroup(ids: NodeID | NodeID[]): void;
    upload(
        form: HTMLFormElement,
        message?: string
    ): {
        success: (fn: (response: any, xhr: XMLHttpRequest) => void) => any;
        error: (fn: (xhr: XMLHttpRequest) => void) => any;
    };
    useArrowTool(properties?: any, singleLine?: boolean): void;

    useBrushTool(properties?: Properties): void;
    useBrushTool(colour: string, thickness: number): void;
    useCircleTool(properties?: any): void;

    /** Activate the curve tool, with the given properties.
     * @return false if we are in readOnly mode.
     */
    useCurveTool(properties?: Properties): void;
    useCustomTool(methods: CustomTool): void;
    useEditHandleTool(id: NodeID): void;
    useEllipseTool(properties?: any): void;
    useFreehandTool(): void;
    useFreehandTool(properties: any, mode?: string): void;
    useFreehandTool(colour: string, thickness: number, mode?: string): void;
    useStampTool(urlOrObject: any, multiStamp?: boolean): void;
    useLineTool(properties?: Properties, arg?: { singleLine?: boolean; }): void;
    usePanTool(): void;
    usePickTool(): void;
    usePolygonTool(
        numSides: number,
        rotation: number,
        innerReduction?: number,
        properties?: {}
    ): void;
    useQuadraticBezierTool(properties?: any): void;
    useRectangleTool(properties?: any): void;
    useRoundRectTool(properties?: any): void;
    useShapeBrushTool(colour: any, thickness?: number): void;
    useShapeTool(
        nodeType: string,
        properties: any,
        width: number,
        height: number,
        dragStyle?: string,
        autoPickTool?: null
    ): void;
    useSquareTool(properties: any): void;
    useTextTool(properties?: any): void;
    zoomIn(): void;
    zoomOut(): void;

    addGridColumn(node: NodeID, width: number, index?: number): void;
    addGridRow(node: NodeID, height: number, index?: number): void;
    setGridColumn(node: NodeID, index: number, width: number): void;
    setGridRow(node: NodeID, index: number, height: number): void;
    addNodeToGrid(
        grid: NodeID,
        child: NodeID,
        where: { row: number; column: number; endRow?: number; endColumn?: number; }
    ): void;
    createGridNode(spec: GridSpec): NodeID;
}

export type Properties = IAny;
interface IAny {
    [key: string]: any;
}

export interface MainScope extends IAny {
    ctx: ZwibblerContext;
    "showPopup"(name: string, args?: ShowPopupArgs): void;
    "hidePopup"(name: string): void;
}

export interface Scope extends MainScope {
    ctx: ZwibblerContext;
    element: HTMLElement;
    id: string;
    parent: Scope;
    children: Scope[];
    ze: null;
    type: string;
    props: Properties;
}

type ControllerFn = (scope: Scope) => void;

export interface ComponentWithProperties extends Component {
    propertyPanel?: string;
    propertyPanelController?: ControllerFn;
    defaults?: any;
    controller?: ControllerFn | null;
    draw?: (scope: any, context: ICanvasContext) => void;
}

export interface Component {
    properties?: string[];
    style?: string;
    template?: string | HTMLElement;
    controller?: ((scope: any, info: DirectiveContext) => void) | null;
}

export interface DirectiveContext {
    scope: any;
    element: HTMLElement;
    name: string;
    value: string;
    "emit"(eventName: string, arg: any): void;
    "listen"(eventName: string, fn: (this: HTMLElement, e: any) => void): void;
    "watch"(expr: string, changeFn: (newValue: any) => void): void;
    "eval"(expr: string): any;
    "destructor"(fn: () => void): void;
}

export type NodeID = string;
export type NodeIDs = NodeID | NodeID[];

export interface ToolbarItem {
    toolName?: string;
    onclick?: (this: HTMLElement, ctx: ZwibblerContext, e: Event) => void;
    title?: string;
    background?: string;
    image?: string;
    html?: string;
}

export interface ShowPopupArgs {
    x?: number;
    y?: number;
    refElement?: HTMLElement;
    showPosition?: string | null;
    clickToDismiss?: string | null;
    parent?: HTMLElement;
    onhide?: () => void;

    // Overlay colour (default: "transparent")
    overlay?: string;
}

interface ExternalPoint {
    x: number;
    y: number;
}

interface ExternalRect extends ExternalPoint {
    width: number;
    height: number;
    toString?: () => string;
}

export interface ICanvasDrawContext {
    arc(
        x: number,
        y: number,
        radius: number,
        sa: number,
        ea: number,
        counterclockwise?: boolean
    ): void;
    arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void;
    beginPath(): void;
    closePath(): void;
    moveTo(x: number, y: number): void;
    lineTo(x: number, y: number): void;
    quadraticCurveTo(x1: number, y1: number, x2: number, y2: number): void;
    bezierCurveTo(
        x1: number,
        y1: number,
        x2: number,
        y2: number,
        x3: number,
        y3: number
    ): void;
    rect(a: number, b: number, c: number, d: number): void;
}
export declare type HTMLImageSource = HTMLImageElement | HTMLCanvasElement;
export declare type ICanvasPattern = {};
export declare type ICanvasGradient = {
    addColorStop(offset: number, color: string): void;
};

/**
 * The ICanvasContext is a subset of behaviour of HTML canvas.
 * Zwibbler guarantees to implement this on SVG, PDF, as well as on-screen.
 */
export interface ICanvasContext extends ICanvasDrawContext {
    setTransform(
        a: number,
        b: number,
        c: number,
        d: number,
        e: number,
        f: number
    ): void;
    transform(
        a: number,
        b: number,
        c: number,
        d: number,
        e: number,
        f: number
    ): void;
    translate(x: number, y: number): void;
    rotate(a: number): void;
    scale(x: number, y: number): void;
    stroke(): void;
    fill(): void;
    fillText(text: string, x: number, y: number): void;
    strokeText(text: string, x: number, y: number): void;
    fillRect(x: number, y: number, width: number, height: number): void;
    strokeRect(x: number, y: number, width: number, height: number): void;
    save(): void;
    restore(): void;
    measureText(
        s: string
    ): {
        width: number;
    };
    drawImage(image: HTMLImageSource, dx: number, dy: number): void;
    drawImage(
        image: HTMLImageSource,
        dx: number,
        dy: number,
        dWidth: number,
        dHeight: number
    ): void;
    drawImage(
        image: HTMLImageSource,
        sx: number,
        sy: number,
        sWidth: number,
        sHeight: number,
        dx: number,
        dy: number,
        dWidth: number,
        dHeight: number
    ): void;
    createLinearGradient(
        x0: number,
        y0: number,
        x1: number,
        y1: number
    ): ICanvasGradient;
    setLineDash(dashes: number[]): void;
    clip(): void;
    textBaseline: string;
    fillStyle: IFillStyle;
    strokeStyle: IFillStyle;
    globalCompositeOperation: string;
    globalAlpha: number;
    lineWidth: number;
    ZwibblerBackgroundPattern?: CanvasPattern | null;
    font: string;
    shadowOffsetX: number;
    shadowOffsetY: number;
    shadowBlur: number;
    shadowColor: string;
    lineJoin: string;
    lineCap: string;
    lineDashOffset: number;
    miterLimit: number;

    /** In SVG, starts a new &lt;g> tag with the given attributes. */
    pushGroup?(attributes: { [key: string]: string; }): void;

    /** In SVG, closes a &lt;g> tag previously opened with pushGroup. */
    popGroup?(): void;

    createPattern(src: HTMLImageSource, how: string): CanvasPattern | null;
}

type IFillStyle = string | ICanvasPattern | ICanvasGradient;

interface PropertySummary {
    properties: Properties;
    types: { [key: string]: true; };
    nodes: NodeID[];
    empty: boolean;
}

interface OpenFileArgs {
    /** Example: "".jpg,.png" */
    accept?: string;
    format?: "text" | "data-uri" | "ArrayBuffer" | "File";
    capture?: "" | "user" | "environment";
}

type EventFn = (...args: any[]) => void;

export interface NodeContext extends NodeScope {
    ctx: ZwibblerContext;
}

// A proxy that wraps properties of a node, calling the appropriate set functions.
export interface NodeScope {
    id: string;
    type: string;
    props: Properties;
    parent: NodeScope | null;
    element?: HTMLElement;
    children: NodeScope[];
}

export interface ZwibblerButton {
    name: string;
    image: string;
    onclick: (e: ZwibblerContext) => void;
}

export interface CustomTool {
    enter?(): void;
    leave?(): void;
    onMouseClick?(x: number, y: number, e: Event): void;
    onDoubleClick?(x: number, y: number, e: Event): void;
    onKeyCommand?(action: string, e: KeyboardEvent): void;
    onMouseDown?(x: number, y: number, e: Event): void;
    onMouseUp?(x: number, y: number, e: Event): void;
    onMouseMove?(x: number, y: number, e: Event): void;
    onMouseWheel?(x: number, y: number, change: number, e: Event): void;
    onContextMenu?(x: number, y: number, e: Event): void;
    onColour?(colourName: string): void;
    onOpacity?(opacity: number): void;
    onRedraw?(canvasCtx: ICanvasContext): void;
    onGesture?(e: IGestureEvent): void;
    getToolName?(): string;
}

export interface IGestureEvent {
    rotation: number;
    scale: number;
}

export interface DrawOptions {
    page?: number;
}

export type AlignRule =
    | "top"
    | "middle"
    | "bottom"
    | "left"
    | "centre"
    | "right";

export interface PaletteOptions {
    onColour(colour: string, rightButton: boolean): void;
    onOpacity(opacity: number, rightButton: boolean): void;
}

export interface DropDetails {
    docX: number;
    docY: number;
    nodes: {
        id: NodeID;
    }[];
}

export interface TextOptions {
    text: string;
    width?: number;
    height?: number;
    font?: string;
    valign?: string;
    halign?: string;
    textDecoration?: string;
}

export interface FormattedText {
    "draw"(ctx: ICanvasContext, x: number, y: number): void;
    width: number;
    height: number;
}

export interface Decoration {
    appliesTo?(node: NodeID, ctx: ZwibblerContext): boolean;
    xoffset?: number;
    yoffset?: number;
    x?: number;
    y?: number;
    width?: number;
    onclick?(node: NodeID, ctx: ZwibblerContext, e: Event): void;
    image?: string;
    hoverImage?: string;
}

export interface EColour {
    r: number;
    g: number;
    b: number;
    a: number;
}

export type BackgroundFn = (
    ctx: ICanvasContext,
    x: number,
    y: number,
    width: number,
    height: number
) => void;

export interface EMatrix {
    m11: number;
    m12: number;
    m21: number;
    m22: number;
    dx: number;
    dy: number;
}

export interface IPoint {
    x: number;
    y: number;
}

export interface FormatterInterface {
    formatFill(ctx: ICanvasContext, name: string, fillStyle: string): void;
    getFill(name: string): IFillStyle;
    reformat(): void;
    loadImage(
        url: string,
        fn: (img: HTMLImageElement, url: string) => void
    ): void;
    fillEraser(ctx: ICanvasContext): void;
    strokeEraser(ctx: ICanvasContext): void;
    formatText(ctx: ICanvasContext, o: TextOptions): FormattedText;
    parseFront(font: string): ParsedFont;
    getConfig(key: string): any;
    transformPoint(x: number, y: number): IPoint;
    getTransform(): EMatrix;
}

export interface CustomNode {
    setProperty?(name: string, value: any): void;
    hasEditMode?(): boolean;
    getEditHandles?(): IPoint[];
    hittest?(x: number, y: number, radius: number): boolean;
    moveEditHandle?(index: EditHandle, x: number, y: number): void;
    getProperty?(name: string): any;
    setHidden?(hide: boolean): boolean;
    format(ctx: ICanvasContext, formatter: FormatterInterface): void;
    draw(ctx: ICanvasContext, formatter: FormatterInterface): void;
}

type CustomNodeClass = new (id: NodeID) => CustomNode;

export interface ParsedFont {
    fontFamily: string;
    fontSize: string;
    fontStyle: string;
    fontWeight: string;
    fontVariant: string;
    lineHeight: string;
}

export interface Popup {
    destroy(): void;
    show(x: number, y: number, clickToDismiss?: boolean, modal?: boolean): void;
    hide(): void;
    onshow(): void;
    onhide(): void;
    isShown(): boolean;
}

export type EditHandle = string | number | { getCursor(): string; };

export interface GridSpec {
    columns: number[];
    rows: number[];
}

export interface CellSpec {
    column: number;
    row: number;
    endColumn?: number;
    endRow?: number;
}
