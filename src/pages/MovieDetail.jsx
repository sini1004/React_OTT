import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import MovieExplain from '../components/MovieExplain'
import { movieAction } from '../redux/action/movieAction'
import BeatLoader from "react-spinners/BeatLoader";

const MovieDetail = () => {
  // 파라미터만 받아오기
  const {id} = useParams();

  const {detailMovies, loading, trailerVideo} = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(movieAction.getMoviesDetail(id));
    window.scrollTo(0, 0);
  },[id]);

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
      <MovieExplain item={detailMovies} videoId={trailerVideo}/>
      <br />
      <br />
    </div>
  )
}

export default MovieDetail