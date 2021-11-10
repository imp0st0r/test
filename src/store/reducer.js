const InitialState = {
  contentElements: [
    {type: 'panel', 
    props: {
       width: 800,
       height: 500,
       visible: true
    },
    content: [{
      type: 'button',
      props: {
        width: 100,
        height: 40,
        caption: 'button',
        visible: true
      }
    }]},
    {type: 'label',
    props: {
      caption: 'label',
      visible: true
    }},
    {type: 'button',
    props: {
      caption: 'button',
      width: 100,
      height: 50,
      visible: true
    }}]
}

export const reducer = (state = InitialState, action) => {

  let contentElement = state.contentElements

  switch (action.type) {
    case "CHANGE_WIDTH":
      contentElement = state.contentElements
      contentElement[action.contentId].props.width = action.payload
      return {...state, contentElements: contentElement}
    case "CHANGE_HEIGHT":
      contentElement = state.contentElements
      contentElement[action.contentId].props.height = action.payload
    return {...state, contentElements: contentElement}
    case "CHANGE_CAPTION":
      contentElement = state.contentElements
      contentElement[action.contentId].props.caption = action.payload
      return {...state, contentElements: contentElement}
    case "CHANGE_VISIBLE":
      contentElement = state.contentElements
      contentElement[action.contentId].props.visible = action.payload
      return {...state, contentElements: contentElement}
    case "CREATE_COMPONENT": 
      let content = []
      console.log(action)
      switch (action.payload.type) {
        case 'label':
          content = {
          type : action.payload.type,
          props : {
            caption : action.payload.props.caption,
            visible : action.payload.props.visible}}
            break;
        case 'panel':
          content = {
            type : action.payload.type,
            props : {
              height : action.payload.props.height,
              width : action.payload.props.width,
              visible : action.payload.props.visible}}
              break;
        case 'button':
          content = {
            type : action.payload.type,
            props : {
              height : action.payload.props.height,
              width : action.payload.props.width,
              caption : action.payload.props.caption,
              visible : action.payload.props.visible}}
              break;
        default:
          content = {}}
      contentElement[0].content.push(content)
      return {...state, contentElements: contentElement}
    default:
      return state
  }
}

export default reducer