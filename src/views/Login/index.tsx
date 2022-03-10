/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import  login  from 'src/modules';
import { combineReducers } from 'redux';
import { useFormik } from 'formik';
import { loginRequest,loginSuccess } from 'src/modules/Login';
import { RootReducerType } from 'src/modules/';
import * as Yup from 'yup';
import Lottie from 'react-lottie';
import loading from 'src/utils/Lottie/whiteLoading.json';
import 'src/assets/fonts/font.css';
import 'src/assets/scss/reset.scss';
import 'src/assets/scss/Login.scss';


const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [veiwPassword, setVeiwPassword] = useState(true);
  const dispatch = useDispatch();
  const LoginState = useSelector((state: RootReducerType) => state.login.isLoggingIn);
  
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const formik = useFormik({
        initialValues: {
            email: '',
            password:''
        },
        validationSchema: Yup.object({
          email: Yup.string().max(255).email('올바른 이메일 주소를 입력해주세요.').required('이메일을 입력해주세요'),
          password: Yup.string().min(8,'8자 ~ 16자 이내로 입력해주세요.').max(16,'8자 ~ 16자 이내로 입력해주세요.').required('비밀번호를 입력해주세요')
          .matches(/^(?=.*[A-Za-z])(?=.*[0-9])(?=.{8,})/, "영문, 숫자로만 입력해주세요."),
        }),
        onSubmit: async values => {
          try {
            await dispatch(loginRequest(values));
            setIsLogin(false);
            
          } catch (error) {
              console.log(error)
          }
          
          setIsLogin(true);
        },
    });
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: loading,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
    return (
        <div className='login-shadow' >
          <div className='login' >
            <div className='login-logo'></div>
            <div className='login-content'>
            
            <div className='login-title'>랩코드 관리를 위해 로그인해주세요.</div>
                <form className="login-form" onSubmit={formik.handleSubmit}>
                <div style={{position: 'relative'}}>
                  <input id="email" type="email" placeholder='이메일'
                  {...formik.getFieldProps('email')}
                  />
                  <div className='login-icon' onClick={() => formik.setValues({email:'',password:formik.values.password})}><img src={require("src/images/login/icon-login-input-close.svg").default} alt="icon-login-input-close"/></div>
                  {formik.touched.email && formik.errors.email ? (
                  <div className='error-message'>{formik.errors.email}</div>
                  ) : null}
                </div>
                <div style={{position: 'relative'}}>
                <input id="password" type={veiwPassword ? 'password' : 'text'} placeholder='비밀번호'
                {...formik.getFieldProps('password')}
                />
                <div className='login-icon' onClick={() => setVeiwPassword(!veiwPassword)}><img src={veiwPassword ? require("src/images/login/icon-login-input-not-view.svg").default : require("src/images/login/icon-login-input-view.svg").default} alt="icon-login-input-close"/></div>
                {formik.touched.password && formik.errors.password ? (
                <div className='error-message'>{formik.errors.password}</div>
                ) : null}
                </div>
                {isLogin ? <button type="submit">관리자 로그인</button> : <button type="submit"><Lottie options={defaultOptions} width={100} height={100} /></button>}
                </form>
                <div className='login-action'>
                    <a href="https://dev.labcode.kr/inquiries/create" target="_blank">문의하기</a>
                    <a href="https://dev.labcode.kr/teams/create" target="_blank">관리자 신청</a>
                </div>
            </div>  
            </div>
        </div>
    )};

export default (Login)