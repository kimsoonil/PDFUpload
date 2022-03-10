import React,{ useState } from 'react';
import 'src/assets/scss/reset.scss'
import 'src/assets/scss/Components.scss'

interface Props{
 open
 handleSaveModal
 handleClickSaveFile
 numPages
}

const DawnloadModal: React.FC<Props> = (props: Props) =>{
   const [DownloadName, setDownloadName] = useState("");

  return (
    <div className="modal-shadow" 
    
     style={{display :props.open ? "flex" : "none"}}
    >   
        <div className="modal-save" style={{height:"auto"}}>
            <div className="modal-save-grid">
                <div className="modal-save-grid-name">
                    파일 이름
                </div>    
                <div className="modal-save-grid-input">
                    <input type="text" name='name' placeholder="저장할 파일 이름을 적어주세요" 
                     value={DownloadName} onChange={e => setDownloadName(e.target.value)}
                    />
                </div>
            </div> 
           
            
            <div className="modal-save-grid total-page">
                <div className="total-page-title">
                    총 페이지 수
                </div>
                <div className="total-page-number">
                    {props.numPages}장
                </div>
            </div>
            <div className="modal-save-actions">
                <div className="modal-actions-close" onClick={props.handleSaveModal}>취소</div>
                <div className="modal-actions-confirm" 
                onClick={() => props.handleClickSaveFile(DownloadName)} 
                >  내보내기</div>
            </div>
          
        </div>
    </div>
  );
};


export default DawnloadModal 