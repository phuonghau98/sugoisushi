import React from 'react';

const Footer = (props) => {
    return (<div className="row  footer text-center">
        <div className="col-12 text-white p-0">
            <div className="">
                <h2 className="mt-5 footer-name">SUGOI SUSHI</h2>
                <div>73/7 Lê Trọng Tấn, phường Sơn Kỳ, quận Tân Phú, TP HCM</div>
                <div className="">Hotline: 0356677521</div>
                <div className="mb-5">Đặt hàng miễn phí: 0935525865</div>
            <hr style={{
                    backgroundColor: "white",
                    height: 0.2
                }}/>
            <div className="p-2">
                <div className="copyright">© 2018 - ALL RIGHTS RESERVED. POWERED BY PHUONGHAU</div>
            </div>
                        </div>
        </div>
    </div>)
}

export default Footer;
