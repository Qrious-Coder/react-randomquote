import React from 'react';
import { likeBtn } from './Styles'; 
import pinkHeart from '../components/img/pinkHeart.png';
import whiteHeart from '../components/img/whiteHeart.png';

const LikeBtn = ({setLike, like}) => {
  return(
    <button 
    className={ likeBtn }
    onClick ={() => setLike(like =!like)} 
    >
      { like === true ? <img src={ pinkHeart } 
      alt="like" 
      width="20" 
      height="20"/> :
      <img src={ whiteHeart } 
      alt="unlike"
      width="20" 
      height="20"
      />}
  </button>
  )
} 

export default LikeBtn