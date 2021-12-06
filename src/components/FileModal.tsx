import React from 'react';
import 'src/assets/scss/reset.scss'
import 'src/assets/scss/Components.scss'

interface Props{
 
}

const FileModal: React.FC<Props> = (props: Props) =>{
   
  return (
    <div className="modal-shadow" 
    style={{display : "none" }}
    // style={{display :props.errorModalOpen ? "flex" : "none"}}
    >
        <div className="modal-file">
            <div className="modal-file-title">
                파일 첨부
            </div>
            <div className="modal-file-input">
                <input type="text" className="modal-file-input-text" value="파일을 첨부해주세요." />
                <div className="modal-file-input-btn">첨부</div>
            </div>
            <input type="file" />
        </div>
    </div>
  );
};


export default FileModal 