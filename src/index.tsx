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
    transition: string
    opacity: 0 | 1
  }
  const [parentStyle, setParentStyle] = useState<parentStyle>({
    transition: '.2s',
    opacity: 0
  })

  function formatLayout(): void {
    placeItems(
      props.screen || window.innerWidth,
      props.lines || 2,
      props.marginPerc || 0.04
    )
    setParentStyle({
      transition: '.2s',
      opacity: 1
    })
  }

  useEffect(() => window.addEventListener('resize', formatLayout), [])

  return (
    <div style={parentStyle} onLoad={formatLayout}>
    {
      React.Children.map(props.children, (x, k) => (
        <div className="like-pinterst-gallery-cards" key={k}>{x}</div>
      ))
    }
    </div>
  )
}

export default Gallery;
