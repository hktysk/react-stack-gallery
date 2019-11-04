import React from 'react'
import { act } from 'react-dom/test-utils'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Gallery from '../src'

Enzyme.configure({
  adapter: new Adapter()
})

describe('render', () => {
  let doc: Enzyme.ShallowWrapper
  let cards: Enzyme.ShallowWrapper
  const text = [
    'aiueo',
    'kakikukeko'
  ]
  beforeEach(() => {
    act(() => {
      doc = shallow(
        <Gallery>
          <div style={{height: '500px'}}>{text[0]}</div>
          <div style={{height: '500px'}}>{text[1]}</div>
        </Gallery>
      )

      cards = doc.find('.like-pinterst-gallery-cards')
    })
  })

  it('show element', () => expect(cards).toHaveLength(2))

  it('show each text', () => {
    cards.forEach((v, k) => expect(v.text()).toEqual(text[k]))
  })

})
