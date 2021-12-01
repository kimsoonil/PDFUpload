import React, {useRef,useState,useEffect,useCallback, useMemo} from 'react'
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch,connect } from 'react-redux';
import uuid from "react-uuid"
import 'src/assets/scss/reset.scss'
import 'src/assets/scss/Books.scss'
import Container from './Container';
import { RootReducerType } from 'src/modules';
import { bookPageInit,bookCreateInit,bookUpdateInit,bookDeleteInit } from 'src/modules/Books';
import Loading from 'src/components/Loading';
import Modal from 'src/components/Modal';

const Books = () => {
  const history = useHistory();  
  const dispatch = useDispatch();
  const CreateFileRef = useRef<HTMLInputElement | null>(null);
  const UpdataFileRef = useRef<HTMLInputElement | null>(null);
  const [selectedFile, setSelectedFile] = useState<String | null>();
  const [workBooksListId, setWorkBooksListId] = useState<String | null>();
  const state = useSelector((state: RootReducerType) => state.contents);
  const [isOpen, setIsOpen] = useState(false);
  const [modalId,setModalId] = useState<String | null>();
  
  useEffect(() => {
    //getBooks()
    dispatch(bookPageInit());
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
    const dataLength = data?.length
    const newBooks = {
      id:uuid(),
      sort:dataLength ? dataLength +1: dataLength,
      title:"",
      img:event.target.files[0].name
    };
    dispatch(bookCreateInit(newBooks));
    //contentDataList.unshift(newBooks)
    //setBooksDataList([...contentDataList,newBooks]);
    //TODO 서버 CREATE BOOKS + img 추가
    
  };

  //TODO BOOK img updata
  const handleClickUpdataFile = useCallback((e: any, id:any) =>{
    e.stopPropagation();
     setWorkBooksListId(id)
     if(!UpdataFileRef.current) return;
     UpdataFileRef.current.click();
  },[]);
  
  const UpdateBookImage = (event: any) => {
    if(!event.target.files[0].name) return;
    let reader = new FileReader();
    let file = event.target.files[0];
    setSelectedFile(event.target.files[0].name);
   
      const updateBooks = {
        id:workBooksListId,
        img:event.target.files[0].name
      };
      console.log(updateBooks)
      dispatch(bookUpdateInit(updateBooks));
      
    
    //reader.onloadend = (e) => {
      //TODO 서버 PUT BOOKS 이미지 변경
     
   // }
    if(file)
      reader.readAsDataURL(file);  
   
  
  };
  //TODO BOOK DELETE
  const bookDeeteModal = (e:any, id:any) =>{
    e.stopPropagation();
    handleModalOpen()
    setModalId(id)
  }
  const bookDeete = (id:any) =>{
    console.log("여기")
    handleModalClose();
    dispatch(bookDeleteInit(id));
  }

  //TODO BOOK title updata
  const UpdataBooksTitle =(e: any, id:any) => {
    const updateBooks = {
      id:id,
      title:e.target.value
    };
    console.log(updateBooks)
    dispatch(bookUpdateInit(updateBooks));
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

  const handleModalOpen = () => {
    setIsOpen(true);
  }
  const handleModalClose = () =>{
    setIsOpen(false);
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
    data?.sort(function(a:any, b:any)  {return b.sort - a.sort;})
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
                    bookDeeteModal={bookDeeteModal}
                    key={index}
                    UpdataBooksTitle={UpdataBooksTitle}
                    />
                    
                ) 
            }
            )}
           <input type="file" name="UpdateFile" ref={UpdataFileRef}  accept=".svg, .jpg, .png, .pdf" onChange={UpdateBookImage}/>
       </div>
       <Modal id={modalId} title="문제집 삭제" content="데이터가 모두 삭제 됩니다." isOpen={isOpen} handleModalClose={handleModalClose} bookDeete={bookDeete} />
    </div>
  );
};

export default (Books)