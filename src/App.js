import React from 'react';
import {useState, useEffect} from "react";
import { pageStyles, 
  quoteFooterStyles, 
  ctnStyles, 
  textStyles, 
  authorStyles,
  twIcon,
  fbIcon,
  quoteBoxStyles} from './components/Styles';
import Footer from './components/Footer';
import LikeBtn from './components/LikeBtn';
import RandomBtn from './components/RandomBtn';

const App = function(){
  //UseEffect and fetch API
 const [quotes, setQuotes] = useState(null);
 const [like, setLike] = useState(false) 

 useEffect(() => {
     fetch('https://type.fit/api/quotes')
     .then(response => {
       if(!response.ok){
         throw Error('Sorry, page is not found.');
       }
       return response.json();
     })
     .then(data => {
       setQuotes(data);
     })
 }, [])


 const [ranQuote, setRanQuote] = useState({
   ranText: {
     text: 'Everyone has a plan until they get punched in the mouth',
     author: 'Mike Tyson'
   },
   img:'https://source.unsplash.com/random'
 });

 const getRandom = (array) =>{
   let ranNum = Math.floor(Math.random()*array.length) + 1;
   setRanQuote({
     ranText: array[ranNum],
     img:`https://source.unsplash.com/random/?sig=${ranNum}`
   })
 };

 const bgStyles = {
  backgroundImage: `url(${ranQuote.img})` ,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  width: '100vw',
  height: '100vh'
};

   return (
   <div style={ bgStyles } className={ pageStyles }>
     <div id="wrapper" className={ ctnStyles }>
       <div id="quote-box" className={ quoteBoxStyles }>
         <div id="text" className={ textStyles }>
           <q>{ranQuote.ranText.text}</q>
         </div>
         <div id="author" className={ authorStyles }>
           -- {ranQuote.ranText.author}  
         </div>
         <div id="footer"className= { quoteFooterStyles }>
            <LikeBtn setLike={setLike} like={like} />
            { twIcon }
            { fbIcon }
            <RandomBtn quotes={quotes} getRandom={getRandom}/>
         </div>
       </div>
     </div>
     <Footer />
   </div>
 );
}

export default App;
