import React, { Component } from 'react';
import Header from './Header';
import LandingContent from './LandingContent';
import LandingStores from './LandingStores';
import LandingSushiType from './LandingSushiType';
import LandingPartNews from './LandingPartNews';
import LandingContact from './LandingContact';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Fade from 'react-reveal/Fade';
import Footer from './Footer';
class Landing extends Component{
    constructor(props){
        super(props);
        this.state = {
            headerBackground : 0,
            typeHover : '',
            landingContentShow: false
        }
    }
    componentDidMount(){
        window.addEventListener("scroll", this.handleScroll);
    }
    handleScroll = (e) => {
        if(window.pageYOffset > 10){
            if(this.state.headerBackground===0){
                this.setState({
                    headerBackground : 1
                });
            }
        }  else if(window.pageYOffset===0 && this.state.headerBackground===1){
            this.setState({
                headerBackground : 0
            });
        }
        if(window.pageYOffset > window.screen.height*0.2){
            if(this.state.landingContentShow===false){
                this.setState({
                    landingContentShow : !this.state.landingContentShow
                });
            }
        }
    }
    handleTypeHover = (e) => {
        console.log(e.target.id);
        this.setState({
            typeHover : e.target.id
        })
    }
    handleTypeHoverOut = (e) =>{
            this.setState({
                typeHover : ''
            });
    }
    render(){
        console.log("render");
        return (
            <div className="wrapper">
                <Header background={this.state.headerBackground}/>
                <div className="container-fluid">
                    <div className="row nav-image">
                        <div className="col-xs-0 col-sm-0 col-md-6" >
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6">
                            <div className="img-content">
                                <div className="img-content-text text-center">
                                    SUSHI NHÉ!
                                </div>
                                <div className="row">
                                    <div className="col-6 center-block">
                                        <button className="float-right resp-fs img-content-button">ĐẶT HÀNG ONLINE</button>
                                    </div>
                                    <div className="col-6">
                                        <button className="float-left resp-fs img-content-button">ĐẾN CỬA HÀNG</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 p-0">
                            {/* <div className="h-100vh">
                            <ReactCSSTransitionGroup
                              transitionName="example"
                              transitionAppear={true}
                              transitionAppearTimeout={0}
                              transitionEnter={true}
                              transitionLeave={false}>
                                {this.state.landingContentShow?<LandingContent />:null}
                            </ReactCSSTransitionGroup>
                            </div> */}
                            <Fade bottom>
                                <LandingContent />
                            </Fade>
                        </div>
                    </div>
                    <div className="row store-chains">
                        <LandingStores />
                    </div>
                    <LandingSushiType idhover={this.state.typeHover} handleTypeHoverOut={this.handleTypeHoverOut} hoverMethod={this.handleTypeHover}/>
                    <LandingPartNews />
                    <LandingContact />
                    <Footer/>
                </div>
            </div>

        );
    }
}
export default Landing;
