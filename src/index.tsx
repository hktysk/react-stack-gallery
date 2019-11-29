import React, { useEffect } from 'react';
import ResizeObserver from 'react-resize-observer'
import placeItems from './placeItems'

type Props = {
  children: React.ReactNode
  screen?: number
  lines?: number
  marginPerc?: number
  square?: boolean
}

const Gallery: React.FC<Props> = (props) => {
  function formatLayout(): void {
    placeItems(
      props.screen || window.innerWidth,
      props.lines || 2,
      props.marginPerc ?? 0.04,
      props.square || false
    )
  }

  useEffect(formatLayout, [])

  return (
    <div style={{position: 'relative'}}>
      <ResizeObserver onResize={formatLayout} />
      {
        React.Children.map(props.children, (x, k) => (
          <div className="like-pinterst-gallery-cards" onLoad={formatLayout} key={k}>{x}</div>
        ))
      }
    </div>
  )
}

export default Gallery
