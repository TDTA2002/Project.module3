import React, { useContext, useEffect } from 'react'

/* Antd */
import { AutoComplete, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CartItem from '../pages/product/CartItem';
import api from '@api';
import { message } from 'antd';
import Serach from './Serach';
import "./scss/dropdown.scss"
import { useSelector } from 'react-redux';
import { RootContext } from '../App';
import { randomId } from '@mieuteacher/meomeojs';
import actions from '../stores/actions';
import Dropdowngo from "./DropDown"

export default function Navbar() {
  const { cartStore, dispatch, userStore } = useContext(RootContext);

  const [cartItems, setCartItems] = useState(null);


  // function handleDelete(product_id) {
  //   api.purchase.deleteProductFromCart(product_id)
  //     .then(res => {
  //       if (res.status == 200) {
  //         dispatch(actions.cartActions.deleteProductFromCart(product_id))
  //         message.success(res.data.message);
  //       } else {
  //         message.error(res.data.message);
  //       }
  //     })
  // }

  // function updateCart(typeBtn) {

  //   if (typeBtn == "-") {
  //     if (quantity == 1) {
  //       if (confirm("xóa ok!")) {
  //         api.purchase.updateCart(userStore?.data?.id, {
  //           type: 0,
  //           cart_detail_record_edited: {
  //             id: product.id
  //           }
  //         }).then(res => {
  //           api.purchase.findCart(userStore.data?.id)
  //             .then(res => {
  //               if (res.status == 200) {
  //                 dispatch(actions.cartActions.setCartData(res.data?.data))
  //               } else {
  //                 alert('error')
  //               }
  //             }).catch(err => {
  //               alert('sap !')
  //             })
  //         }).catch(err => {
  //           alert('error!')
  //         })
  //       } else {
  //         return
  //       }
  //     }
  //     api.purchase.updateCart(userStore?.data?.id, {
  //       type: 1,
  //       cart_detail_record_edited: {
  //         id: product.id,
  //         quantity: quantity - 1
  //       }
  //     }).then(res => {
  //       api.purchase.findCart(userStore.data?.id)
  //         .then(res => {
  //           if (res.status == 200) {
  //             dispatch(actions.cartActions.setCartData(res.data?.data))
  //           } else {
  //             alert('error')
  //           }
  //         }).catch(err => {
  //           alert('sap !')
  //         })
  //     }).catch(err => {
  //       alert('error!')
  //     })
  //   } else {
  //     api.purchase.updateCart(userStore?.data?.id, {
  //       type: 1,
  //       cart_detail_record_edited: {
  //         id: product.id,
  //         quantity: quantity + 1
  //       }
  //     }).then(res => {
  //       api.purchase.findCart(userStore.data?.id)
  //         .then(res => {
  //           if (res.status == 200) {
  //             dispatch(actions.cartActions.setCartData(res.data?.data))
  //           } else {
  //             alert('error')
  //           }
  //         }).catch(err => {
  //           alert('sap !')
  //         })
  //     }).catch(err => {
  //       alert('error!')
  //     })
  //   }
  // }

  useEffect(() => {
    if (cartStore.data) {
      setCartItems(cartStore.data.cart_details)
    }
  }, [cartStore.data])



  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  const totalCart = cartStore?.data?.cart_details?.reduce((total, product) => {
    return total + product.quantity
  }, 0);
  const [cartCount, setCartCount] = useState(totalCart)
  //   console.log("cartStore", cartStore.data)
  const navigate = useNavigate();
  // const [isShown, setIsShown] = useState(false);
  // const [isLogin, setIsLogin] = useState(() => localStorage.getItem("token") || null);
  function checkIsLogin() {
    const token = localStorage.getItem("token");
    setIsLogin(token);
  }


  // const renderTitle = (title) => (
  //   <span>
  //     {title}
  //     <a
  //       style={{
  //         float: 'right',
  //       }}
  //       href="https://www.google.com/search?q=antd"
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       more
  //     </a>
  //   </span>
  // );

  // const renderItem = (title, count) => ({
  //   value: title,
  //   label: (
  //     <div
  //       style={{
  //         display: 'flex',
  //         justifyContent: 'space-between',
  //       }}
  //     >
  //       {title}
  //       <span>
  //         <UserOutlined /> {count}
  //       </span>
  //     </div>
  //   ),
  // });



  const [menu, setMenu] = useState([
    "Home", "About", "Contacts", "Policies"
  ]);
  return (

    <nav>

      <div className="nav_content">
        <div className="left_content">
          {/* Logo */}
          <img src={`${process.env.REACT_APP_SERVER_HOST}logo1.png`} className="logo" />
        </div>
        <div className="middle_content">
          {
            menu.map((item, index) => (
              <div className="item" key={Date.now() * Math.random()}>{item}</div>
            ))
          }
        </div>
        <div className="right_content">

          <Serach />
          {/* Wishlist */}
          <i className="fa-regular fa-heart"></i>
          {/* Cart */}
          {/* <span className='cart-icon' onClick={() => navigate("/carts")}>
            <span> <i className="fa-solid fa-bag-shopping"></i>
              <span className='cart-quantity' style={{ fontSize: "10px", backgroundColor: "purple", color: "white", padding: "1px 4px", borderRadius: "50%", position: "absolute" }}>{totalCart}</span></span>
          </span> */}

          <div
            className="gio-hang-dropdown"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="gio-hang-icon">
              {/* Biểu tượng giỏ hàng */}
              <i className="fa-solid fa-bag-shopping"></i>
            </div>
            <span className='cart-quantity' style={{ fontSize: "10px", backgroundColor: "purple", color: "white", padding: "1px 4px", borderRadius: "50%", position: "absolute", top: "-3px", right: "-4px" }}>{totalCart}</span>
            {isHovered && (
              <div className="gio-hang-content">

                {cartItems?.map((product, index) => (
                  <Dropdowngo product={product} key={randomId()} />
                ))}


                <div className="checkout">
                  <p onClick={() => navigate("/carts")}>Checkout</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav >
  )
}
