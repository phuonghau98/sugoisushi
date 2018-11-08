import React from 'react';
const LandingContactRow = (props) => {
    return (<div className="row contact">
        <div className=" col-xs-12 col-sm-6">
            <div className=" d-flex text-center w-75 justify-content-center flex-column mx-auto h-100">
                <div className="">
                    <h3 className="">LIÊN HỆ</h3>
                    <form action="/" method="post">
                        <input type="text" name="name" placeholder="Tên của bạn"/>
                        <input type="email" name="email" placeholder="Email của bạn"/>
                        <textarea placeholder="Viết bình luận"></textarea>
                        <div>
                            <button type="submit" className="contact-btn mt-3">GỬI</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div className="col-xs-12 col-sm-6 contact-background"></div>
    </div>);
}
export default LandingContactRow;
