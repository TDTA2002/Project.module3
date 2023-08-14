import React, { useEffect, useState } from "react";
import validate from "@utils/validate";
import api from "@api";
import "./auth.scss";
import { message, Modal } from "antd";
message.config({
  top: 120,
  duration: 1,
  maxCount: 1,
  rtl: true,
  prefixCls: "my-message",
});

export default function Login() {
  useEffect(() => {
    if (localStorage.getItem("token")) {
      window.location.href = "/";
    }
  });

  return (
    <div id="wrapper" style={{
      backgroundSize: 'cover',
      fontSize: '16px',
      background: 'url("https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")'
    }}>



      <form id="form-login"
        onSubmit={async (e) => {
          e.preventDefault();
          let data = {
            user_name: e.target.user_name.value,
            password: e.target.password.value,
            type: !validate.isEmail(e.target.user_name.value), // Email false, User Name true
          };

          try {
            let result = await api.users.login(data);
            if (result.status == 200) {
              if (result.data.token == undefined) {
                Modal.error({
                  content: `${result.data.message}`,
                });
              } else {
                localStorage.setItem(
                  "token",
                  result.data.token,
                );
                if (localStorage.getItem("carts")) {
                  let carts = JSON.parse(
                    localStorage.getItem("carts"),
                  );
                  await carts.map(async (item) => {
                    await api.purchase
                      .addToCart(result.data.userId, item)
                      .then((res) => {
                        console.log("res", res);
                      })
                      .catch((err) => {
                        alert("looix");
                      });
                    return item;
                  });
                  localStorage.removeItem("carts")
                  Modal.success({
                    content: `${result.data.message}`,
                    onOk: () => {
                      window.location.href = "/";
                    },
                  });
                } else {
                  Modal.success({
                    content: `${result.data.message}`,
                    onOk: () => {
                      window.location.href = "/";
                    },
                  });
                }
              }
            } else {
              alert(result.data.message);
            }
          } catch (err) {
            err;
          }
          {
          }
        }}
      >
        <div className="d-flex align-items-center mb-3 pb-1">
          <span className="h1 fw-bold mb-0">

          </span>
        </div>
        <h5
          className="form-heading"
          style={{ letterSpacing: 1 }}

        >
          Sign into your account
        </h5>
        <div class="form-group">
          <i class="far fa-user"></i>
          <input
            placeholder="User Name or Email"
            name="user_name"
            type="text"
            id="form2Example17"
            
          />
        </div>
        <div class="form-group">
          <i class="fas fa-key"></i>
          <input
            placeholder=" Password"
            name="password"
            type="password"
            id="form2Example27"
            
          />
        </div>
        <div className="pt-1 mb-4">
          <button
            className="btn btn-dark btn-lg btn-block button-login"
            type="submit"
            class="form-submit"
          >
            Login
          </button>
        </div>
        <a className="small text-muted" href="#!">
          Forgot password?
        </a>
        <p
          className="mb-5 pb-lg-2"
          style={{
            color: "#393f81",
            cursor: "pointer",
          }}
        >
          Don't have an account?{" "}
          <p
            onClick={() => {
              window.location.href = "/register";
            }}
            href="#!"
            style={{
              color: "#393f81",
              cursor: "pointer",
            }}
          >
            Register here
          </p>
        </p>
      </form>
    </div >
  );
}
