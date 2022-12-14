import { Component } from "react";

import HeaderBlock from "../header-block/header-block";
import AboutUs from "../about-us-block/about-us";
import OurBest from '../our-best/our-best';
import Footer from "../../footer/footer";

import './coffe-house-section.scss';

class CoffeHouseSection extends Component{

    render(){
        const { importImages, updateCardInfo } = this.props;

        return(
            <section className="coffe-house__section">
                <HeaderBlock/>
                <AboutUs/>
                <OurBest updateCardInfo={updateCardInfo} importImages={importImages(require.context('../../../images/coffee-house/our-best/', false, /\.(png|jpe?g|svg)$/))}/>
                <Footer/>
            </section>
        );
    }
}

export default CoffeHouseSection;