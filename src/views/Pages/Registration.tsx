import React,{useState, useEffect} from 'react';
import 'src/assets/scss/reset.scss'
import "./zwibbler-style.scss";

interface Props{
 
}

const Registration: React.FC<Props> = (props: Props) =>{
    const [registrationTitle, setRegistrationTitle] = useState("제목입력");
    const [registrationAddress, setRegistrationAddress] = useState("www.naver.com");
    const [isTitleState, setTitleState] = useState(false);
    const [isAddressState, setAddressState] = useState(false);
    const [titleHover, setTitleHover] = useState(true);
    const [addressHover, setAddressHover] = useState(true);
  
    
    const listAddStyleClick = el => {
        let isList = false; 
        if(el.target.parentElement.parentElement.className.indexOf("active") !== -1){
            
            isList=true;
        }
        [...el.target.parentElement.parentElement.parentElement.children].forEach(sib => sib.classList.remove('active'))
        if(!isList)
        el.target.parentElement.parentElement.classList.add('active')
        };
    const titleBlur = () => {
        setTitleState(false);
        setTitleHover(true);
    }
    const addressBlur = () => {
        setAddressState(false);
        setAddressHover(true);
    }
    return (
        <div className="registration-list-item" >
        <div className="registration-list-item-title" >
            <div onClick={listAddStyleClick} className="arrow" />
            {registrationTitle !== "" ? 
                <div onClick={() => setTitleState(true)} className='registration-list-item-title-input' >
                    <span style={{display:isTitleState?'none':'flex'}}  >{registrationTitle}</span>
                    <input style={{display:isTitleState?'inherit':'none'}} defaultValue= {registrationTitle } onFocus={() => setTitleHover(false)} onBlur={() => titleBlur()} />
                </div>
                :
                <input placeholder="제목 입력" />
            }
            
            <div className="icon-hover" style={{opacity:titleHover? "1":"0"}}><div className="icon-link-box"><span className="icon-link"/></div><span className="icon-trash"/></div>
            </div>
            <div className="hover">
                <div className="registration-list-item-link">
                {registrationAddress !== "" ?
                 <div onClick={() => setAddressState(true)} className='registration-list-item-title-input'>
                    <span style={{display:isAddressState?'none':'flex'}}>{registrationAddress}</span>
                    <input style={{display:isAddressState?'inherit':'none'}} defaultValue= {registrationAddress } onFocus={() => setAddressHover(false)} onBlur={() => addressBlur()}/>
                </div>
                :
                <input placeholder="링크주소 입력" />
                }
                <a href="https://www.naver.com/" style={{display:addressHover? "flex":"none"}} className="registration-list-link-icon"><span className="chain"/></a>
                </div>
                
            </div>
        </div>
                       
    );
};

export default Registration 