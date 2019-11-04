import React from 'react'
import Gallery from '../../src'
import './App.css'

let images: string[] = []
for (let i = 0; i < 92; i++) {
  images.push(`${i}.jpg`)
}

const App: React.FC = () => {
  return (
    <>
      <header id="header">EXAMPLE</header>
      <Gallery lines={5} marginPerc={0.03}>
      {
        images.map(v => (
          <img style={{width: '100%', borderRadius: '2vw'}} src={`images/${v}`} key={v} />
        ))
      }
      </Gallery>
    </>
  )
}

export default App
