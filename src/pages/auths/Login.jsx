import React, { useEffect } from 'react'
import validate from '@utils/validate';
import api from '@api';
import './auth.scss';
import { Link } from 'react-router-dom';

export default function Login() {
  useEffect(() => {
    if (localStorage.getItem("token")) {
      window.location.href = "/";
    }

    const signInBtnLink = document.querySelector('.signInBtn-link');
    const signUpBtnLink = document.querySelector('.signUpBtn-link');
    const wrapper = document.querySelector('.wrapper');

    const toggleWrapper = () => {
      wrapper.classList.toggle('active');
    };

    signUpBtnLink.addEventListener('click', toggleWrapper);
    signInBtnLink.addEventListener('click', toggleWrapper);

    return () => {
      signUpBtnLink.removeEventListener('click', toggleWrapper);
      signInBtnLink.removeEventListener('click', toggleWrapper);
    };
  }, []);
  return (
    <div className="wrapper">
      <div className="form-wrapper sign-in">
        <form onSubmit={async (e) => {
          e.preventDefault();
          let data = {
            user_name: e.target.user_name.value,
            password: e.target.password.value,
            type: !validate.isEmail(e.target.user_name.value) // Email false, User Name true
          }

          try {
            alert("ok đã gửi")
            let result = await api.users.login(data);
            if (result.status == 200) {
              if (result.data.token == undefined) {
                alert("Đăng nhập thất bại")
              } else {
                localStorage.setItem("token", result.data.token);
                alert("Đăng nhập Thành Công");
                if (localStorage.getItem("token")) {
                  window.location.href = "/";
                }
              }


            } else {
              alert(result.data.message)
            }
          } catch (err) {

          }

        }}>
          <h2>Login</h2>
          <div className="input-group">
            <input type="text" required="" name='user_name' />
            <label htmlFor="">User Name or Email</label>
          </div>
          <div className="input-group">
            <input type="password" required="" name='password' />
            <label htmlFor="">Password</label>
          </div>
          <div className="remember">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
          </div>
          <button type="submit">Login</button>
          <div className="signUp-link">
            <p>
              Don't have an account?{" "}
              <a href="#" className="signInBtn-link">
                Log In
              </a>
            </p>
          </div>
        </form>
      </div>
      <div >
        <div class="form-wrapper sign-up">
          <form onSubmit={async (e) => {
            e.preventDefault();

            let newUser = {
              user_name: e.target.user_name.value,
              email: e.target.email.value,
              first_name: e.target.first_name.value,
              last_name: e.target.last_name.value,
              password: e.target.password.value,
            }

            try {
              let result = await api.users.register(newUser);

              if (result.status !== 200) {
                alert(result.response.data.message);
              } else {
                alert(result.data.message);
              }
            } catch (error) {
              alert("à lôi lỗi rồi");
            }

          }}>
            <>
              <h2>Sign Up</h2>
              <div className="input-group">
                <input type="text" required="" name='user_name' />
                <label htmlFor="">Username</label>
              </div>
              <div className="input-group">
                <input type="text" required="" name='email' />
                <label htmlFor="">Email</label>
              </div>
              {/* <div class="input-group">
              <input type="text" required>
              <label for="">First name</label>
          </div> */}
              <div className="input-group">
                <input type="password" required="" name='password' />
                <label htmlFor="">Password</label>
              </div>
              <div className="remember">
                <label>
                  <input type="checkbox" />
                  Remember me
                </label>
              </div>
              <button type="submit">Login</button>
              <div className="signUp-link">
                <p>
                  Already have an account?{" "}
                  <a href="#" className="signUpBtn-link">
                    Sign Up
                  </a>
                </p>
              </div>
            </>
          </form>
        </div>
      </div>
    </div>
  )
}
