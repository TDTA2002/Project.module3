import "./home.scss";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from 'react';

import Navbar from '@components/Navbar'
import Footer from '@components/Footer'

import { useTranslation } from "react-i18next";

import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '@actions/user';
import { RootContext } from "../../App";


function Home() {
  const { userStore } = useContext(RootContext);

  const [isAdmin, setIsAdmin] = useState(false);
  const checkAdmin = () => {
    if (userStore.data?.role == "ADMIN") {
      setIsAdmin(!isAdmin)
    }
  }
  useEffect(() => {
    checkAdmin()
  }, [userStore])


  const navigate = useNavigate();

  const store = useSelector(store => store)
  const { t } = useTranslation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.authenToken())
  }, [])
  const handleLogout = () => {
    if (window.confirm("Bạn có muốn đăng xuất không?")) {
      localStorage.removeItem("token");
      navigate("/login");
    }
  };
  return (
    <div className="root_page">
      {/* Before Nav */}
      <section className="before_nav">
        <div className="before_nav_content">

          <>
            {store.userStore?.data?.user_name ? (
              <span className="feature_item" onClick={() => handleLogout()}>
                <h1 className="brand_name">what's up {store.userStore?.data?.user_name}</h1>
              </span>
            ) : (
              <div >
                WelCome
              </div>
            )}
          </>
          <div className="feature">
            <span class="feature_item">Support Pages</span>
            <span class="feature_item">  {isAdmin ? <span onClick={() => navigate("/admin")}>Admin</span> : <span onClick={() => navigate("/profile")}>Profile</span>}</span>


            <>
              {store.userStore?.data?.user_name ? (
                <span className="feature_item" onClick={() => handleLogout()}>
                  Logout
                </span>
              ) : (
                <Link to="login" className="feature_item">
                  Login
                </Link>
              )}
            </>
          </div>
        </div>

      </section>
      {/* Navbar */}
      <Navbar />
      {/* <Carousel /> */}
      {/* Body */}
      {/* <Test /> */}
      <Outlet />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
