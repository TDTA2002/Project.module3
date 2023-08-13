import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import "./scss/search.scss";

import api from "@api";

export default function Search() {
  const [open, setOpen] = useState(false);


  const [selectedProduct, setSelectedProduct] = useState(null);
  let timeOut;
  const [searchStatus, setSearchStatus] = useState(false);
  const [searchData, setSearchData] = useState([]);
  function search(e) {
    clearTimeout(timeOut); 
    if (e.target.value == "") {
      setSearchData([]);
      return;
    }
    timeOut = setTimeout(async () => {
      // call api
      setSearchStatus(true);
      try {
        if (searchStatus) {
          return;
        }
        let result = await api.products.search(e.target.value);
        if (result.status == 200) {
          // ok sau 1.5s thì update data và tắt hiệu ứng
          setTimeout(() => {
            setSearchStatus(false);
            setSearchData(result.data.data);
          }, 1500);
        } else {
          // failed
        }
      } catch (err) {
        // lỗi call api
      }
    }, 700); // sau 700 ms không gõ thì thực thi
  }
  return (
    <>
      <button type="primary" onClick={() => setOpen(true)} style={{top:"10px", right:"-30px"}}>
        <i class="fa-solid fa-magnifying-glass" ></i>
      </button>
      <Modal
        title="Tìm kiếm một cái gì đó"
        centered
        visible={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
      >
        <input
          style={{
            border: "2px solid #cc",
            width: "100%",
            padding: "5px",
            borderRadius: "5px",
          }}
          type="text"
          placeholder="Tìm Kiếm "
          className="input"
          onChange={(e) => {
            search(e);
          }}
        />
        <div style={{ marginTop: '20px' }}>
          {searchData.length > 0 ? (
            searchData.map((product, index) => (
              <div
                key={index}
                style={{
                  border: '1px solid #ccc',
                  padding: '10px',
                  cursor: 'pointer',
                  marginBottom: '10px',
                  display: 'flex',
                  alignItems: 'center',
                }}

                onClick={() => setSelectedProduct(product)}
              >
                <img
                  onClick={() => {
                    window.open(
                      "/products/" + product.id,
                      "_blank"
                    );
                  }}
                  src={product.avatar}
                  alt={product.name}
                  style={{ width: '100px', height: '100px', marginRight: '10px' }}
                />
                <div>
                  <p>{product.name}</p>
                  <p>Giá: {product.product_options[0].price} đ</p>
                </div>
              </div>
            ))
          ) : (
            <div
              style={{
                textAlign: "center",
                fontSize: "25px",
                fontWeight: "bold",
              }}
            >
              Không tìm thấy sản phẩm!
            </div>
          )}
        </div>

      </Modal>
    </>
  );

}
