import React from 'react';
import 'src/assets/scss/reset.scss'
import 'src/assets/scss/Components.scss'

interface Props{
    title:string
    errorModalOpen:boolean 
    handleErrorModal
}

const Modal: React.FC<Props> = (props: Props) =>{
   
  return (
    <div className="modal-shadow" style={{display :props.errorModalOpen ? "flex" : "none"}}>
        <div className="modal">
            <div className="modal-title">
                {props.title}
            </div>
            <div className="modal-actions">
                <div className="modal-actions-alert" onClick={props.handleErrorModal}>확인</div>
            </div>
        </div>
    </div>
  );
};


export default Modal 