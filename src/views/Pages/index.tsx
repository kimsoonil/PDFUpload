import React,{ useState } from 'react';
import 'src/assets/scss/reset.scss'
import 'src/assets/scss/Pages.scss'
import { ZwibblerComponent, ZwibblerComponentAPI } from './ZwibblerComponent';

import SaveModal from 'src/components/SaveModal';
import FileModal from 'src/components/FileModal';
const Pages = () => {
  const [isFileOpen, setIsFileOpen] = useState(false);
  const [isSaveOpen, setIsSaveOpen] = useState(false);

  const handleFileModal = () => {
    setIsFileOpen(!isSaveOpen);
  }

  const handleSaveModal = () => {
    setIsSaveOpen(!isSaveOpen);
  }
  return (
    <div className="App">
      <ZwibblerComponent handleSaveModal={handleSaveModal}/>
      <FileModal open={isFileOpen} handleFileModal={handleFileModal}/>
      <SaveModal open={isSaveOpen} handleSaveModal={handleSaveModal}/>
    </div>
  );
};
export default Pages