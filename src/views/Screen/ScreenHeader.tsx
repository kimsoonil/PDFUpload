import React from 'react';
import { useHistory } from "react-router-dom";


interface Props{
    handleDownloadModal
    handleSaveModal
    title
   }
const ScreenHeader: React.FC<Props> = (props: Props) =>{
  
  const history = useHistory(); 

  
  return (
  
  <div className='screen'>
  <div className='header'>
    <div className='header-left'>
      <div className="logo">
        <button className="" onClick={() => window.location.replace("/books")}><img src={require("src/images/pages/logo.png").default} alt="logo" /></button>
      </div>
      <div className="flex-center">
        <button className="header-button tooltip-btn" onClick={() => window.location.replace("/books")}><img src={require("src/images/pages/home.svg").default} alt="home" /><div className='tooltip tooltip-left' style={{top: 42,right: -30}}>홈 이동</div></button>
        <button className="header-button download-pdf" onClick={() => props.handleSaveModal()} >내보내기</button>
      </div>
    </div>
    <div className='header-center'>
      {props.title}
    </div>
    <div className='header-right'>
     {/* <button className="header-btn" onClick={() =>  props.handleDownloadModal()} >변환하기</button> */}
    {/*<button className="header-btn" onClick={() =>  props.handleDownloadModal()} >변환하기</button> */}
    </div>
  </div>
 
    
  </div>
  )
  
};
export default ScreenHeader