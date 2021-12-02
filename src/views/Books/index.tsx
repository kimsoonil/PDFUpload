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
  const [workBooksListId, setWorkBooksListId] = useState<String | null>();
  const state = useSelector((state: RootReducerType) => state.contents);
  const [isOpen, setIsOpen] = useState(false);
  const [BookTitle, setBookTitle] = useState<String | null>();
  useEffect(() => {
    
    dispatch(bookPageInit());
  }, [dispatch]);
  
  
  const { loading, data, error } = state;
  console.log(state.data?.results);

  const handleClickCreateFile = () =>{
    if(!CreateFileRef.current) return;
    CreateFileRef.current.click();
  }
  
  const CreateBook = (event) => {
    if(!event.target.files[0]) return;
    
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
    const newBooks = {
        category:"WORKBOOK",
        image_cover:reader.result
      };
      dispatch(bookCreateInit(newBooks));
    }
    
  };

  //TODO BOOK img updata
  const handleClickUpdataFile = useCallback((e: any, id:any) =>{
    e.stopPropagation();
     setWorkBooksListId(id)
     if(!UpdataFileRef.current) return;
     UpdataFileRef.current.click();
  },[]);
  
  const UpdateBookImage = (event: any) => {
    if(!event.target.files[0]) return;
    
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
    const updateBook = {
        id:workBooksListId,
        image_cover:reader.result
      };
      dispatch(bookUpdateInit(updateBook));
    }
  
  
  };
  //TODO BOOK DELETE
  const bookDeeteModal = (e:any, id:any) =>{
    e.stopPropagation();
    handleModalOpen()
    setWorkBooksListId(id)
  }
  const bookDeete = (id:any) =>{
    handleModalClose();
    const deleteId = {
      id:workBooksListId
    }
    dispatch(bookDeleteInit(deleteId));
  }

  //TODO BOOK title updata
  const UpdataBooksTitle =(e: any) => {
      setBookTitle(e.target.value);
  }
  const UpdateBooksTitleEnter= (e:any, id:any)=>{
    console.log("여기")
    const updateBook={
      id:id,
      title:BookTitle
    }
    console.log(e.key)
    if(e.key === "Enter"){
      dispatch(bookUpdateInit(updateBook));
    }
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
    // data?.sort(function(a:any, b:any)  {return b.sort - a.sort;})
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
            {data?.results?.map((item,index) =>{
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
                    UpdateBooksTitleEnter={UpdateBooksTitleEnter}
                    />
                    
                ) 
            }
            )}
           <input type="file" name="UpdateFile" ref={UpdataFileRef}  accept=".svg, .jpg, .png, .pdf" onChange={UpdateBookImage}/>
       </div>
       <Modal title="문제집 삭제" content="데이터가 모두 삭제 됩니다." isOpen={isOpen} handleModalClose={handleModalClose} bookDeete={bookDeete} />
    </div>
  );
};

export default (Books)