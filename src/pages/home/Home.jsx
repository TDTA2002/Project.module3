import "./home.scss";
import { Outlet, Link } from "react-router-dom";
import { useState, useEffect } from 'react';

import Navbar from '@components/Navbar'
import Footer from '@components/Footer'

import { useTranslation } from "react-i18next";

import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '@actions/user';


function Home() {
  const store = useSelector(store => store)
  const { t } = useTranslation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.authenToken())
  }, [])
  return (
    <div className="root_page">
      {/* Before Nav */}
      <section className="before_nav">
        <div className="before_nav_content">
          <h1 className="brand_name">JS_230410_CLIENT {t("hello")}  -  {t("about")}  User-name: {store.userStore?.data?.user_name}</h1>

          <div className="feature">
            <span class="feature_item">Help</span>
            <span class="feature_item">Join Us</span>
            <Link to='login' class="feature_item">Login</Link>
          </div>
        </div>
      </section>
      {/* Navbar */}
      <Navbar />
      {/* <Carousel /> */}
      {/* Body */}
      <section className="body_container">
        <div className="body_container_center">
          <Outlet />
        </div>
      </section>
      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
