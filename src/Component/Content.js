import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { caption, visible, width,  height} from './contentChange'

export function Content() {
  const caption = useSelector(state => state.content.caption)
  const visible = useSelector(state => state.content.visible)
  const width = useSelector(state => state.content.width)
  const height = useSelector(state => state.content.height)
  const dispatch = useDispatch()

  return (
    <div>
        
    </div>
  )
}