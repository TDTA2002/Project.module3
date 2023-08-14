import React from 'react';
import { Footer } from 'flowbite-react';

export default function FooterWithLogo() {
  return (
    <Footer container>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-center">
          <Footer.Brand
            alt="Flowbite Logo"
            href="https://flowbite.com"
            src="http://127.0.0.1:4000/logo1.png"
          />
          <Footer.LinkGroup style={{ display: "flex", gap: "20px", marginLeft:"550px" }}>
            <a href="#">Về chúng tôi</a>
            <a href="#">Chính sách bảo mật</a>
            <a href="#">Giấy phép</a>
            <a href="#">Liên hệ</a>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright by="Flowbite™" href="#" year={2023} />
      </div>
    </Footer>
  );
}
