import React, { useEffect, useState } from 'react'
import withImageLoader from 'react-image-loader-hoc';
// import LazyLoad from 'react-lazy-load';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const Portfolio = ({img}) => {
  const [cursorX, setCursorX] = useState()
  const [cursorY, setCursorY] = useState()
  // window.addEventListener('mousemove', (e) => {
  //   setCursorX(e.clientX)
  //   setCursorY(e.clientY)
  // })

  const Image = props => (<img alt="" {...props} />);
  const ImageWithLoader = withImageLoader(Image);

  return (
    <section className="portfolio">
      <h1>My Portfolio</h1>
      <div className="gallery">
        {
          img && img.length > 0 && img.map((val) => {
            return (
              <div className="img-cont" key={val.id}>
                {/* <img src={val} alt="" width='100px' height='100px' /> */}
                <LazyLoadImage
            src={val}
            width="100px"
            height="100px"
          />
              </div>
            )
          })
        }
        {/* <div className="cursor" style={{ left: cursorX + 'px', top: cursorY + 'px' }}>View project</div> */}
      </div>
    </section>
  )
}

export default Portfolio
