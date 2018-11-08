import React from 'react';
const LandingStoresDetailCard = (props) => {
    return(
        <div className="col-12 mt-5">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-4">
                    <img className="detailStore mx-auto" src={require("../img/stores/" + props.city.img)} alt=""/>

                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-8 text-center text-xs-center text-sm-left">
                    <h3 style={{"fontFamily" : "KoHo"}}>{props.city.address}</h3>
                    <p>{props.city.district}</p>
                </div>
            </div>
        </div>
    )
}
export default LandingStoresDetailCard;
