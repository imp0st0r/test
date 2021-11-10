import React from "react";
import './Content.css'
import '../store/actions'

const Panel = function(content) {

    const contentPanel = []
    
    for (const [i, val] of Object.entries(content)) {
        if (val.type === 'panel') {
            if (val.props.visible === false) {
                val.props.visible = 'none'
            }
            contentPanel.push(
                <div key={i+100} className="panel1" 
                style={{width:val.props.width, 
                height:val.props.height,
                display:val.props.visible}}>
                </div>)
        }if (val.type === 'label') {
            if (val.props.visible === false) {
                val.props.visible = 'none'
            }
            contentPanel.push(
                <span key={i+100} className="label"
                style={{display:val.props.visible}}
                >{val.props.caption}
                </span>)
        }if (val.type === 'button') {
            if (val.props.visible === false) {
                val.props.visible = 'none'
            }
            contentPanel.push(
                <button key={i+100} className="button" 
                style={{width:val.props.width, 
                height:val.props.height, 
                display:val.props.visible}}
                >{val.props.caption}
                </button>)
        }}
        return (
            <div id="content">
              {contentPanel}
            </div>)
}

const Content = function(props) {console.log(props)

    const content = props.content
    const contentRezult = []

    for (const [item,value] of Object.entries(content)) {
        if (value.type === 'panel') {
            if (value.props.visible === false) {
                value.props.visible = 'none'
            }
            contentRezult.push(
                <div key={item} className="panel1"
                style={{width:value.props.width, 
                height:value.props.height,
                display:value.props.visible}}>
                    {Panel(value.content)}
                </div>)
        }if (value.type === 'label') {
            if (value.props.visible === false) {
                value.props.visible = 'none'
            }
            contentRezult.push(
                <span key={item} className="label"
                style={{display:value.props.visible}}
                >{value.props.caption}
                </span>)
        }if (value.type === 'button') {
            if (value.props.visible === false) {
                value.props.visible = 'none'
            }
            contentRezult.push(
                <button key={item} className="button"
                style={{width:value.props.width, 
                height:value.props.height, 
                display:value.props.visible}}
                >{value.props.caption}
                </button>)
        }
      }
      return (
        <div id="content">
          {contentRezult}
        </div>)
}

export default Content;
