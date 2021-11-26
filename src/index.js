import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import { createStore } from 'redux';
import Component from './Components/Component';
import reducer from './store/reducer';
import {changeHeight, changeWidth, changeCaption, changeVisible, addComponent, changeHeightForPanel, changeWidthForPanel, changeCaptionForPanel, changeVisibleForPanel, addComponentForPanel} from './store/actions'


const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const mapStateToProps = state => ({
  content: state.contentElements
})

const mapDispatchToProps = dispatch => ({
  changeHeightForPanel: (contentId, contentIdPanel, height) => dispatch(changeHeightForPanel(contentId, contentIdPanel, height)),
  changeWidthForPanel: (contentId, contentIdPanel, width) => dispatch(changeWidthForPanel(contentId, contentIdPanel, width)),
  changeCaptionForPanel: (contentId, contentIdPanel, caption) => dispatch(changeCaptionForPanel(contentId, contentIdPanel, caption)),
  changeVisibleForPanel: (contentId, contentIdPanel, visible) => dispatch(changeVisibleForPanel(contentId, contentIdPanel, visible)),
  addComponentForPanel: (contentIdPanel, content) => dispatch(addComponentForPanel(contentIdPanel, content)),
  changeHeight: (contentId, height) => dispatch(changeHeight(contentId, height)),
  changeWidth: (contentId, width) => dispatch(changeWidth(contentId, width)),
  changeCaption: (contentId, caption) => dispatch(changeCaption(contentId, caption)),
  changeVisible: (contentId, visible) => dispatch(changeVisible(contentId, visible)),
  addComponent: contentId => dispatch(addComponent(contentId))
})

const WrappedComponent = connect(mapStateToProps,mapDispatchToProps)(Component)

const update = () => {
  ReactDOM.render(
    <Provider store={store}>
      <WrappedComponent 
      content = {store.getState()}/>
    </Provider>, 
    document.getElementById('root')
  );
}

update()
store.subscribe(update)

