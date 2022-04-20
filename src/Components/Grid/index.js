import "./Grid.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousel from "./../Carousel/index";
function Grid() {
  const [images, setImages] = useState([]);
  const [zoom, setZoom] = useState(false);
  const[imgIndx,setImgIndex]=useState(null)
  const [url, setUrl] = useState(
    "https://scaleflex.cloudimg.io/v7/0.fe_task_static/pictures.json?vh=7a646d&func=proxy"
  );
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setImages(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, url);
  const zoomin = (index) => {
    setZoom(!zoom);
    setImgIndex(index);
  };
  return (
    <>
      <div className="container">
        {images.map((image, index) => {
          return (
            <>
              <div className="imgContainer">
                <img src={image.url} className="img" />
                <FontAwesomeIcon
                  icon="magnifying-glass-plus"
                  className="icon"
                  onClick={()=>zoomin(index)}
                />
              </div>
            </>
          );
        })}
      </div>
      {zoom && <Carousel images={images} index={imgIndx}/>}
    </>
  );
}

export default Grid;
