import React from "react";
// import ProductData from './ProductData.js';
import classes from './ProductDetails.module.css';

const ProductDetails = (props) => {
    const colorOptions = props.data.colorOptions.map((items , pos)=>{
        const classArr = [classes.ProductImage]
        if(pos === props.currentImagePreviewPos){
            classArr.push(classes.SelectedProductImage);
        }
        return(
            <img key={pos} className={classArr.join(' ')} src={items.imageUrl} 
            onClick={() => props.onColorOptionClick(pos)} alt={items.styleName}/>            
        )
    })
    const FeaturesList = props.data.featureList.map((items,pos) =>{
        const classArr =[classes.FeatureItem];
        if(pos === props.currentSelectedFeature ){
            classArr.push(classes.SelectedFeatureItem);
        }
        return(
            <button key={pos} className={classArr.join(' ')}
            onClick={() => props.onFeaturesClick(pos)}>{items}</button>
        );
    })
    return(
        <div className={classes.productData}>
          <h1 className={classes.ProductTitle}>{props.data.title}</h1>
          <p className={classes.ProductDescription}>{props.data.description}</p>
          <h3 className={classes.SectionHeading}>Select Color</h3>
          <div>
            {colorOptions}
            {/* <img className={[classes.ProductImage,classes.SelectedProductImage].join(' ')} src="https://imgur.com/iOeUBV7.png" alt="Black Strap Watch"/>
            <img className={classes.ProductImage} src="https://imgur.com/PTgQlim.png" alt="Red Strap Watch"/>
            <img className={classes.ProductImage} src="https://imgur.com/Mplj1YR.png" alt="Blue Strap Watch"/>
            <img className={classes.ProductImage} src="https://imgur.com/xSIK4M8.png" alt="PurpleStrap Watch"/> */}
          </div>
          <h3 className={classes.SectionHeading}>Features</h3>
          <div>
            {FeaturesList}
          </div>
          <button className={classes.BuyNowButton}>Buy Now</button>
        </div>
    )
}

export default ProductDetails;