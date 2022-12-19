// react slide Carousel 슬라이드 컴포넌트

import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from './MovieCard';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1441 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 1440, min: 1025 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


const MovieSlide = ({movie}) => {
  console.log(movie)
  return (
    <div>
      <Carousel responsive={responsive}>
        {movie.results.map((item) => (
          <div className='card_wrap' key={item.id}>
            <MovieCard item={item}/>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default MovieSlide