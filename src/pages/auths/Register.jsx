import React from "react";
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
export default function Register() {
  return (
    <div id="wrapper" style={{
      backgroundSize: 'cover',
      fontSize: '16px',
      background: 'url("https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")'
    }}>
      <form id="form-login"
        onSubmit={async (e) => {
          e.preventDefault();
          let newUser = {
            user_name: e.target.user_name.value,
            email: e.target.email.value,
            first_name: e.target.first_name.value,
            last_name: e.target.last_name.value,
            password: e.target.password.value,
          };
          try {
            let result = await api.users.register(newUser);
            if (result.status != 200) {
              Modal.error({
                content: "Email already exists",
              });
              // alert(result.data.message);
            } else {
              Modal.warning({
                content: "Check Your Email",
              });
      
            }
          } catch (err) {
            alert("call api that bai");
          }
        }}
      >
        <h1 class="form-heading">Form đăng nhập</h1>

        <div className="form-group">
          <input
            placeholder=" User Name"
            name="user_name"
            type="text"
            id="form3Example1cg"
            className="form-control form-control-lg"
          />
        </div>
        <div className="form-group">
          <input
            placeholder="Email"
            name="email"
            type="email"
            id="form3Example3cg"
            className="form-control form-control-lg"
          />
        </div>
        <div className="form-group">
          <input
            placeholder="First Name"
            name="first_name"
            type="text"
            id="form3Example3cg"
            className="form-control form-control-lg"
          />
        </div>
        <div className="form-group">
          <input
            placeholder=" Last Name"
            name="last_name"
            type="text"
            id="form3Example3cg"
            className="form-control form-control-lg"
          />
        </div>
        <div className="form-outline ">
          <input
            placeholder="Password"
            name="password"
            type="password"
            id="form3Example4cg"
            className="form-control form-control-lg"
          />
        </div>
        <div className="d-flex justify-content-center">
          <button
            type="submit"
            className="form-submit"
          >
            Register
          </button>
        </div>
        <p
          style={{
            cursor: "pointer",
          }}
          className="text-center text-muted  mb-0"
        >
          Have already an account?
          <p
            onClick={() => {
              window.location.href = "/login";
            }}
            className="fw-bold text-body"
          >
            <u
              style={{
                cursor: "pointer",
              }}
            >
              Login here
            </u>
          </p>
        </p>
      </form>
    </div>

  );
}
