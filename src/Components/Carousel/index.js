import "./Carousel.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Carousel(props) {
  const [imagesLength,setImagesLength]=useState(props.images.length)
  const[style,setStyle]=useState("overlay")
  const [imageIndex,setImageIndex]=useState(props.index)
  const Close=()=>{
    setStyle('close')
  }
  const leftClick=()=>{
    setImageIndex(imageIndex-1)
    if(imageIndex==0){
        setImageIndex(imagesLength-1)
    }
  }
  const rightClick=()=>{
    setImageIndex(imageIndex+1)
    console.log(imageIndex)
      if(imageIndex==imagesLength-1){
        setImageIndex(0)
        console.log(imageIndex)
      }
}
  return (
    <>
      <div className={style} >
        {props.images.map((image, index) => {
          if (index ==imageIndex)
            return (
              <>
                <FontAwesomeIcon icon="xmark" className="carouselExitIcons" onClick={Close}/>
                <div className="carouselContainer">
                    <FontAwesomeIcon icon="angle-left" className="carouselIconsL" onClick={leftClick}/>
                    <div className="carouselImgContainer">
                        <img src={image.url} className="carouselImg"/>
                        <p className="carouselName">{image.name}</p>
                    </div>
                    <FontAwesomeIcon icon="angle-right" className="carouselIconsR" onClick={rightClick}/>
                </div>
                <p className="carouselIndex">image {index+1}/{imagesLength}</p>
              </>
            );
        })}
      </div>
    </>
  );
}

export default Carousel;
