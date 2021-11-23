import React, {useRef,useState,useEffect,useCallback, useMemo} from 'react'
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import uuid from "react-uuid"
import 'src/assets/scss/reset.scss'
import 'src/assets/scss/Main.scss'
import Container from './Container';
import { RootReducerType } from 'src/modules';
import { getBooksStart } from 'src/modules/Books';
import Loading from 'src/components/Loadding';


const workContentList=[
  {id:uuid(),title:"",img:"mock-exam.svg"},
  {id:uuid(),title:"빠작2",img:"Chinese-literature.svg"},
  {id:uuid(),title:"한국 중학생 기출 문제집",img:"secondary-math.svg"},
  {id:uuid(),title:"너희들의 기출문제",img:"calculus.svg"},
  {id:uuid(),title:"메가스터디 초등수학 3-1",img:"elementary-math.svg"}, 
  {id:uuid(),title:"고등학교 수학 나",img:"higher-mathematics.svg"},
];
interface IPost {
  id: any;
  title: string;
  img: string;
}
const Main = () => {
  const history = useHistory();  
  const dispatch = useDispatch();
  const CreateFileRef = useRef<HTMLInputElement | null>(null);
  const UpdataFileRef = useRef<HTMLInputElement | null>(null);
  const [selectedFile, setSelectedFile] = useState<String | null>();
  const [contentDataList,setContentDataList]: [IPost[], (posts: IPost[]) => void] = useState(workContentList);
  const [workContentListId, setWorkContentListId] = useState<any>(0)
  const state = useSelector((state: RootReducerType) => state.contents);
  
  useEffect(() => {
    dispatch(getBooksStart());
  }, [dispatch]);
  console.log(state);
  const { loading, data, error } = state;
  
  
    const handleClickCreateFile = () =>{
      if(!CreateFileRef.current) return;
      CreateFileRef.current.click();
    }
    const CreateContent = (event) => {
      if(!event.target.files[0].name) return;
    console.log(event.target.files[0].name)
    const newContent = {
      id:uuid(),
      title:"",
      img:event.target.files[0].name
    }
    ;
    //contentDataList.unshift(newContent)
    setContentDataList([...contentDataList,newContent]);
    console.log(contentDataList);
    //TODO 서버 GET content생성 + 이미지 추가
  };
  
  const handleClickUpdataFile = useCallback((e: any, id:any) =>{
    e.stopPropagation();
     console.log(id);
    setWorkContentListId(id)
     if(!UpdataFileRef.current) return;
     UpdataFileRef.current.click();
  },[]);
  
  const UpdataContentImage = (event: any) => {
    if(!event.target.files[0].name) return;
    let reader = new FileReader();
    let file = event.target.files[0];
    setSelectedFile(event.target.files[0].name);
    
    reader.onloadend = (e) => {
      setContentDataList(
      contentDataList.map(contentDataList => contentDataList.id === workContentListId ? {
        ...contentDataList,
        img:reader.result as string
      } :contentDataList)
     ) 
    }
    if(file)
      reader.readAsDataURL(file);  
   
  //TODO 서버 PUT 이미지 변경
};

const removeContent = (e:any ,index:number) =>{
  e.stopPropagation();
  const isRemoveContent = window.confirm("정말 삭제하시겠습니까?");
  if(!isRemoveContent) return;
  let clone = [...contentDataList]
  clone.splice(index, 1)
  setContentDataList(clone);
}
const UpdataContentTitle =(e: any, id:any) => {
  
  setContentDataList(
    contentDataList.map(contentDataList => contentDataList.id === id ? {
      ...contentDataList,
      title:e.target.value
    } :contentDataList)
   ) 
   console.log(contentDataList)
   //TODO 서버 PUT title 변경 
}
const handleClickContent = (id:any) => {
  history.push(`/content/${id}`)
}
if(loading) return ( 
  <div className="Main">
    <div className="sideBar">
      <div className="list activate"><div className="img"></div>문제집</div>
      <div className="list"> <div className="img"></div>문제집</div>
    </div>
    <div className="container"></div>
    <Loading />
    </div>
    )

  return (
    <div className="Main">
      <div className="sideBar">
          <div className="list activate"><div className="img"></div>문제집</div>
          <div className="list"> <div className="img"></div>문제집</div>
      </div>
     
       <div className="container">
        <div className="container-card"><div className="plus" onClick={handleClickCreateFile}></div>
        <input type="file" name="CreateFile" ref={CreateFileRef}  accept=".svg, .jpg, .png, .pdf" onChange={CreateContent}/>
        </div>
            {data?.map((item,index) =>{
                return(
                    <Container 
                    item={item}
                    index={index}
                    handleClickContent={(e) => handleClickContent(e)}
                    handleClickUpdataFile={handleClickUpdataFile} 
                    UpdataFileRef={UpdataFileRef}
                    UpdataContentImage={UpdataContentImage}
                    removeContent={removeContent}
                    key={index}
                    UpdataContentTitle={UpdataContentTitle}
                    />
                    
                ) 
            }
            )}
           <input type="file" name="CreateFile" ref={UpdataFileRef}  accept=".svg, .jpg, .png, .pdf" onChange={UpdataContentImage}/>
       </div>
       
      
      
    </div>
  );
};


export default Main 