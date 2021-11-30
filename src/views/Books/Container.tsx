import React, { Ref } from 'react';

import 'src/assets/scss/reset.scss'
import 'src/assets/scss/Books.scss'

interface Props{
    item
    index:number
    handleClickBook
    handleClickUpdataFile
    UpdataFileRef
    bookDeeteModal
    UpdataBooksTitle
}

const Container: React.FC<Props> = (props: Props) =>{
        let imgSrc ;
        if(props.item.img.length < 50){
        imgSrc = require(`src/images/main/${props.item.img}`).default
        }else{
          imgSrc = props.item.img
        }
        return(
        <div className="container-card" >
            <div >
                 <img src={imgSrc} alt={`${props.item.img}`}/> 
                <div className="container-card-shadow" 
                onClick={() => props.handleClickBook(props.item.id)}
                >
                    <div className="iocnGraup">
                        <div className="description" onClick={e => props.handleClickUpdataFile(e , props.item.id)}>
                            <img src={require("src/images/main/photo.svg").default} alt="icon-poto" />
                            
                        </div>
                        <div className="delete" onClick={(e => props.bookDeeteModal(e,props.item.id))}>
                            <img src={require("src/images/main/trash.png").default} alt="icon-poto" />
                        </div>
                    </div>    
                </div>
            </div>
            
            <div className="container-card-title" >
            {props.item.title !== "" ?
            <input defaultValue= {props.item.title } onChange={(e) => props.UpdataBooksTitle(e, props.item.id)}/> :
            <input placeholder= "책제목을 입력해주세요" onChange={(e) => props.UpdataBooksTitle(e, props.item.id)} />
            }
            
            </div>
        </div> 
        )
};

export default React.memo(Container);