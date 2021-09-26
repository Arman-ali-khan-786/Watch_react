import React,{Component} from 'react';
import classes from './App.module.css';

//  @ak----->>>  A-R-M-A-N    A-L-I    K-H-A-N

//importing different Components 

import ProductPreview from './Product Preview/ProductPreview';
import ProductDetails from './Product Details/ProductDetails';
import Topbar from './Topbar/Topbar';
import ProductData from './Uitils/ProductData';

class App extends Component {
  state = {
    productData : ProductData,
    currentImagePreviewPos : 0,
    currentSelectedFeature : 0
  }
  onColorOptionClick = (pos) =>{
    this.setState({currentImagePreviewPos : pos})
  }
  onFeaturesClick = (pos) => {
    this.setState({ currentSelectedFeature : pos})
  }
  render(){
    console.log("rendering App.js")
    return(
    <div className="App">
      <Topbar/>
      <div className={classes.MainContainer}>
        <ProductPreview currentImagePreview={this.state.productData.colorOptions[this.state.currentImagePreviewPos].imageUrl} 
        currentSelectedFeature={this.state.currentSelectedFeature}
        />
        <ProductDetails data={this.state.productData} 
         onColorOptionClick ={this.onColorOptionClick}
         onFeaturesClick= {this.onFeaturesClick }
         currentSelectedFeature={this.state.currentSelectedFeature}
         currentImagePreviewPos={this.state.currentImagePreviewPos}
         />
      </div>
    </div>
    );
    
  }  
}


export default App;
