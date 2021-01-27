import React, { Component } from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import CheckoutInfo from './CheckoutInfo'
import { withRouter } from "react-router";
import price_api from "../service/priceApi"

class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            plan: {},
            zip_factors: [],
            current_factor: 1,
            name: "",
            street: "Street",
            city: "City",
            state: "State",
            zip: "Zip",
            price: 0
        };
    };

    handleChange = event => {
        event.preventDefault()
        this.setState({[event.target.name]: event.target.value})
    }

    handleZip = event => {
        event.preventDefault();
        this.handleChange(event);
        const zip_factor = this.state.zip_factors.filter(price => price.zip_code == event.target.value);
        this.setState({"current_factor": zip_factor[0].price_factor});
        this.setState({
            price: this.state.plan.base_price * this.state.current_factor
        })
    }

    fetchPlanData = () => {
        const { match: { params } } = this.props;
        price_api.get(`/plans/${params.id}`)
            .then((response) => {
                const plan_data = response.data
                this.setState({plan: {...plan_data}});
            }, (error) => {
                console.log(error);
        });
    }

    fetchZipCodes = () => {
        price_api.get("/zip_factor")
        .then((response) => {
            const zip_data = response.data
            this.setState({zip_factors: zip_data});
        }, (error) => {
            console.log(error);
        });
    }

    componentDidMount() {
        this.fetchPlanData();
        this.fetchZipCodes();
    }

    render() {
        return (
            <Col className="checkout-container" md={{ span: 6, offset: 3 }}>
                <Row>
                    <Col md={8}>
                        <Form>
                            <Form.Control type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                            <br />
                            <Form.Group controlId="street">
                                <Form.Control type="text" name="street" value={this.state.street} onChange={this.handleChange}/>
                            </Form.Group>
                            <br />

                            <Form.Row>
                                <Col>
                                    <Form.Group controlId="city">
                                        <Form.Control type="text" name="city" value={this.state.city} onChange={this.handleChange}/>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="state">
                                        <Form.Control type="text" name="state" value={this.state.state} onChange={this.handleChange}/>
                                    </Form.Group>
                                </Col>
                            </Form.Row>
                            <br />
                            <Form.Group controlId="zip">
                                <Form.Control as="select" name="zip" value={this.state.zip} onChange={this.handleZip}>
                                    <option key="0"> ZIP </option>
                                {   
                                    this.state.zip_factors.map(function(item){
                                        return <option key={item.id}>{item.zip_code} </option>
                                    })
                                }
                                </Form.Control>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col className="checkout-info" md={4}>
                        <CheckoutInfo 
                            plan={this.state.plan}
                            street={this.state.street}
                            city={this.state.city}
                            state={this.state.state} 
                            zip={this.state.zip}
                            factor={this.state.current_factor}/>
                    </Col>
                </Row>
            </Col>
        )};
  };

  export default withRouter(Checkout);