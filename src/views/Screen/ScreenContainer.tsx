import React,{ useState,useRef,useEffect } from 'react';
import { pdfjs ,Document, Page} from "react-pdf";
import SideNavigation from "./SideNavigation";
import KonvaCanvasdraw from './KonvaCanvasdraw.js';
interface Props{
    numPages
    hanldleClickPage
    pdfState
    onDocumentLoadSuccess
    onFileChange
    pageNumber
    handleClickDefaultSetting
    handleClickPartialSetting
    selectTool
    setSelectTool
    transform
    setTransform
   }

const ScreenContainer: React.FC<Props> = (props: Props) =>{
  const screenContainer = useRef<HTMLDivElement | null>(null);
  const [screenWidth, setScreenWidth] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);
  useEffect(() => {
    setScreenWidth(Number(screenContainer.current?.offsetWidth));
    setScreenHeight(Number(screenContainer.current?.offsetHeight));
  },[])
  
  return (
  <div className='screen-container'>
    <div className="screen-left-sideBar" >
    <div className="page-count">페이지 {props.numPages}</div>
    <div className="flex-center" style={{flexDirection:"column"}}> 
    {[...Array(props.numPages)].map((item,index)=>{ return(
    
    <div key={index} className={index === 0 ? 'MovableList select' : 'MovableList'} onClick={(e) => props.hanldleClickPage(e,index+1)}>
      <Document
        file={props.pdfState.file}
        onLoadSuccess={props.onDocumentLoadSuccess}
        noData={<h4></h4>}
        loading={<h4></h4>}
      >
        <Page pageNumber={index+1} width={80} />
      </Document>
          {props.pdfState.file ? (
            <p>
              {index+1} 
            </p>
          ) : null}
          </div>
          )})}
      </div>
    </div>
      <div className='screen-center-container' ref={screenContainer} >
        <input type="file" id="ScreenPdf" onChange={props.onFileChange} accept=".pdf" />
        
        <KonvaCanvasdraw selectTool={props.selectTool} setTransform={props.setTransform} KonvaWidth={screenWidth} KonvaHeight={screenHeight}/>
        <div className="pdfImage">
      
        <Document
            file={props.pdfState.file}
            onLoadSuccess={props.onDocumentLoadSuccess}
            noData={<h4></h4>}
            width={screenContainer.current?.offsetWidth}
          >
            <Page pageNumber={props.pageNumber} />
        </Document>
      </div> 
    </div>
    <SideNavigation 
      handleClickDefaultSetting={props.handleClickDefaultSetting} 
      handleClickPartialSetting={props.handleClickPartialSetting} 
      selectTool={props.selectTool}
      transform={props.transform}
      setTransform={props.setTransform}
      setSelectTool={props.setSelectTool}
      />
   </div>
  
  )
  
};
export default ScreenContainer