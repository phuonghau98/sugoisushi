import React from 'react';
const LandingStoresCard = (props) => {
    return (
        <div className="col-12 mt-5 storerow" id={props.citycode} onClick={props.clickMethod}>
            <div className="row">
                <div className="col-sm-12 col-lg-6">
                    <img className="citychainsimg mx-auto" src={require('../img/stores/' + props.imgName)} alt=""/>
                </div>
                <div className="col-sm-12 col-lg-6 text-center text-lg-left text-white">
                    <h3 className="mt-4" style={{"fontFamily" : "KoHo"}}>{props.city}</h3>
                    <div className="">Có {props.storesum} cửa hàng</div>
                </div>
            </div>
        </div>
    );
}
export default LandingStoresCard;
