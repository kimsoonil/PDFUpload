import React,{ useState,useRef,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import _ from "lodash";
import SaveModal from './SaveModal';
import { RootReducerType } from 'src/modules';
// import { pageInit,pageCreateInit,pageDeleteInit,pageUpdateInit } from 'src/modules/Pages';
// import { sectionInit,sectionCreateInit,sectionUpdateInit,sectionDeleteInit } from 'src/modules/Sections';

// import Loading from 'src/components/Loading';
// import { ZwibblerComponent, ZwibblerComponentAPI } from './ZwibblerComponent';

import 'src/assets/fonts/font.css'
import 'src/assets/scss/reset.scss'
import 'src/assets/scss/Pages.scss'


import FileModal from 'src/components/FileModal';
const Pages = () => {
  // const dispatch = useDispatch();
  // const pageState = useSelector((state: RootReducerType) => state.pages);
  const sectionState = useSelector((state: RootReducerType) => state.sections);
  const [isFileOpen, setIsFileOpen] = useState(true);
  const [isSaveOpen, setIsSaveOpen] = useState(false);
  // const zwibbler = useRef<ZwibblerComponentAPI | null>(null);
  
  // useEffect(() => {
  //   dispatch(sectionInit());   
  // }, [dispatch]); 
  
  const { loading, data, error } = sectionState;

  // async function importClicked() {
  //   if (!zwibbler.current || !zwibbler.current.ctx) return;

  //   // instead, you would get the url from your server here...
  //   let dataURI = (await zwibbler.current.ctx.openFile({
  //     format: "data-uri",
  //     accept: "application/pdf",
  //   })).data as string;

  //   zwibbler.current.openPDFPage(dataURI, 0);
  //   handleFileModal();
  // }
  
  const handleFileModal = () => {
    setIsFileOpen(!isFileOpen);
  }
  const handleSaveModal = () => {
    setIsSaveOpen(!isSaveOpen)
  }
  const CreateSection = () => {
    let getSectionData = JSON.parse(localStorage.getItem('sectionData') || '{}');
    if(getSectionData) {
      const { sectionX,sectionY,sectionWidth,sectionHeight } = getSectionData;
      const SectionData ={
        "page": 1,
        "image_original": "",
        "x": sectionX,
        "y": sectionY,
        "h": sectionHeight,
        "w": sectionWidth,
      }
      // const sectionCreate = dispatch(sectionCreateInit(SectionData));
      
    }
    
  }
  
  async function savePageClicked(saveVale) {
  console.log(saveVale)
    // if (!zwibbler.current || !zwibbler.current.ctx) return;
    // let pageno = zwibbler.current.ctx.getCurrentPage();
    

    // // download for the demo
    // zwibbler.current.ctx.download(`${saveVale.name}.${saveVale.extension}`, { pages: saveVale.pageno, format: saveVale.extension });
  }
  //  if(loading) return <Loading />
  return (
    <div >
{/*       
      <ZwibblerComponent 
        ref={zwibbler}
        data={data}
        CreateSection={() => CreateSection()}
        importClicked={importClicked}
        handleSaveModal={() => handleSaveModal()}
        />
      <FileModal open={isFileOpen} handleFileModal={handleFileModal} importClicked={importClicked} /> */}
      <SaveModal open={isSaveOpen} handleSaveModal={handleSaveModal} savePageClicked={(e) => savePageClicked(e)} />
    </div>
  );
  
};
export default Pages