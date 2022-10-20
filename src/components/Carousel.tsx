import "../styles/carousel.scss"
import { useEffect, useState } from 'react';

interface props {
    items: string[]
}

export const Carousel = ({items}: props) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const carouselInfiniteScroll = () => {
    if (currentIndex === items.length-1) { setCurrentIndex(0) }
    else { setCurrentIndex( currentIndex + 1 ) }
  }

  useEffect(() => {
    const interval = setInterval(()=>{carouselInfiniteScroll()}, 2000)
    return () => {clearInterval(interval)}
  })
  

  return (
    <div className="carousel-container">
      {items.map((item, index) => <div 
        key={item+""+index} 
        className="carousel-item"
        style={{transform: `translateX(-${currentIndex * 100}%)`, backgroundColor:`${item}`}}

        >{item}</div>)}
    </div>
  )
}
