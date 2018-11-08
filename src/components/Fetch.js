import React, {Component} from 'react';
class Test extends Component {
    constructor(props){
        super(props);
        this.state = {
            data : ''
        }
    }
    componentDidMount() {
        this.setState({
            data : require('../data.json')
        })
    }
    render() {
        const arr = [];
        if(this.state.data !==''){
            // arr.push(<img src={require("../img/stores" +this.state.data[0].img)} alt="" />);
        }
        return (<div>
            {arr}
        </div>);
    }
}
export default Test;
