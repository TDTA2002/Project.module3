// import { useState, useEffect, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';


// export default function Navbar({ userStore, cartStore }) {
//   const totalCart = cartStore?.data?.cart_details?.reduce((total, product) => {
//     return total + product.quantity
//   }, 0);
//   const [cartCount, setCartCount] = useState(totalCart)
//   console.log("totalCart", totalCart)
// //   console.log("cartStore", cartStore.data)
//   const navigate = useNavigate();
//   const [isShown, setIsShown] = useState(false);
//   const [isLogin, setIsLogin] = useState(() => localStorage.getItem("token") || null);
//   function checkIsLogin() {
//     const token = localStorage.getItem("token");
//     setIsLogin(token);
//   }

//   return (
//   <div>
//     dqwd
//   </div>
//   )
// }


// import React, { useState } from 'react';
// import "./test.scss"
// function GioHangDropdown() {
//     const [isHovered, setIsHovered] = useState(false);

//     const handleMouseEnter = () => {
//         setIsHovered(true);
//     };

//     const handleMouseLeave = () => {
//         setIsHovered(false);
//     };

//     return (
//         <div
//             className="gio-hang-dropdown"
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//         >
//             <div className="gio-hang-icon">
//                 {/* Biểu tượng giỏ hàng */}
//                 <i className="fa fa-shopping-cart"></i>
//             </div>
//             {isHovered && (
//                 <div className="gio-hang-content">
//                     {/* Nội dung dropdown, ví dụ: */}
//                     <div className="product">
//                         <img
//                             src="link_to_your_image_1"
//                             alt="Sản phẩm 1"
//                             className="product-image"
//                         />
//                         <p className="product-name">Sản phẩm 1</p>
//                         <p className="product-price">100.000đ</p>
//                     </div>
//                     <div className="product">
//                         <img
//                             src="link_to_your_image_2"
//                             alt="Sản phẩm 2"
//                             className="product-image"
//                         />
//                         <p className="product-name">Sản phẩm 2</p>
//                         <p className="product-price">150.000đ</p>
//                     </div>
//                     <div className="product">
//                         <img
//                             src="link_to_your_image_3"
//                             alt="Sản phẩm 3"
//                             className="product-image"
//                         />
//                         <p className="product-name">Sản phẩm 3</p>
//                         <p className="product-price">200.000đ</p>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default GioHangDropdown;
