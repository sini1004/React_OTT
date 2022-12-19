// - api를 불러오기 위한 세팅 : useEffect 사용
// loading spinner 추가

import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Banner from '../components/Banner';
import MovieSlide from '../components/MovieSlide';
import { movieAction } from '../redux/action/movieAction';
import BeatLoader from "react-spinners/BeatLoader";

const Home = () => {
  const dispatch = useDispatch();
  // 화면이 켜지자마자 데이터 불러오기, Redux Middleware(비동기 방식)

  // store에서 가져옴
  // loading 상태도 추가
  const {popularMovies, topRatedMovies, upcomingdMovies, loading} = useSelector((state) => state.movie);
  console.log('확인해보기 : ', popularMovies);

  useEffect(()=> {
    dispatch(movieAction.getMovies());
  },[]);

  // loading true : 데이터 도착 전 => loading spinner 보여줌
  // loading false : 데이터 도착 후 / 에러 => 데이터 보여줌 / 에러나면 에러메세지

  if(loading) {
    return(
      <div className="loader_container">
        <BeatLoader
          color='#13e683'
          loading={loading}
          margin={10}
          size={15}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    )
  } 

  return (
    <div>
      {/* 조건부 렌더링을 걸지 않으면 데이터를 받아 오기 전에 에러 */}
      {popularMovies.results && <Banner movie={popularMovies.results[2]}/>}
      {/* { 
        popularMovies.results && 
        popularMovies.results.map((i) =>{
          <Banner movie={popularMovies.results[i]}/>
        }  
        )
      } */}

      <div className="slide_container">
        <h2><span>popular</span> Movies</h2>
        <MovieSlide movie={popularMovies}/>

        <h2><span>topRated</span> Movies</h2>
          <MovieSlide movie={topRatedMovies}/>

        <h2><span>upcomingd</span> Movies</h2>
          <MovieSlide movie={upcomingdMovies}/>
      </div>
    </div>
  )
}

export default Home;