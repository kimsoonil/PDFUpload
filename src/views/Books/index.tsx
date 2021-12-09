import React, {useRef,useState,useEffect,useCallback,useMemo} from 'react'
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { RootReducerType } from 'src/modules';
import { bookPageInit,bookCreateInit,bookUpdateInit,bookDeleteInit } from 'src/modules/Books';

import Container from './Container';
import DeleteModal from 'src/components/DeleteModal';
import ErrorModal from 'src/components/ErrorModal'
import SaveModal from 'src/components/SaveModal';
import Loading from 'src/components/Loading';
import _ from "lodash";
import 'src/assets/scss/reset.scss'
import 'src/assets/scss/Books.scss'
interface Props{
  id:           any;
  title:        string;
  category:     string;
  image_cover:  string;
}
const Books = () => {
  const history = useHistory();  
  const dispatch = useDispatch();
  const CreateFileRef = useRef<HTMLInputElement | null>(null);
  const UpdataFileRef = useRef<HTMLInputElement | null>(null);
  const BookState = useSelector((state: RootReducerType) => state.contents);
  const [scrollLoading, setScrollLoading] = useState(false)
  const [workBooksListId, setWorkBooksListId] = useState<string | null>();
  const [pageNumber, setPageNumber] = useState(1);
  const [DeleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
  const [BookTitle, setBookTitle] = useState<string | null>();
  const [errorModal, setErrorModal] = useState({
    open:false,
    title:"",
    content:""
  });
  
  useEffect(() => {
    dispatch(bookPageInit());   
    
  }, [dispatch]); 

  console.log(BookState);
  const { loading, data, error, length } = BookState;
  if( _.isEmpty(length)){
    localStorage.setItem('length',String(length))
  }
  //TODO infinite scrolling
  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    
    if (scrollTop + clientHeight >= scrollHeight) {
      setScrollLoading(true);
      // 페이지 끝에 도달하면 추가 데이터를 받아온다
      const bookLength = localStorage.getItem('length');
         if(pageNumber * 10 < Number(bookLength)){
        if(data && !error){
          dispatch(bookPageInit())
        } 
        setPageNumber((pageNumber) => pageNumber + 1);
       }
     
      }
      setTimeout(() =>{
        setScrollLoading(false);
      },1000)
      
  };


  useEffect(() => {
    
    // scroll event listener 등록
    window.addEventListener('scroll', handleScroll); 
    return () => {
      
      // scroll event listener 해제
      window.removeEventListener('scroll',handleScroll);
    };
  }, [pageNumber,dispatch]);

  
  //TODO 서버에러
  useEffect(()=>{
    if(error){
      setErrorModal({
        ...errorModal,
        open:true,
        title:`${error.message}`,
      })
    };
  },[error]);

  //TODO BOOK 생성 
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

  //TODO BOOK 이미지 변경
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

    //TODO BOOK 제목 변경
    const ChangeBooksTitle =(e: any) => {
      setBookTitle(e.target.value);
  }
  
  const KeyPressBooksTitle= (e:any, id:any)=>{
    const updateBook={
      id:id,
      title:BookTitle
    }
    if(e.key === "Enter"){
      dispatch(bookUpdateInit(updateBook));
    }
  }
  
  //TODO BOOK DELETE
  const bookDeeteModal = (e:any, id:any) =>{
    e.stopPropagation();
    handleDeleteModal();
    setWorkBooksListId(id);
  }

  const bookDeete = (id:any) =>{
    handleDeleteModal();
    const deleteId = {
      id:workBooksListId
    }
    dispatch(bookDeleteInit(deleteId));
  }



  //TODO Books 클릭시 페이지 이동
  const handleClickBook = (id:any) => {
    // history.push(`/Zwibbler.html/${id}`);
    localStorage.setItem("BookId",id);
    window.location.href = `/Zwibbler/Zwibbler.html`
  }

  const handleDeleteModal = () => {
    setDeleteModalOpen(!DeleteModalOpen);
  }
  const handleErrorModal = () =>{
    setErrorModal({
      ...errorModal,
      open:false,
    })
  }

  if (
    _.isEmpty(data) && loading) return ( 
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
        <input type="file" name="CreateFile" ref={CreateFileRef}  accept=" .jpg, .jpeg, .png" onChange={CreateBook}/>
        </div>
            {data?.map((item,index) =>{
              if(index < pageNumber * 10)
                return(
                    <Container 
                    item={item}
                    index={index}
                    handleClickBook={(e) => handleClickBook(e)}
                    handleClickUpdataFile={handleClickUpdataFile} 
                    UpdataFileRef={UpdataFileRef}
                    bookDeeteModal={bookDeeteModal}
                    key={index}
                    ChangeBooksTitle={ChangeBooksTitle}
                    KeyPressBooksTitle={KeyPressBooksTitle}
                    />
                    
                ) 
            }
            )}
           <input type="file" name="UpdateFile" ref={UpdataFileRef}  accept=".jpg, .jpeg, .png" onChange={UpdateBookImage}/>
           {scrollLoading && (
          <Loading />
        )}
       </div>
       <DeleteModal 
          title="문제집 삭제" 
          content="데이터가 모두 삭제 됩니다." 
          isOpen={DeleteModalOpen} 
          handleDeleteModal={handleDeleteModal} 
          bookDeete={bookDeete} 
        />
       <ErrorModal 
          title={errorModal.title} 
          errorModalOpen={errorModal.open} 
          handleErrorModal={handleErrorModal}  />
       {/* <SaveModal /> */}
    </div>
    
  );
};

export default (Books)