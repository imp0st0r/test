import Content from "./Content";
import "./Component.css"
import { addComponent, changeCaption, changeHeight, changeVisible, changeWidth } from "../store/actions";

 const Component = function (props) {
   
  let wayValue = ''
  let newValue = ''

  const dispatch = props.dispatch

  const ProcessingContent = () => {             
    wayValue = document.getElementById('way').value   
    newValue = document.getElementById('new_value').value   

  /*  'content[2].props.caption'  */
    if (newValue[0] !== '{') {
      if (newValue[0] === "'") {newValue = newValue.substr(1,newValue.length-2)}
      if (newValue === "true") {newValue = true}
      if (newValue === "false") {newValue = false}
      if (newValue[0] !== "'" && newValue !== "true" && newValue === "false") {newValue = Number(newValue)}
      switch (wayValue.substr(18,wayValue.indexOf("'",19)-18).toUpperCase()) {
        case "CAPTION":
          dispatch(changeCaption(Number(wayValue[9]), newValue))
          break;
        case "WIDTH":
          dispatch(changeWidth(Number(wayValue[9]), newValue))
          break;
        case "HEIGHT":
          dispatch(changeHeight(Number(wayValue[9]), newValue))
          break;
        case "VISIBLE":
          dispatch(changeVisible(Number(wayValue[9]), newValue))
          break;
        default:
          break;
      }}         
      
  /*  {"type": "label", "props": {"caption": "test", "visible": true}}  */                                  
    if (newValue[0] === '{')   {
      const NewValue = JSON.parse(newValue)
      if (NewValue.type === 'label') {
        const contentValue = {
          type: 'label',
          props: {
            caption: NewValue.props.caption,
            visible: NewValue.props.visible
          }} 
        dispatch(addComponent(contentValue))}
      if (NewValue.type === 'panel') { 
        const contentValue = {
          type: 'panel',       
          props: {             
            width: NewValue.props.width,
            height: NewValue.props.height,
            visible: NewValue.props.visible
          }}
        dispatch(addComponent(contentValue))}
      if (NewValue.type === 'button') { 
        const contentValue = {
          type: 'button',
          props: {             
            caption: 'button',          
            width: NewValue.props.width,
            height: NewValue.props.height,
            visible: NewValue.props.visible
          }}
       dispatch(addComponent(contentValue))}
  } 
} 

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
      <Content content={props.content}/>
      </div>
    </div>
  );
}

export default Component;
