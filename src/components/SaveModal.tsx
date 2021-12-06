import React,{ useState } from 'react';
import 'src/assets/scss/reset.scss'
import 'src/assets/scss/Components.scss'
import { AiOutlineCheck } from "react-icons/ai";
interface Props{
 
}

const SaveModal: React.FC<Props> = (props: Props) =>{
   const [pageCheckbox, setPageCheckbox] = useState("all");

  return (
    <div className="modal-shadow" 
    style={{display : "flex" }}
    // style={{display :props.errorModalOpen ? "flex" : "none"}}
    >
        <div className="modal-save">
            <div className="modal-save-grid">
                <div className="modal-save-grid-name">
                    파일 이름
                </div>    
                <div className="modal-save-grid-input">
                    <input type="text" placeholder="저장할 파일 이름을 적어주세요"/>
                </div>
            </div> 
            <div className="modal-save-grid">
                <div className="modal-save-grid-name" style={{paddingTop:"24px"}}>
                    페이지
                </div>
                <div className="modal-save-grid-page">
                    <input type="checkbox" id="all" checked={pageCheckbox==="all" ? true : false}/> <label htmlFor="all" onClick={() => setPageCheckbox("all")}><AiOutlineCheck /></label><div className="checkbox-label">모두</div>
                    <input type="checkbox" id="select"checked={pageCheckbox==="select" ? true : false}/> <label htmlFor="select" onClick={() => setPageCheckbox("select")}><AiOutlineCheck /></label><div className="checkbox-label">선택범위 </div><input type="text" className="selectionRange" defaultValue="1" disabled={pageCheckbox==="all" ? true : false} />
                </div>
            </div>
            <div className="modal-save-grid">
                <div className="modal-save-grid-half">
                    <div className="modal-save-grid-name">
                        포맷
                    </div>
                    <select >
                        <option value="PDF">PDF</option>
                        <option value="JPG">JPG</option>
                        <option value="PNG">PNG</option>
                    </select>
                </div>
                <div className="modal-save-grid-half">
                    <div className="modal-save-grid-name">
                        사이즈 
                    </div>
                    <input type="text" className="input-save" value="210mm x 297mm" disabled/>
                </div>
            </div>
            <div className="modal-save-grid">
                <div className="modal-save-grid-name" style={{paddingTop:"24px"}}>
                    경로
                </div>
                <div className="modal-save-route">
                    <input type="text" className="modal-save-route-input" value="파일을 첨부해주세요." />
                    <div className="modal-save-route-input-btn">찾아보기</div>
                </div>
            </div>
            <div className="modal-save-grid total-page">
                <div className="total-page-title">
                    총 페이지 수
                </div>
                <div className="total-page-number">
                    1,123장
                </div>
            </div>
            <div className="modal-save-actions">
                <div className="modal-actions-close" >취소</div>
                <div className="modal-actions-confirm" >  내보내기</div>
            </div>
            
        </div>
    </div>
  );
};


export default SaveModal 