import * as React from 'react';
import 'src/assets/scss/reset.scss'
import 'src/assets/scss/Components.scss'
import Lottie from 'react-lottie'
import loading from 'src/utils/Lottie/Lodding.json'


const Loading: React.FC = () =>{

const defaultOptions = {
  loop: true,
  autoplay: true, 
  animationData: loading,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

  return (
    <div className="loading">
    <Lottie options={defaultOptions} width={200} height={200} />
   </div> 
  );
};


export default Loading 