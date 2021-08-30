import React from "react";
import "./Photos.css";
import pexels from './pexels_logo.png';

export default function Photos(props) {
  console.log(props.photos);
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
        {props.photos.map(function(photo, index) {
          return(
            <div className="col-4" key={index}>
              <a href={photo.src.original} rel="noreferrer" target="_blank">
                  <img src={photo.src.landscape} className="img-fluid" alt="meaningPhoto"/>
              </a>
              <br />
              <a href={photo.photographer_url} rel="noreferrer" target="_blank" className="author">{photo.photographer}</a>
            </div>);                
        })}
        </div>
        <div className="pexelsCredits">Photos from Pexels 
        <a href="https://www.pexels.com/" rel="noreferrer" target="_blank">
          <img src={pexels} alt="Pexels" className="pexelsLogo"/>
        </a>
        </div>
      </section>
    );
  } else {
    return null;
  }
    
}