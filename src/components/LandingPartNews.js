import React from 'react';
import delivery from '../img/partnews/delivery.jpg';
import staff from '../img/partnews/staff.jpg';
import off from '../img/partnews/off.jpg';
import challenge from '../img/partnews/challenge.jpg';
const LandingPartNews = (props) => {
    return (
        <div className="row text-center partnews">
            <div className="hidden col-xs-12 partnews col-sm-6 col-lg-3 p-0">
                <img src={delivery} alt="" className="partnews-content"/>
            </div>
            <div className="partnews-background col-xs-12 partnews col-sm-6 col-lg-3">
                <div className="h-100 d-flex justify-content-center flex-column">
                    <div className="h-50">
                        <h3 className="">SUGOI SUSHI DELIVERY</h3>
                        <p>Đặt món giao tận nơi tại https://order.sugoisushi.vn hoặc gọi tổng đài 1800 6936 khi bạn cần giao hàng tận nơi nhé!</p>
                    </div>
                </div>
            </div>
            <div className="hidden col-xs-12 partnews col-sm-6 col-lg-3 p-0">
                <img src={staff} alt="" className="partnews-content"/>
            </div>
            <div className="partnews-background col-xs-12 partnews col-sm-6 col-lg-3">
                <div className="h-100 d-flex justify-content-center flex-column">
                    <div className="h-50">
                        <h3>SUGOI SUSHI TUYỂN DỤNG</h3>
                        <p>The Coffee House mong muốn xây dựng thế hệ quản lý và nhân viên đam mê với cà phê và tâm huyết với ngành dịch vụ. Hãy gia nhập gia đình The Coffee House ngay!</p>
                    </div>
                </div>
            </div>
            <div className="partnews-background col-xs-12 partnews col-sm-6 col-lg-3">
                <div className="justify-content-center d-flex h-100 flex-column">
                    <div className="h-50">
                        <h3>THURSDAY'S OFF 30%</h3>
                        <p>Sugoi Sushi muốn tri ân tất cả khách hàng của Sugoi Sushi bằng việc giảm 30% giá trị tất cả các đơn hàng vào ngày thứ 5</p>
                    </div>
                </div>
            </div>
            <div className="hidden col-xs-12 partnews col-sm-6 col-lg-3 p-0">
                <img src={off} alt="" className="partnews-content"/>
            </div>
            <div className="partnews-background col-xs-12 partnews col-sm-6 col-lg-3">
                <div className="h-100 justify-content-center d-flex flex-column">
                    <div className="h-50">
                        <h3>SUGOI SUSHI'S CHALLENGE</h3>
                        <p>Hãy tham gia thách thức SUSHI khổng lồ để có cơ hội nhận ngay 100$ liền tay!</p>
                    </div>
                </div>
            </div>
            <div className="hidden col-xs-12 partnews col-sm-6 col-lg-3 p-0">
                <img src={challenge} alt="" className="partnews-content" />
            </div>
        </div>
    )
};
export default LandingPartNews;
