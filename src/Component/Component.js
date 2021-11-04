import React from "react";

const Component = function(props) { console.log(props) 

    for (let i = 0; i<props.content.length; i++) {
        switch (props.content[i].type) {
            case 'panel': {
                <div className="panel1"
                        style={{width:props.content[i].propss.width, 
                        height:props.content[i].propss.height,
                        visible:props.content[i].propss.visible}}
                    >Панель
                </div>
            }
            case 'label': {
                    <span className="label"
                        style={{caption:props.content[i].propss.caption, 
                        visible:props.content[i].propss.visible}}
                    >Метка
                    </span>
            }    
            case 'button': {
                    <button className="button"
                        style={{caption:props.content[i].propss.caption, 
                        width:props.content[i].propss.width, 
                        height:props.content[i].propss.height, 
                        visible:props.content[i].propss.visible}}
                        >Кнопка
                    </button>
            }    
    
            default:
            return(console.log("Input invailed type"))
        }
    }
}

export default Component;
