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
