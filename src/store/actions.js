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

export function changeHeightForPanel(contentId, contentIdPanel, height) {
  return {
    type: 'CHANGE_HEIGHT_PANEL',
    payload: height,
    contentId: contentId,
    contentIdPanel:  contentIdPanel
  }
}

export function changeWidthForPanel(contentId, contentIdPanel, width) {
  return {
    type: 'CHANGE_WIDTH_PANEL',
    payload: width,
    contentId: contentId,
    contentIdPanel:  contentIdPanel
  }
}

export function changeCaptionForPanel(contentId, contentIdPanel, caption) {
  return {
    type: 'CHANGE_CAPTION_PANEL',
    payload: caption,
    contentId: contentId,
    contentIdPanel:  contentIdPanel
  }
}

export function changeVisibleForPanel(contentId, contentIdPanel, visible) {
  return {
    type: 'CHANGE_VISIBLE_PANEL',
    payload: visible,
    contentId: contentId,
    contentIdPanel:  contentIdPanel
  }
}

export function addComponentForPanel(contentIdPanel, content) {
  return {
    type: 'CREATE_COMPONENT_PANEL',
    contentIdPanel:  contentIdPanel,
    payload: content
  }
}