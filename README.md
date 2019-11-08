<p align="center">
  <img src="https://github.com/hktysk/images/blob/master/react-stack-gallery/screen-shot.jpg?raw=true">
</p>

# *react-stack-gallery*
> A simple component for React that provides gallery like 'pinterest'

[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)
[![Maintainability](https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/maintainability)](https://codeclimate.com/github/hktysk/react-stack-gallery)

### Tech
* [Node.js](https://github.com/nodejs/node)
* [TypeScript](https://github.com/microsoft/TypeScript)
* [webpack](https://github.com/webpack/webpack)
* [Jest](https://github.com/facebook/jest)
* [enzyme](https://github.com/airbnb/enzyme)

### Installation
```sh
npm install [--save-dev] react-stack-gallery
```

### Usage
```js
import React from 'react'
import Gallery from 'react-stack-gallery'

const App = () => {
  return (
    <Gallery>
      <img src="1.jpg" style={{width: '100%'}} />
      <img src="2.jpg" style={{width: '100%'}} />
      <img src="3.jpg" style={{width: '100%'}} />
    </Gallery>
  )
}

export default App
```

or

```js
import React from 'react'
import Gallery from 'react-stack-gallery'

const App = () => {
  return (
    <Gallery>
      <div className="image" style={{width: '100%'}}>element</div>
      <div className="image" style={{width: '100%'}}>element</div>
      <div className="image" style={{width: '100%'}}>element</div>
    </Gallery>
  )
}

export default App
```

**TypeScript:**

```js
import React from 'react'
import Gallery from 'react-stack-gallery'

const App: React.FC = () => {
  return (
    <Gallery>
      <img src="1.jpg" style={{width: '100%'}} />
      <img src="2.jpg" style={{width: '100%'}} />
      <img src="3.jpg" style={{width: '100%'}} />
    </Gallery>
  )
}

export default App
```

### Props
```js
<Gallery screen={1200} lines={5} marginPerc={0.03}>
```
| props | description |
| --- | --- |
| screen | Specify the overall width in px. (default: window.innerWidth) |
| lines | The number of items to be placed side by side.(default: 2) |
| marginPerc | Set the margin. (default: 0.04) |

### Example
```sh
$ git clone git://github.com/hktysk/react-stack-gallery.git
$ cd react-stack-gallery
$ npm start
```
