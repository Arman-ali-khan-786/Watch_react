(this["webpackJsonpwatch-product"]=this["webpackJsonpwatch-product"]||[]).push([[0],[,function(e,t,a){e.exports={productData:"ProductDetails_productData__3wOVd",ProductTitle:"ProductDetails_ProductTitle__1TMfZ",ProductDescription:"ProductDetails_ProductDescription__2e_74",SectionHeading:"ProductDetails_SectionHeading__3A3gT",ProductImage:"ProductDetails_ProductImage___g83c",SelectedProductImage:"ProductDetails_SelectedProductImage__32AtP",FeatureItem:"ProductDetails_FeatureItem__167bK",SelectedFeatureItem:"ProductDetails_SelectedFeatureItem__3qA_l",BuyNowButton:"ProductDetails_BuyNowButton__3QjRk"}},,function(e,t,a){e.exports={productPreview:"ProductPreview_productPreview__2BAjo",TimeSection:"ProductPreview_TimeSection__3xJ_z",HeartBeatSection:"ProductPreview_HeartBeatSection__3cic1",beat:"ProductPreview_beat__3tsYQ"}},,,,,function(e,t,a){e.exports={MainContainer:"App_MainContainer__2opwK"}},function(e,t,a){e.exports={Topbar:"Topbar_Topbar__31T3e"}},,,,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var r=a(2),c=a.n(r),n=a(5),i=a.n(n),o=(a(16),a(6)),s=a(7),u=a(11),l=a(10),d=a(8),m=a.n(d),p=a(3),j=a.n(p),h=a(0),g=function(e){var t=(new Date).getHours(),a=(new Date).getMinutes(),r="am";return t>12&&t<=24&&"pm"===r?(t-=12,r="am"):(t>=13&&(t-=12),r="pm"),a=a>9?a:"0"+a,Object(h.jsxs)("div",{className:j.a.productPreview,children:[Object(h.jsx)("img",{src:e.currentImagePreview}),1===e.currentSelectedFeature?Object(h.jsxs)("div",{className:j.a.HeartBeatSection,children:[Object(h.jsx)("i",{className:"fas fa-heartbeat"}),Object(h.jsx)("p",{children:"78"})]}):Object(h.jsx)("div",{className:j.a.TimeSection,children:Object(h.jsx)("p",{children:"".concat(t,":").concat(a," ").concat(r)})})]})},_=a(1),P=a.n(_),b=function(e){var t=e.data.colorOptions.map((function(t,a){var r=[P.a.ProductImage];return a===e.currentImagePreviewPos&&r.push(P.a.SelectedProductImage),Object(h.jsx)("img",{className:r.join(" "),src:t.imageUrl,onClick:function(){return e.onColorOptionClick(a)},alt:t.styleName},a)})),a=e.data.featureList.map((function(t,a){var r=[P.a.FeatureItem];return a===e.currentSelectedFeature&&r.push(P.a.SelectedFeatureItem),Object(h.jsx)("button",{className:r.join(" "),onClick:function(){return e.onFeaturesClick(a)},children:t},a)}));return Object(h.jsxs)("div",{className:P.a.productData,children:[Object(h.jsx)("h1",{className:P.a.ProductTitle,children:e.data.title}),Object(h.jsx)("p",{className:P.a.ProductDescription,children:e.data.description}),Object(h.jsx)("h3",{className:P.a.SectionHeading,children:"Select Color"}),Object(h.jsx)("div",{children:t}),Object(h.jsx)("h3",{className:P.a.SectionHeading,children:"Features"}),Object(h.jsx)("div",{children:a}),Object(h.jsx)("button",{className:P.a.BuyNowButton,children:"Buy Now"})]})},O=a(9),v=a.n(O),S=function(){return Object(h.jsx)("header",{className:"App-header",children:Object(h.jsx)("nav",{className:v.a.Topbar,children:Object(h.jsx)("img",{src:"https://static.businessworld.in/article/article_extra_large_image/1590571015_oiei4u_Amazon.png",alt:"Amazon logo"})})})},w={title:"FitBit 19 - The Smartest Watch",description:"It is one of the latest watch available only on Amazon,it is a smart digital watch with heartbeat showing feature and water proof also ",colorOptions:[{styleName:"Black Strap",imageUrl:"https://imgur.com/iOeUBV7.png"},{styleName:"Red Strap",imageUrl:"https://imgur.com/PTgQlim.png"},{styleName:"Blue Strap",imageUrl:"https://imgur.com/Mplj1YR.png"},{styleName:"Purple Strap",imageUrl:"https://imgur.com/xSIK4M8.png"}],featureList:["Time","Heart Rate"]};Object.freeze(w);var x=w,f=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,c=new Array(r),n=0;n<r;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={productData:x,currentImagePreviewPos:0,currentSelectedFeature:0},e.onColorOptionClick=function(t){e.setState({currentImagePreviewPos:t})},e.onFeaturesClick=function(t){e.setState({currentSelectedFeature:t})},e}return Object(s.a)(a,[{key:"render",value:function(){return console.log("rendering App.js"),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(S,{}),Object(h.jsxs)("div",{className:m.a.MainContainer,children:[Object(h.jsx)(g,{currentImagePreview:this.state.productData.colorOptions[this.state.currentImagePreviewPos].imageUrl,currentSelectedFeature:this.state.currentSelectedFeature}),Object(h.jsx)(b,{data:this.state.productData,onColorOptionClick:this.onColorOptionClick,onFeaturesClick:this.onFeaturesClick,currentSelectedFeature:this.state.currentSelectedFeature,currentImagePreviewPos:this.state.currentImagePreviewPos})]})]})}}]),a}(r.Component),N=f,F=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,19)).then((function(t){var a=t.getCLS,r=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),r(e),c(e),n(e),i(e)}))};i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(N,{})}),document.getElementById("root")),F()}],[[18,1,2]]]);
//# sourceMappingURL=main.72f99070.chunk.js.map