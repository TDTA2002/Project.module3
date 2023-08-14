import React, { useContext, useEffect } from 'react'

/* Antd */
import { AutoComplete, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CartItem from '../pages/product/CartItem';
import api from '@api';
import { message } from 'antd';
import Serach from './Serach';
import "./scss/dropdown.scss"
import { useSelector } from 'react-redux';
import { RootContext } from '../App';
import { randomId } from '@mieuteacher/meomeojs';
import actions from '../stores/actions';
import DropDown from './DropDown';

message.config({
  top: 120,
  duration: 1,
  maxCount: 1,
  rtl: true,
  prefixCls: "my-message",
});
export default function Navbar() {


  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  const [cartLocalTotal, setCartLocalTotal] = useState(null);
  const { cartStore, localCartState } = useContext(RootContext);

  async function totalCartAsync() {
    if (!localStorage.getItem("token")) {
      if (localStorage.getItem("carts")) {
        let carts = JSON.parse(localStorage.getItem('carts'));
        for (let i in carts) {
          carts[i].product = await api.products.findProductById(carts[i].product_id).then(res => res.data.data);
        }
        let total = carts.reduce((result, nextItem) => {
          return result += nextItem.quantity;
        }, 0)

        setCartLocalTotal(total);
      }
    }
  }
  useEffect(() => {
    totalCartAsync();
  }, [localCartState])


  function totalCart() {
    return cartStore.data?.cart_details?.reduce((result, nextItem) => {
      return (result += nextItem.quantity);
    }, 0)
  }
  const token = localStorage.getItem('token');


  const handleCheckoutClick = () => {
    if (token) {
      navigate('/payment');
    } else {
      navigate('/login');
    }
  };


  const navigate = useNavigate();


  return (

    <nav>

      <div className="nav_content">
        <div className="left_content">
          {/* Logo */}
          <img src={`${process.env.REACT_APP_SERVER_HOST}logo1.png`} className="logo" />
        </div>
        <div className="middle_content">
          <a href='/' className="item" >Home</a >
          <Link to="/KeyBoard" className="item" >KeyBoard</Link >
          <Link to="/key-kit" className="item" >KEY-KIT</Link>
          <Link to="/switch" className="item" >Switch</Link>
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
            <span className='cart-quantity' style={{ fontSize: "10px", backgroundColor: "purple", color: "white", padding: "1px 4px", borderRadius: "50%", position: "absolute", top: "-3px", right: "-4px" }}>
              {cartLocalTotal != null ? cartLocalTotal : totalCart()}
            </span>
            {isHovered && (
              <div className="gio-hang-content">

                <DropDown />

                <div className="checkout">
                  <p onClick={handleCheckoutClick}>Checkout</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav >
  )
}
