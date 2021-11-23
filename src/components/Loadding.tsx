import * as React from 'react';
import 'src/assets/scss/reset.scss'
import 'src/assets/scss/Components.scss'
import Lottie from 'react-lottie'
import loadding from 'src/utils/Lottie/Lodding.json'


function Loadding (){

const defaultOptions = {
  loop: true,
  autoplay: true, 
  animationData: loadding,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

  return (
    <div className="loadding">
    <Lottie options={defaultOptions} width={200} height={200} />
   </div> 
  );
};


export default Loadding 