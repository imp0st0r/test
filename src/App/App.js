import Component from "../Component/Component";

import "./App.css"

 function App() {
  // const dispatch = useDispatch()

  // const caption = useSelector(state => state.caption)
  // const visible = useSelector(state => state.visible)
  // const width = useSelector(state => state.width)
  // const height = useSelector(state => state.height)

  // console.log(caption)

  // const ChangeCaption = () => {
  //     dispatch({type:"CAPTION", payload: input.value})
  // }
  // const ChangeVisible = () => {
  //     dispatch({type:"VISIBLE", payload: input.value})
  // }
  // const ChangeWidth = () => {
  //     dispatch({type:"WIDTH", payload: input.value})
  // }
  // const ChangeHeight = () => {
  //     dispatch({type:"HEIGHT", payload: input.value})
  // }

  return (
    <div className="App">
      <div className="header">
      <label className="label1">Путь</label>
      <label className="label2">Новое значение</label>
      </div>

      <input type="text"
             className="panel"
             id="way"
      />
      <input type="text"
             className="panel"
             id="new_value"
      />
      <button>Применить</button>

      <div className="content">
      <Component content={[
            /*{type: 'panel', 
             propss: {
                width: 500,
                height: 200,
                visible: true
             }},*/
            {type: 'label',
              propss: {
                caption: 'test',
                visible: true
              }},
            {type: 'button',
             propss: {
               width: 100,
               height: 50,
               visible: true
             }},
             {
               type: 'button',
               propss: {
                width: 100,
                height: 20,
                visible: true
               }
             }
      ]}/>
      </div>
    </div>
  );
}

export default App;
