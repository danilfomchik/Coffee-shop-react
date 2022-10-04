import { Component } from "react";
import OurCoffeeHeader from "../our-coffee-header/our-coffee-header";
import AboutBeans from "../about-beans/about-beans";
import SortBeans from "../sort-beans/sort-beans";
import ProductCards from "../../product-cards/products-cards";
import Footer from "../../footer/footer";

import divider from '../../../images/our-coffee/line.png';

import './our-coffee-section.scss';

class OurCoffeeSection extends Component{
    constructor(props){
        super(props);

        this.state = {
            data: [
                {name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', id: 1, image: this.props.importImages[2], className: 'our-coffee__card', price: 6.99},
                {name: 'AROMISTICO Coffee 1 kg', country: 'Columbia', id: 2, image: this.props.importImages[2], className: 'our-coffee__card', price: 6.99},
                {name: 'AROMISTICO Coffee 1 kg', country: 'Kenya', id: 3, image: this.props.importImages[2], className: 'our-coffee__card', price: 6.99},
                {name: 'AROMISTICO Coffee 1 kg', country: 'Kenya', id: 4, image: this.props.importImages[2], className: 'our-coffee__card', price: 6.99},
                {name: 'AROMISTICO Coffee 1 kg', country: 'Columbia', id: 5, image: this.props.importImages[2], className: 'our-coffee__card', price: 6.99},
                {name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', id: 6, image: this.props.importImages[2], className: 'our-coffee__card', price: 6.99},
            ]
        }
    }

    render(){
        // console.log(this.props.importImages[2]);
        return(
            <section className="our-coffee__section">
                <OurCoffeeHeader/>
                <AboutBeans/>

                <img src={divider} alt="Divider" className="main-divider"/>

                <SortBeans/>

                <ProductCards cards={this.state.data}/>
                <Footer/>
            </section>
        );
    }
}

export default OurCoffeeSection;