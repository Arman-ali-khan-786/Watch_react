import React from "react";
// a ProductPreview.module.css file is there for it's styling 
import classes from './ProductPreview.module.css';
const ProductPreview = (props) =>{
    let  currentHour = new Date().getHours();
    let currentMinute = new Date().getMinutes()
    var session = "am";
    if(currentHour>12 && currentHour<=24 && session ==="pm"){
      currentHour = currentHour-12;
      session="am"
    }
    else{
      if(currentHour>=13){
        currentHour = currentHour-12;
      }
      session="pm"
    }

    currentMinute = currentMinute > 9 ? currentMinute : '0'+currentMinute;
    return(
        <div className={classes.productPreview}>
          <img src={props.currentImagePreview}></img>
          {props.currentSelectedFeature === 1 ?
          (<div className={classes.HeartBeatSection}>
            <i className="fas fa-heartbeat"></i>
            <p>78</p>
           </div>
          )
          :
          (<div className={classes.TimeSection}>
            <p>{`${currentHour}:${currentMinute} ${session}`}</p>
           </div> 
          )
          }
        </div>
    );

}

export default ProductPreview;