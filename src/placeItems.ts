export default function placeItems(screen: number, lines: number, marginPerc: number, square: boolean) {
  const items: HTMLElement[] = Array.from(
    document.getElementsByClassName('like-pinterst-gallery-cards')
  ) as HTMLElement[]

  const margin: {
    one: number
    half: number
    quater: number
  } = {
    one: Math.floor(screen * marginPerc),
    half: Math.floor(screen * marginPerc / 2),
    quater: Math.floor(screen * marginPerc / 4),
  }
  const card: {
    width: {
      includeMargin: number
      notIncludeMargin: number
    }
  } = {
    width: {
      includeMargin: (screen - margin.one) / lines,
      notIncludeMargin: (screen - margin.one) / lines - margin.half,
    }
  }

  /*
    Create an array (row) to store the height,
    place the item on the row with the lowest height
  */
  let linesHeight: number[] = new Array(lines).fill(0)
  items.forEach(v => {
    const min: number = Math.min(...linesHeight)
    const minIndex: number = linesHeight.findIndex(x => x === min)
    const position = {
      y: linesHeight[minIndex],
      x: card.width.includeMargin * minIndex + margin.half
    }

    v.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: ${card.width.notIncludeMargin}px;
      height: ${square ? card.width.notIncludeMargin + 'px' : 'auto'};
      transform: translate(${position.x}px, ${position.y}px);
      overflow: hidden;
    `

    linesHeight[minIndex] += v.clientHeight + margin.half
  })
}
