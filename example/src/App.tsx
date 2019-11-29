import React from 'react'
import Gallery from '../../build'
import './App.css'

let images: string[] = []
for (let i = 0; i < 92; i++) {
  images.push(`${i}.jpg`)
}

const App: React.FC = () => {
  function showImage(e: any) {
    e.target.style.opacity = 1
  }

  return (
    <>
      <header id="header">EXAMPLE</header>
      <Gallery lines={5} marginPerc={0.03} square={false}>
      {
        images.map(v => (
          <img style={{
            display: 'block',
            width: '100%',
            borderRadius: '2vw',
            transition: '.2s',
            opacity: 0
          }} onLoad={showImage} src={`images/${v}`} key={v} />
        ))
      }
      </Gallery>
    </>
  )
}

export default App
