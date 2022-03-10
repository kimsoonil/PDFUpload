import React,{ useState, useEffect} from 'react';

interface Props{
  open
  handleClickPartialSetting
  settingValue
  setSettingValue
  settingData
 }
const PartialSetting : React.FC<Props> = (props: Props) =>{
  const [resetBtn, setResetBtn] = useState(false);
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
    
  const settingChange = (title,value) => {
  
  switch (title) {
    case "sliderValue":
      props.setSettingValue({...props.settingValue,sliderValue:value});
      setResetBtn(true);
    break;
    case "sliderSizeValue":
      props.setSettingValue({...props.settingValue,sliderSizeValue:value});
      setResetBtn(true);
    break;
    case "title":
      props.setSettingValue({...props.settingValue,linkValue:value});
      setResetBtn(true);
    break;
    case "embedding":
      props.setSettingValue({...props.settingValue,embedding:value});
      setResetBtn(true);
    break;
    case "technology":
      props.setSettingValue({...props.settingValue,technology:value});
      setResetBtn(true);
    break;
    default:
      setResetBtn(true);
  }
    
  }
  const settingReset = () => {
    props.setSettingValue({
    sliderValue:12,
    sliderSizeValue:10,
    linkValue:'https://www.naver.com',
    embedding:0.5,
    technology:0.5
  });
  setResetBtn(false);
    }
  return (
      <div className='setting'  style={{display: props.open ? "block" : "none", top:215}}>
        <div className='setting-title'><div>개별 설정</div> <div onClick={props.handleClickPartialSetting} style={{cursor:'pointer'}}><img src={require("src/images/pages/close.svg").default} /></div></div>
        <div className='setting-content'>
          <div className="setting-text">링크</div>
          <div className="setting-item"><input type="text" defaultValue={props.settingValue.linkValue} onChange={e => settingChange("title",e.target.value)}/><div style={{height:20}}><a href={props.settingValue.linkValue} ><img src={require("src/images/pages/url.svg").default} alt="url" /></a></div></div>
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
          <div className="setting-code" style={{marginTop:32}}> <div className="setting-text">코드크기 </div><input type="number" value={props.settingValue.sliderValue} onChange={e => settingChange('sliderValue',Number(e.target.value))} /></div>
          <div className="setting-value">
          {props.settingData?.scale.map((item, index) => {
              return (
                <div className={props.settingValue.sliderValue === item.value ? "setting-btn selected" :  "setting-btn"} onClick={() => settingChange('sliderValue',item.value)} key={index}>{item.label} {item.value}</div>
              )
              })}
          </div>
          <div className="setting-code"> <div className="setting-text">코드세기 </div><input type="text" value={props.settingValue.sliderSizeValue} onChange={e => settingChange("sliderSizeValue",Number(e.target.value))}/></div>
          <div className="setting-value">
          {props.settingData?.alpha.map((item, index) => {
              return (
                <div className={props.settingValue.sliderSizeValue === item.value ? "setting-btn selected" :  "setting-btn"} onClick={() => settingChange('sliderSizeValue',item.value)} key={index}>{item.label} {item.value}</div>
              )
              })}
          </div>
          <button className='setting-reset' disabled={!resetBtn} onClick={() => settingReset()}>기본 설정 초기화</button>
        </div>
      </div>
    
  )
  
};
export default PartialSetting