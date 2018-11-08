import React from 'react';
const Undertext = (props) => {
    const theme = {
        "background" : props.idhover === props.name?"#FC5130":""

    }
    return(
        <div className="h-25 type-card-text" style={theme} id={props.name}>{props.idhover === props.name && props.name}</div>
    );
}
const LandingSushiTypeCard = (props) => {
    const theme = {
        "background" : props.idhover===props.name?"url("+props.img+")":"linear-gradient(rgba(30,30,30,0.6), rgba(30,30,30,0.6)), url("+props.img+")"
    };
    return (
        <div style={theme} className="type-card col-xs-12 col-sm-4 col-md-2" onMouseLeave={props.handleTypeHoverOut} onMouseEnter={props.hoverMethod}>
                <div className="row d-flex flex-column h-100 text-center" id={props.name}>
                    <div className="h-75 d-flex type-card-text" id={props.name}>
                        <div id={props.name} className="w-100 align-self-center mt-5">{props.idhover !== props.name && props.name}</div>
                    </div>
                    <Undertext name={props.name} idhover={props.idhover}/>
                </div>
        </div>
)
}
export default LandingSushiTypeCard;
