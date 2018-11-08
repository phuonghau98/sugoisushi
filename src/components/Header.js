import React from 'react'
import logo from '../img/logo.png';
const Header = (props) => {
    const headerStyle={
        "background" : props.background===0?"transparent":"#f1f1f1"
    }
    const menuColor = {
        "color": props.background===0?"white":"black"
    }
    const logoStyle = {
        "marginTop" : props.background===0?"0px":"-3px"
    }
    console.log(props.background);
    return(
        <div className="header" style={headerStyle}>
            <img src={logo} style={logoStyle} alt="" className="float-left header-logo"/>
            <button className="align-middle header-menu-button float-right" style={menuColor}>
                <i className="fas fa-bars"></i>
            </button>
        </div>);
}
export default Header;
