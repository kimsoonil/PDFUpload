import React,{ useState,useRef } from 'react';
import 'src/assets/fonts/font.css'
import 'src/assets/scss/reset.scss'
import 'src/assets/scss/Pages.scss'
import { ZwibblerComponent, ZwibblerComponentAPI } from './ZwibblerComponent';

import SaveModal from 'src/components/SaveModal';
import FileModal from 'src/components/FileModal';
const Pages = () => {
  const PDFRef = useRef<HTMLInputElement | null>(null);
  const saveRef = useRef<HTMLInputElement | null>(null);
  const [isFileOpen, setIsFileOpen] = useState(false);
  const [isSaveOpen, setIsSaveOpen] = useState(false);
  const [saveName, setSaveName] = useState("");
  const [saveType, setSaveType] = useState("pdf");
  // const [saveValue, setSaveValue] = useState({type:"pdf",name:""})
  
  // const { name, type } = saveValue   
  const handleClickCreatePDF = () =>{
    handleFileModal(); 
    if(!PDFRef.current) return;
    PDFRef.current.click();
  }
  const handleClickSaveFile = () =>{
    handleSaveModal();
    console.log(saveName);
    if(!saveRef.current) return;
    saveRef.current.click();
  }
  const handleFileModal = () => {
    setIsFileOpen(!isFileOpen);
  }

  const handleSaveModal = () => {
    setIsSaveOpen(!isSaveOpen);
  }
  const handleOnChange = (e) => {
      //input에 name을 가진 요소의 value에 이벤트를 걸었다
   const { name, value } = e.target   

  // 변수를 만들어 이벤트가 발생했을때의 value를 넣어줬다
  name === "type" ?  setSaveType(value) : setSaveName(value);
       console.log(saveName)
       console.log(saveType)
   }
  
  return (
    <div className="App">
      <ZwibblerComponent 
        handleSaveModal={handleSaveModal} 
        PDFRef={PDFRef} 
        saveRef={saveRef} 
        saveType={saveType} 
        saveName={saveName}
        />
      <FileModal open={isFileOpen} handleFileModal={handleFileModal} handleClickCreatePDF={handleClickCreatePDF} />
      <SaveModal 
        open={isSaveOpen} 
        handleSaveModal={handleSaveModal} 
        handleClickSaveFile={handleClickSaveFile} 
        saveType={saveType} 
        handleOnChange={handleOnChange} 
        saveName={saveName}
        />
    </div>
  );
};
export default Pages