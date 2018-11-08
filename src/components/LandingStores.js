import React, { Fragment, Component } from 'react';
import LandingStoresCard from './LandingStoresCard';
import LandingStoresDetailCard from './LandingStoresDetailCard';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Fade from 'react-reveal/Fade'
class LandingStores extends Component{
    constructor(props){
        super(props);
        this.state = {
            data : [],
            currentSelect: 'hcm'
        }
    }
    handleCityClick = (e) =>{
        if(e.currentTarget.id !==this.state.currentSelect){
            this.setState({
                currentSelect : e.currentTarget.id
            })
        }
    }
    componentDidMount(){
        this.setState({
            data : require('../data.json')
        })
    }
    render(){
        let citychains = [];
        let currentStoreChain = [];
        this.state.data.map((city, index) => {
            citychains.push(<LandingStoresCard imgName={city.img} clickMethod={this.handleCityClick} city={city.city} citycode={city.location} storesum={city.stores.length} key={city.img}/>);
            return null;
        });
        for(let i=0; i<this.state.data.length; i++){
            if(this.state.data[i].location === this.state.currentSelect){
                this.state.data[i].stores.map((city, index) => {
                    currentStoreChain.push(
                            <LandingStoresDetailCard key={city.img} city={city} />
                    )
                    return null;
                });
                 break;
            }
        }
        return(
            <Fragment>
            <div className="store-chains-col-1 col-xs-12 col-sm-12 col-md-6">
                <div className="p-5">
                    <div className="stores-title text-white text-center"><h2 style={{fontSize:"4vw"}}>CÁC CỬA HÀNG SUGOI SUSHI</h2></div>
                    <div className="row">
                        {citychains}
                    </div>
                </div>
            </div>
            <div className="store-chains-col-2 col-xs-12 col-sm-12 col-md-6">
                <div className="h-100 ">
                    <div className="h-100vh">
                        <ReactCSSTransitionGroup
                            transitionName="fade"
                            transitionEnterTimeout={300}
                            transitionLeaveTimeout={300}
                        >
                                {currentStoreChain}
                        </ReactCSSTransitionGroup>
                    </div>
                </div>
            </div>
        </Fragment>
    );
    }
}
export default LandingStores;
