import React from 'react';
import LandingSushiTypeCard from './LandingSushiTypeCard';
import nigiri from '../img/sushitype/nigiri.jpg';
import chirashi from '../img/sushitype/chirashi.jpg';
import maki from '../img/sushitype/maki.jpg';
import gunkan from '../img/sushitype/gunkan.jpg';
import oshizushi from '../img/sushitype/oshizushi.jpg';
import temaki from '../img/sushitype/temaki.jpg';
const LandingSushiType = (props) => {
    const name = ['NIGIRI', 'CHIRASHI', 'MAKI', 'GUNKAN', 'OSHIZUSHI', 'TEMAKI'];
    const img = [nigiri, chirashi, maki, gunkan, oshizushi, temaki];
    const item = [];
    for(let i = 0; i < name.length; i++){
        item.push(<LandingSushiTypeCard  idhover={props.idhover} key={i} name={name[i]} img={img[i]} handleTypeHoverOut={props.handleTypeHoverOut} hoverMethod={props.hoverMethod}/>);
    }
    return(
        <div className="row sushi-type">
            {item}
        </div>
    );
};
export default LandingSushiType;
