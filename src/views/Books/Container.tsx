import React, { Ref, useState } from 'react';

import 'src/assets/scss/reset.scss'
import 'src/assets/scss/Books.scss'

interface Props{
    item
    index:number
    handleClickBook
    handleClickUpdataFile
    UpdataFileRef
    bookDeeteModal
    ChangeBooksTitle
    KeyPressBooksTitle
}

const Container: React.FC<Props> = (props: Props) =>{
    const [isInputState, setIsInputState] = useState(false);
        let imgSrc ;
        if(props.item.image_cover){
            if(props.item.image_cover.length < 50){
                imgSrc = require(`src/images/main/${props.item.img}`).default
                }else{
                  imgSrc = props.item.image_cover
                }
        }
        return(
        <div className="container-card" >
            <div >
                 <img src={imgSrc} alt={`${props.item.img}`}/> 
                <div className="container-card-shadow" 
                onClick={() => props.handleClickBook(props.item.id)}
                >
                    <div className="iocnGraup">
                        <div className="description flex-center" onClick={e => props.handleClickUpdataFile(e , props.item.id)}>
                            <img src={require("src/images/main/photo.svg").default} alt="icon-poto" />
                            
                        </div>
                        <div className="delete flex-center" onClick={(e => props.bookDeeteModal(e,props.item.id))}>
                            <img src={require("src/images/main/trash.svg").default} alt="icon-poto" />
                        </div>
                    </div>    
                </div>
            </div>
            
            <div className="container-card-title" >
            {props.item.title !== "" ?
            <div onClick={() => setIsInputState(true)}><span style={{display:isInputState?'none':'inline'}}>{props.item.title}</span>  <input style={{display:isInputState?'inherit':'none'}} defaultValue= {props.item.title } onKeyPress={(e) => props.KeyPressBooksTitle(e, props.item.id)} onChange={(e) => props.ChangeBooksTitle(e)} /> </div>:
            <input placeholder= "책 제목 입력" defaultValue="" onKeyPress={(e) => props.KeyPressBooksTitle(e, props.item.id)} onChange={(e) => props.ChangeBooksTitle(e)} />
            }
            </div>
            {props.item.is_active ?
                <div className='div-active'><span className='icon-active-true '>승인완료</span></div>:
                <div className='div-active'><span className='icon-active-false '>신청접수</span></div>
            }
        </div> 
        )
};

export default React.memo(Container);