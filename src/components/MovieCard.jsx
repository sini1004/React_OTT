import React from 'react'
import {Badge} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({item}) => {
  // sotre에서 genresList 불러옴
  const {genreList} = useSelector((state) => state.movie);
  
  // useNavigate
  const navigate = useNavigate();

  // Card 클릭 시 디테일페이지로 넘어가기
  const gotodDetail = () => {
    navigate(`/movies/${item.id}`);
  } 

  return (
    <div onClick={gotodDetail} 
    className='card_movie'
    style={{ backgroundImage:`URL("https://www.themoviedb.org/t/p/w710_and_h400_multi_faces/${item.backdrop_path}")`
    }}>
      <div className='card_info'>
        <div className='card_info_wrap'>
          <h3>{item.title}</h3>
          <div className='badge'>
            {item.genre_ids.map((id) => (
              <Badge bg="success" key={id}>
                {genreList.find((item) => item.id === id)?.name}
              </Badge>
            ))}
          </div>
          <div className="card_infosub">
            <p>⭐️ {item.vote_average}</p>
            <span className={item.adult ? 'r_rated' : 'g_rated'}>
              {" "}
              {item.adult ? 'R-rated' : 'G-rated'} {" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieCard