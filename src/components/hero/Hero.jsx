// // import React from 'react'

// // const Hero = () => {
// //   return (
// //     <div className='hero'>
// //       <div className='hero-content'>   
// //         <h1>YOUR FEET DESERVE THE BEST</h1>
// //         <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO <br />
// //          HELP YOU WITH OUR SHOES.YOUR FEET DESERVE <br />
// //           THE BEST AND WE’RE HERE TO HELP YOU WITH OUR <br /> SHOES</p>
// //         <div className='button'>
// //             <button>Shop Now</button>
// //             <button className='zain'>Category</button>
// //             </div>
// //             <div className='shop'>
// //                 <p>Also Available On</p>
// //                 </div>
// //                 <div className='brand'>
// //                 <img src="/src/assets/flipkart.png" alt="" />
// //                 <img src="/src/assets/amazon.png" alt="" />
// //                 </div>
            

        
// //         <div className='hero-image'>

// //         </div>
// //       </div>
// //     <div className='hero-image'>
// //     <img src="/src/assets/shoe_image.png" alt="" />
// //     </div>
// //     </div>
// //   )
// // }

// // export default Hero




//   import React from 'react';

//   const Hero = () => {
//     return (
//       <div className="hero">
//         <div className="hero-content">
//           <h1>YOUR FEET DESERVE THE BEST</h1>
//           <p>
//             YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
//             YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
//           </p>
//           <div className="button">
//             <button>Shop Now</button>
//             <button className="zain">Category</button>
//           </div>
//           <div className="shop">
//             <p>Also Available On</p>
//           </div>
//           <div className="brand">
//             <img src="/src/assets/flipkart.png" alt="Flipkart" />
//             <img src="/src/assets/amazon.png" alt="Amazon" />
//           </div>
//         </div>
//         <div className="hero-image">
//           <img src="/src/assets/shoe_image.png" alt="Shoe" />
//         </div>
//       </div>
//     );
//   };

//   export default Hero;





import React from 'react';
import flipkart from '../../assets/flipkart.png';
import amazon from '../../assets/amazon.png';
import shoeImage from '../../assets/shoe_image.png';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
        </p>
        <div className="button">
          <button>Shop Now</button>
          <button className="zain">Category</button>
        </div>
        <div className="shop">
          <p>Also Available On</p>
        </div>
        <div className="brand">
          <img src={flipkart} alt="Flipkart" />
          <img src={amazon} alt="Amazon" />
        </div>
      </div>
      <div className="hero-image">
        <img src={shoeImage} alt="Shoe" />
      </div>
    </div>
  );
};

export default Hero;
