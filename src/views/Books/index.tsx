import React, {useRef,useState,useEffect,useCallback,useMemo} from 'react'
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import _ from "lodash";
import { RootReducerType } from 'src/modules';
import { bookPageInit,bookCreateInit,bookUpdateInit,bookDeleteInit } from 'src/modules/Books';
import { logoutRequest } from 'src/modules/Login';
import Container from './Container';
import DeleteModal from 'src/components/DeleteModal';
import ErrorModal from 'src/components/ErrorModal'
import Loading from 'src/components/Loading';

import 'src/assets/fonts/font.css'
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
  const BookState = useSelector((state: RootReducerType) => state.books);
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
     
      // 페이지 끝에 도달하면 추가 데이터를 받아온다
      const bookLength = localStorage.getItem('length');
         if(pageNumber * 20 < Number(bookLength)){
          setScrollLoading(true);
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
      console.log(error)
       console.log(error.response?.status)
       if(error.response?.status === 403 && errorModal.open === false){
        logOut();
       }
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
      setScrollLoading(true);
      dispatch(bookCreateInit(newBooks));
      setTimeout(() =>{setScrollLoading(false);},1000)
      
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
      if(!BookTitle){
        alert("책제목을 입력해주세요");
        return;
      }
      dispatch(bookUpdateInit(updateBook));
      (document.activeElement as HTMLElement).blur();
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
    // history.push(`/books/pages/${id}`);
    history.push(`/books/screen/${id}`);
    
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
  const logOut = () => {
    dispatch(logoutRequest());
  }
if(loading) return <Loading />

  return (
    <div className="main">
      <div className="main-header">
        <div className='logo'>
          <img src={require("src/images/pages/logo.svg").default} alt="logo" />
        </div>
        <div className='logOut' onClick={logOut}>로그아웃</div>
      </div>
      <div className="main-content">
      <div className="sideBar">
        <div className="list activate"><div className="img"></div><div>문서</div></div>
      </div>
     
       <div className="container">
        <div className="container-card createFile" style={{backgroundColor : '#b3b8c0'}} onClick={handleClickCreateFile}><div className="plus" ></div>
        <input type="file" name="CreateFile" ref={CreateFileRef}  accept=" .jpg, .jpeg, .png" onChange={CreateBook}/>
        </div>
            {data?.map((item,index) =>{
              if(index < pageNumber * 20)
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
       </div>
       <DeleteModal 
          title="페이지 삭제" 
          content="관련 데이터가 모두 삭제 됩니다." 
          isOpen={DeleteModalOpen} 
          handleDeleteModal={handleDeleteModal} 
          bookDeete={bookDeete} 
        />
       <ErrorModal 
          title={errorModal.title} 
          errorModalOpen={errorModal.open} 
          handleErrorModal={handleErrorModal}  />
      
    </div>
    
  );
};

export default (Books)