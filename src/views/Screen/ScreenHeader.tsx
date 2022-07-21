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
     
    </div>
    <div className='header-center'>
      PDF Upload
    </div>
    <div className='header-right'>
    <button className="header-button download-pdf" onClick={() => props.handleSaveModal()} >내보내기</button>
     {/* <button className="header-btn" onClick={() =>  props.handleDownloadModal()} >변환하기</button> */}
    {/*<button className="header-btn" onClick={() =>  props.handleDownloadModal()} >변환하기</button> */}
    </div>
  </div>
 
    
  </div>
  )
  
};
export default ScreenHeader