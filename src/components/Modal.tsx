import React, {useState} from 'react';
import 'src/assets/scss/reset.scss'
import 'src/assets/scss/Components.scss'

interface Props{
    title:string
    content:string
    isOpen:boolean 
    handleModalClose
}

const Modal: React.FC<Props> = (props: Props) =>{
   
  return (
    <div className="modal-shadow" style={{display :props.isOpen ? "flex" : "none"}}>
        <div className="modal">
            <div className="modal-title">
                {props.title}
            </div>
            <div className="modal-content">
                {props.content}
            </div>
            <div className="modal-actions">
                <div className="modal-actions-close" onClick={props.handleModalClose}>취소</div>
                <div className="modal-actions-confirm" onClick={props.handleModalClose}>삭제</div>
            </div>
        </div>
    </div>
  );
};


export default Modal 