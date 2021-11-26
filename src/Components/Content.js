import React from "react";
import './Content.css'

const Panel = function(content) {

    const contentPanel = []
    
    for (let [i, val] of Object.entries(content)) {
        if (val.type === 'panel') {
            if (val.props.visible === 0) {
                val.props.visible = 'none'
            }
            if (val.props.visible === 1) {
                val.props.visible = 'block'
            }
            contentPanel.push(
                <div key={'p' + {i} + 10} className="panel1" 
                style={{width:val.props.width, 
                height:val.props.height,
                display:val.props.visible}}>
                </div>)
        }if (val.type === 'label') {
            if (val.props.visible === 0) {
                val.props.visible = 'none'
            }
            if (val.props.visible === 1) {
                val.props.visible = 'block'
            }
            contentPanel.push(
                <span key={'l' + {i} + 10} className="label"
                style={{display:val.props.visible}}
                >{val.props.caption}
                </span>)
        }if (val.type === 'button') {
            if (val.props.visible === 0) {
                val.props.visible = 'none'
            }
            if (val.props.visible === 1) {
                val.props.visible = 'block'
            }
            contentPanel.push(
                <button key={'b' + {i} + 10} className="button" 
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

const Content = function(props) {

    const content = props.content
    const contentRezult = []

    for (let [item,value] of Object.entries(content)) {
        if (value.type === 'panel') {
            if (value.props.visible === 0) {
                value.props.visible = 'none'
            }
            if (value.props.visible === 1) {
                value.props.visible = 'block'
            }
            contentRezult.push(
                <div key={'p' + {item}} className="panel1"
                style={{width:value.props.width, 
                height:value.props.height,
                display:value.props.visible}}>
                    {Panel(value.content)}
                </div>)
        }if (value.type === 'label') {
            if (value.props.visible === 0) {
                value.props.visible = 'none'
            }
            if (value.props.visible === 1) {
                value.props.visible = 'block'
            }
            contentRezult.push(
                <span key={'l' + {item}} className="label"
                style={{display:value.props.visible}}
                >{value.props.caption}
                </span>)
        }if (value.type === 'button') {
            if (value.props.visible === 0) {
                value.props.visible = 'none'
            }
            if (value.props.visible === 1) {
                value.props.visible = 'block'
            }
            contentRezult.push(
                <button key={'b' + {item}} className="button"
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
