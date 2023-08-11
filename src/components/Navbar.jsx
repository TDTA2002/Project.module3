import React from 'react'

/* Antd */
import { AutoComplete, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar({ userStore, cartStore }) {
  const totalCart = cartStore?.data?.cart_details?.reduce((total, product) => {
    return total + product.quantity
  }, 0);
  const [cartCount, setCartCount] = useState(totalCart)
  console.log("totalCart", totalCart)
  //   console.log("cartStore", cartStore.data)
  const navigate = useNavigate();
  const [isShown, setIsShown] = useState(false);
  const [isLogin, setIsLogin] = useState(() => localStorage.getItem("token") || null);
  function checkIsLogin() {
    const token = localStorage.getItem("token");
    setIsLogin(token);
  }
  console.log("userStore", userStore);


  const renderTitle = (title) => (
    <span>
      {title}
      <a
        style={{
          float: 'right',
        }}
        href="https://www.google.com/search?q=antd"
        target="_blank"
        rel="noopener noreferrer"
      >
        more
      </a>
    </span>
  );


  const renderItem = (title, count) => ({
    value: title,
    label: (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        {title}
        <span>
          <UserOutlined /> {count}
        </span>
      </div>
    ),
  });

  const options = [
    {
      label: renderTitle('Libraries'),
      options: [renderItem('AntDesign', 10000), renderItem('AntDesign UI', 10600)],
    },
    {
      label: renderTitle('Solutions'),
      options: [renderItem('AntDesign UI FAQ', 60100), renderItem('AntDesign FAQ', 30010)],
    },
    {
      label: renderTitle('Articles'),
      options: [renderItem('AntDesign design language', 100000)],
    },
  ];

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
          {/* Search */}
          <AutoComplete
            popupClassName="certain-category-search-dropdown"
            dropdownMatchSelectWidth={500}
            style={{
              width: 250,
            }}
            options={options}
          >
            <Input.Search size="large" placeholder="input here" />
          </AutoComplete>
          {/* Wishlist */}
          <i className="fa-regular fa-heart"></i>
          {/* Cart */}
          <span className='cart-icon' onClick={() => navigate("/carts")}>
            <span> <i className="fa-solid fa-bag-shopping"></i>
              <span className='cart-quantity' style={{fontSize:"10px", backgroundColor:"purple", color:"white",padding:"1px 4px", borderRadius:"50%", position: "absolute"}}>{totalCart}</span></span>
          </span>
        </div>
      </div>
    </nav>
  )
}
