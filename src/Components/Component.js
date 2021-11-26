import Content from "./Content";
import "./Component.css"

 const Component = function ({content, changeHeight, changeWidth, changeCaption, changeVisible, addComponent, changeHeightForPanel, changeWidthForPanel, changeCaptionForPanel, changeVisibleForPanel, addComponentForPanel}) {
   
  let wayValue = ''
  let newValue = ''

  const ProcessingContent = () => {             
    wayValue = document.getElementById('way').value   
    newValue = document.getElementById('new_value').value  

  /*  'content[2].props.caption'  */
    if (newValue[0] !== '{' && wayValue[12] ==='p') {
      if (newValue[0] === "'") {newValue = newValue.substr(1,newValue.length-2)}
      if (newValue === "true") {newValue = 1}
      if (newValue === "false") {newValue = 0}
      if (newValue[0] !== "'" && newValue !== "true" && newValue !== "false") {newValue = Number(newValue)}
      switch (wayValue.substr(18,wayValue.indexOf("'",19)-18).toUpperCase()) {
        case "CAPTION":
          changeCaption(Number(wayValue[9]), newValue)
          break;
        case "WIDTH":
          changeWidth(Number(wayValue[9]), newValue)
          break;
        case "HEIGHT":
          changeHeight(Number(wayValue[9]), newValue)
          break;
        case "VISIBLE":
          changeVisible(Number(wayValue[9]), newValue)
          break;
        default:
          break;
      }}         

  /*  'content[0].content[0].props.caption'  */
  if (newValue[0] !== '{' && wayValue[12] ==='c') {
    if (newValue[0] === "'") {newValue = newValue.substr(1,newValue.length-2)}
    if (newValue === "true") {newValue = 1}
    if (newValue === "false") {newValue = 0}
    if (newValue[0] !== "'" && newValue !== "true" && newValue === "false") {newValue = Number(newValue)}
    switch (wayValue.substr(29,wayValue.indexOf("'",19)-29).toUpperCase()) {
      case "CAPTION":
        changeCaptionForPanel(Number(wayValue[9]), Number(wayValue[20]), newValue)
        break;
      case "WIDTH":
        changeWidthForPanel(Number(wayValue[9]), Number(wayValue[20]), newValue)
        break;
      case "HEIGHT":
        changeHeightForPanel(Number(wayValue[9]), Number(wayValue[20]), newValue)
        break;
      case "VISIBLE":
        changeVisibleForPanel(Number(wayValue[9]), Number(wayValue[20]), newValue)
        break;
      default:
        break;
    }}

  /*  {"type": "label", "props": {"caption": "test", "visible": true}}  */                                  
    if (newValue[0] === '{' && wayValue === '')   {
      const NewValue = JSON.parse(newValue)
      if (NewValue.type === 'label') {
        const contentValue = {
          type: 'label',
          props: {
            caption: NewValue.props.caption,
            visible: NewValue.props.visible
          }} 
        addComponent(contentValue)}
      if (NewValue.type === 'panel') { 
        const contentValue = {
          type: 'panel',       
          props: {             
            width: NewValue.props.width,
            height: NewValue.props.height,
            visible: NewValue.props.visible
          }}
        addComponent(contentValue)}
      if (NewValue.type === 'button') { 
        const contentValue = {
          type: 'button',
          props: {             
            caption: NewValue.props.caption,          
            width: NewValue.props.width,
            height: NewValue.props.height,
            visible: NewValue.props.visible
          }}
       addComponent(contentValue)}
  }

  /*   'content[0]'   +     {"type": "label", "props": {"caption": "test", "visible": true}}   */ 
  if (newValue[0] === '{' && wayValue !== '')   {
    const NewValue = JSON.parse(newValue)
    if (NewValue.type === 'label') {
      const contentValue = {
        type: 'label',
        props: {
          caption: NewValue.props.caption,
          visible: NewValue.props.visible
        }} 
      addComponentForPanel(Number(wayValue[9]), contentValue)}
    if (NewValue.type === 'panel') { 
      const contentValue = {
        type: 'panel',       
        props: {             
          width: NewValue.props.width,
          height: NewValue.props.height,
          visible: NewValue.props.visible
        }}
      addComponentForPanel(Number(wayValue[9]), contentValue)}
    if (NewValue.type === 'button') { 
      const contentValue = {
        type: 'button',
        props: {             
          caption: NewValue.props.caption,          
          width: NewValue.props.width,
          height: NewValue.props.height,
          visible: NewValue.props.visible
        }}
      addComponentForPanel(Number(wayValue[9]),contentValue)}
}}
   
  return (
    <div className="Component">
      <div className="header">
      <label className="label1">Путь</label>
      <label className="label2">Новое значение</label>
      </div>

      <input type="text"
             className="panel"
             id="way"/>
      <input type="text"
             className="panel"
             id="new_value"/>
      <button onClick={ProcessingContent}>Применить</button>

      <div className="content" id="content">
      <Content content={content}/>
      </div>
    </div>
  );
}

export default Component;
