import React, {useRef,MouseEvent,MouseEventHandler,useLayoutEffect} from 'react'
import 'src/assets/scss/reset.scss'
import 'src/assets/scss/Main.scss'

interface IProps_Square {
  message: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Main = () => {
  const inputFileRef = useRef<HTMLInputElement>(null);

    const workbookList=[
        {id:1,title:"",img:"mock-exam.svg"},
        {id:2,title:"빠작2",img:"Chinese-literature.svg"},
        {id:3,title:"한국 중학생 기출 문제집",img:"secondary-math.svg"},
        {id:4,title:"너희들의 기출문제",img:"calculus.svg"},
        {id:5,title:"메가스터디 초등수학 3-1",img:"elementary-math.svg"}, 
        {id:6,title:"고등학교 수학 나",img:"higher-mathematics.svg"},
        
    ];
    
    const handleClickInputFlie = () =>{
      if(!inputFileRef.current) return;
      inputFileRef.current.click();
    }
    
  return (
    <div className="Main">
      <div className="sideBar">
          <div className="list activate"><div className="img"></div>문제집</div>
          <div className="list"> <div className="img"><img src="./images/main/workbook.svg" alt="workbook"/> </div>문제집</div>
      </div>
      <div className="container">
      <div className="container-card"><div className="plus" onClick={handleClickInputFlie}></div>
      
      
      <input type="file" name="imgfile" ref={inputFileRef}/>
      
      </div>
          {workbookList.map(item =>{
              let workBookTitle;
                if(item.title !== ""){
                    workBookTitle = item.title
                }else{
                    workBookTitle = "책제목을 입력해주세요"
                }
              return(<div className="container-card" key={item.id}>
                  <div >
                    <img src={`./images/main/${item.img}`} alt={`${item.img}`}/>
                    <div className="container-card-shadow">
                      <div className="iocnGraup">
                          <div className="description">
                              <img src="./images/main/photo.svg" alt="icon-poto" />
                            </div>
                          <div className="delete">
                              <img src="./images/main/trash.png" alt="icon-poto" />
                              </div>
                              </div>
                         
                      </div>
                  </div>
                  
                  <div className="container-card-title" >
                  {item.title !== "" ?
                    workBookTitle :
                    <input placeholder= "책제목을 입력해주세요"/>
                  }
                  
                  </div>
              </div>) 
          })}
      </div>
    </div>
  );
};


export default Main 