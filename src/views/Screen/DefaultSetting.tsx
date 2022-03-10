import React,{ useState} from 'react';

interface Props{
  open
  handleClickDefaultSetting
  settingData
 }
 
const DefaultSetting: React.FC<Props> = (props: Props) =>{
  const [sliderValue, setSliderValue] = useState(12)
  const [sliderSizeValue, setSliderSizeValue] = useState(10)
  const [embeddingOption, setEmbeddingOption] = useState(true);
  const [embedding, setEmbedding] = useState('v 0.0');
  const [technologyOption, setTechnologyOption] = useState(true);
  const [technology, setTechnology] = useState('컬러 (lab_rgb)');
  const embeddingOptionClick = (e) => {
    setEmbedding(e)
    setEmbeddingOption(true)
  }
  
  const technologyOptionClick = (e) => {
    setTechnology(e)
    setTechnologyOption(true)
  }
  return (
      <div className='setting' style={{display: props.open ? "block" : "none"}}>
        <div className='setting-title'><div>기본 설정</div> <div onClick={props.handleClickDefaultSetting} style={{cursor:'pointer'}}><img src={require("src/images/pages/close.svg").default}  /></div></div>
        <div className='setting-content'>
          <div className="setting-text">링크</div>
          <div className="setting-item"><input type="text" defaultValue="https://www.naver.com"/><div><img src={require("src/images/pages/url.svg").default} alt="url" /></div></div>
          <div className="setting-text">임베딩 버전</div>
          <div className="setting-item">
            <div className="select" onClick={() => setEmbeddingOption(false)}>
            {embedding}
            <img src={require("src/images/pages/select-arrow.svg").default} alt="select-arrow" />
            </div>
            <div className="optionGroup" style={{display:embeddingOption ? 'none' : 'block',top: 145}}>
            {props.settingData?.embedding.map((item, index) => {
              return (
                <div className="option" onClick={() => embeddingOptionClick(item.label)} key={index}> {item.label} {embedding === item.label && <img src={require("src/images/pages/check.svg").default} alt="check" />}
                </div>
              )
              })}
          </div>
          </div>
          <div className="setting-text">적용기술</div>
          <div className="setting-item">
            <div className="select" onClick={() => setTechnologyOption(false)}>
            {technology}
            <img src={require("src/images/pages/select-arrow.svg").default} alt="select-arrow" />
            </div>
            <div className="optionGroup" style={{display:technologyOption ? 'none' : 'block',top:215}}>
            {props.settingData?.channel.map((item, index) => {
              return (
                <div className="option" onClick={() => technologyOptionClick(item.label)} key={index}> {item.label} {embedding === item.label && <img src={require("src/images/pages/check.svg").default} alt="check" />}
                </div>
              )
              })}
             
          </div>
          </div>
          <div className="setting-code" style={{marginTop:32}}> <div className="setting-text">코드크기 </div><input type="number" value={sliderValue} onChange={e => setSliderValue(Number(e.target.value))} /></div>
          <div className="setting-value">
          {props.settingData?.scale.map((item, index) => {
              return (
                <div className={sliderValue === item.value ? "setting-btn selected" :  "setting-btn"} onClick={() => setSliderValue(item.value)} key={index}>{item.label} {item.value}</div>
              )
              })}
          </div>
          <div className="setting-code"> <div className="setting-text">코드세기 </div><input type="text" value={sliderSizeValue} onChange={e => setSliderSizeValue(Number(e.target.value))}/></div>
          <div className="setting-value">
          {props.settingData?.alpha.map((item, index) => {
              return (
                <div className={sliderSizeValue === item.value ? "setting-btn selected" :  "setting-btn"} onClick={() => setSliderSizeValue(item.value)} key={index}>{item.label} {item.value}</div>
              )
              })}
          </div>
        </div>
      </div>
    
  )
  
};
export default DefaultSetting