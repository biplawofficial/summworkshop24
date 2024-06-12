import React,{useState,useEffect} from 'react';
import'./SliderandNews.css'
 const SliderandNews=({slides})=>
    {
        const [currentSlide,setCurrentSlide]=useState(0);
        //login for slider
        useEffect(()=>
            {
                const intervalId=setInterval(()=>
                {
                    setCurrentSlide((prevSlide)=>(prevSlide+1)%slides.length);
                },6000)
                return ()=>{
                    clearInterval(intervalId);
                }
            },[currentSlide,slides.length]);
        return (

            <div className="sliderandnews">
                 <div className="left">
                    <img src={slides[currentSlide]} alt={`slide$(currentSlide+1)`} className="images" />
              </div>  
            <div className="right">
                  news
            </div>
         </div>
        );
    }
    export default SliderandNews