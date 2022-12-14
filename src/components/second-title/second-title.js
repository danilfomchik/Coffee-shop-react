import { Component } from "react";
import beansLogo from "../../images/beans-logo-black.png";

import './second-title.scss';

class SecondTitle extends Component{
    // constructor(props){
    //     super(props);
    // }


    render(){
        const { titleText, isLogo } = this.props;

        return(
            <div className="second-title">
                <h2 className="second-title__h2">{titleText}</h2>
                <img src={beansLogo} className="beans-divider" style={isLogo ? {display: 'block'} : {display: 'none'}} alt="Beans logo" />
            </div>
        );
    }
}

export default SecondTitle;