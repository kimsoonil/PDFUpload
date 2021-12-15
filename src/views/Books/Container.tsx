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
    ChangeBooksTitle
    KeyPressBooksTitle
}

const Container: React.FC<Props> = (props: Props) =>{
    
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
                        <div className="description" onClick={e => props.handleClickUpdataFile(e , props.item.id)}>
                            <img src={require("src/images/main/photo.png").default} alt="icon-poto" />
                            
                        </div>
                        <div className="delete" onClick={(e => props.bookDeeteModal(e,props.item.id))}>
                            <img src={require("src/images/main/trash.png").default} alt="icon-poto" />
                        </div>
                    </div>    
                </div>
            </div>
            
            <div className="container-card-title" >
            {props.item.title !== "" ?
            <input defaultValue= {props.item.title } onKeyPress={(e) => props.KeyPressBooksTitle(e, props.item.id)} onChange={(e) => props.ChangeBooksTitle(e)}/> :
            <input placeholder= "책제목을 입력해주세요" onKeyPress={(e) => props.KeyPressBooksTitle(e, props.item.id)} onChange={(e) => props.ChangeBooksTitle(e)} />
            }
            
            </div>
        </div> 
        )
};

export default React.memo(Container);