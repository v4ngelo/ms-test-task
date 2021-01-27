import React, { Component } from "react";
import Col from 'react-bootstrap/Col';
import Carousel from "./Carousel";
import price_api from "../service/priceApi"

class PlanCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
          plans: [],
        };
      }
    
    componentDidMount() {
      price_api.get("/plans")
        .then((response) => {
          const plans = response.data
          this.setState({
            "plans": plans
          });
        }, (error) => {
          console.log(error);
      });
    }

    render() {
        return (
            <Col>
                <h3>Select a Storage Plan</h3>
                <Carousel className="carousel" carouselItems={this.state.plans}></Carousel>
            </Col>
        );
    }
}

export default PlanCarousel;