import React, { useState, useEffect } from 'react';
import placeItems from './placeItems'

type Props = {
  children: React.ReactNode
  screen?: number
  lines?: number
  marginPerc?: number
}

const Gallery: React.FC<Props> = (props) => {
  type parentStyle = {
    opacity: 0 | 1
  }
  const [parentStyle, setParentStyle] = useState<parentStyle>({
    opacity: 0
  })

  function formatLayout(): void {
    placeItems(
      props.screen || window.innerWidth,
      props.lines || 2,
      props.marginPerc || 0.04
    )
    setParentStyle({
      opacity: 1
    })
  }

  useEffect(() => window.addEventListener('resize', formatLayout), [])

  return (
    <div style={{position: 'relative', transition: '.2s', ...parentStyle}} onLoad={formatLayout}>
    {
      React.Children.map(props.children, (x, k) => (
        <div className="like-pinterst-gallery-cards" key={k}>{x}</div>
      ))
    }
    </div>
  )
}

export default Gallery
