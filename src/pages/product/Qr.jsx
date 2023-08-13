import React from "react";
import "./scss/qr.scss"; // Import tệp SCSS
import { QRCode, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

export default function Qr({ url, title, orderId }) {
    console.log("url, title, orderId", url, title, orderId);
    const antIcon = (
        <LoadingOutlined
            style={{
                fontSize: 150,
            }}
            spin
        />
    );

    return (
        <div className="qr_modal">
            <div className="qr_code">
                {/* Hiển thị mã QR */}
                <QRCode
                    value={url}
                    icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEca1Qd_-FJGvT8PL3QFYncwseblMBcYOHpQ&usqp=CAU"
                />

                {/* Hiệu ứng quét giả mạo */}
                <div className="qr_scan_effect" />
            </div>

            {/* Hiển thị hiệu ứng quay */}
            <Spin indicator={antIcon} />
        </div>
    );
}
