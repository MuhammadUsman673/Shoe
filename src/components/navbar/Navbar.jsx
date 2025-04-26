// import React from 'react'

// const Navbar = () => {
//   return (
//     <div>
//       <nav>
//         <div className='logo '>
//             <img src="src/assets/brand_logo.png" alt="logo" />
//             </div>  
//             <ul>
//                 <li href="#">MENU</li>
//                 <li href="#">LOCATION </li>
//                 <li href="#">ABOUT </li>
//                 <li href="#">CONTACT </li>
//             </ul>
//             <button>Login</button>

        
//       </nav>
//     </div>
//   )
// }

// export default Navbar




import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <nav>
        <div className="logo">
          <img src="/src/assets/brand_logo.png" alt="Brand Logo" />
        </div>
        <ul className={isMenuOpen ? 'active' : ''}>
          <li><a href="#">MENU</a></li>
          <li><a href="#">LOCATION</a></li>
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">CONTACT</a></li>
        </ul>
        <button>Login</button>
        <div className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </div>
      </nav>
    </div>
  );
};

export default Navbar;