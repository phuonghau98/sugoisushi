import React from 'react';
import sushi from '../img/sushi3.png';
const LandingContent = (props) => {
    return(
        <div className="landing-content">
            <div className="">
                <div className="ct-style col-8 text-center mx-auto pb-5">
                    <div className="sushi-img mb-5">
                        <img alt="" src={sushi}/>
                    </div>
                    <div className="sushi-content-text">
                        <h1>SUSHI NHÉ!</h1>
                    </div>
                    <div className="describe-content mt-5">
                        “Đi ăn” từ lâu không chỉ đơn thuần là ăn một bữa ăn mà còn là dịp gặp mặt và trò chuyện cùng bạn bè. Tại SUGOI SUSHI, chúng tôi trân trọng và đề cao giá trị kết nối giữa con người và trải nghiệm của khách hàng. Chúng tôi được truyền cảm hứng từ những miếng sushi. Chúng tôi tin tưởng mạnh mẽ rằng những thức ăn với chất lượng tốt nhất được phục vụ trong không gian thân thiện bởi những nhân viên tận tâm tại SUGOI SUSHI sẽ mang lại những niềm vui bạn có thể chia sẻ cùng bạn bè và gia đình.
                    </div>
                </div>
            </div>
        </div>
    );
}
export default LandingContent;
