import React, {useRef,useState,useEffect,useCallback, useMemo} from 'react'
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import uuid from "react-uuid"
import 'src/assets/scss/reset.scss'
import 'src/assets/scss/Books.scss'
import Container from './Container';
import { RootReducerType } from 'src/modules';
import { getBooksStart } from 'src/modules/Books';
import Loading from 'src/components/Loading';
interface IPost {
  id: any;
  title: string;
  img: string;
}
const Books = () => {
  const history = useHistory();  
  const dispatch = useDispatch();
  const CreateFileRef = useRef<HTMLInputElement | null>(null);
  const UpdataFileRef = useRef<HTMLInputElement | null>(null);
  const [selectedFile, setSelectedFile] = useState<String | null>();
  const [workBooksListId, setWorkBooksListId] = useState<any>(0)
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

    const CreateBook = (event) => {
      if(!event.target.files[0].name) return;
    console.log(event.target.files[0].name)
    const newBooks = {
      id:uuid(),
      title:"",
      img:event.target.files[0].name
    }
    ;
    //contentDataList.unshift(newBooks)
    //setBooksDataList([...contentDataList,newBooks]);
    //TODO 서버 CREATE BOOKS + img 추가
    
  };

  //TODO BOOK img updata
  const handleClickUpdataFile = useCallback((e: any, id:any) =>{
    e.stopPropagation();
     console.log(id);
    setWorkBooksListId(id)
     if(!UpdataFileRef.current) return;
     UpdataFileRef.current.click();
  },[]);
  
  const UpdataBookImage = (event: any) => {
    if(!event.target.files[0].name) return;
    let reader = new FileReader();
    let file = event.target.files[0];
    setSelectedFile(event.target.files[0].name);
    
    reader.onloadend = (e) => {
      //TODO 서버 PUT BOOKS 이미지 변경
    }
    if(file)
      reader.readAsDataURL(file);  
   
  
  };
  //TODO BOOK DELETE
  const removeBook = (e:any ,index:number) =>{
    e.stopPropagation();
    const isRemoveBooks = window.confirm("정말 삭제하시겠습니까?");
    if(!isRemoveBooks) return;
    // let clone = [...contentDataList]
    // clone.splice(index, 1)
    // setBooksDataList(clone);
    //TODO 서버 DELETE
  }
  //TODO BOOK title updata
  const UpdataBooksTitle =(e: any, id:any) => {

    //TODO 서버 PUT BOOKS title 변경
    // setBooksDataList(
    //   contentDataList.map(contentDataList => contentDataList.id === id ? {
    //     ...contentDataList,
    //     title:e.target.value
    //   } :contentDataList)
    //  ) 
  }

  //TODO Books 클릭시 페이지 이동
  const handleClickBook = (id:any) => {
    history.push(`/books/pages/${id}`);
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
        <input type="file" name="CreateFile" ref={CreateFileRef}  accept=".svg, .jpg, .png, .pdf" onChange={CreateBook}/>
        </div>
            {data?.map((item,index) =>{
                return(
                    <Container 
                    item={item}
                    index={index}
                    handleClickBook={(e) => handleClickBook(e)}
                    handleClickUpdataFile={handleClickUpdataFile} 
                    UpdataFileRef={UpdataFileRef}
                    removeBook={removeBook}
                    key={index}
                    UpdataBooksTitle={UpdataBooksTitle}
                    />
                    
                ) 
            }
            )}
           <input type="file" name="CreateFile" ref={UpdataFileRef}  accept=".svg, .jpg, .png, .pdf" onChange={UpdataBookImage}/>
       </div>
       
      
      
    </div>
  );
};


export default Books 