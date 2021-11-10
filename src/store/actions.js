export function changeHeight(contentId, height) {
    return {
      type: 'CHANGE_HEIGHT',
      payload: height,
      contentId: contentId
    }
}

export function changeWidth(contentId, width) {
    return {
      type: 'CHANGE_WIDTH',
      payload: width,
      contentId: contentId
    }
}

export function changeCaption(contentId, caption) {
    return {
      type: 'CHANGE_CAPTION',
      payload: caption,
      contentId: contentId
    }
}

export function changeVisible(contentId, visible) {
    return {
      type: 'CHANGE_VISIBLE',
      payload: visible,
      contentId: contentId
    }
}

export function addComponent(content) {
    return {
      type: 'CREATE_COMPONENT',
      payload: content
    }
}
