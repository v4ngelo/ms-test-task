import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';

export default ({plan, street, city, state, zip, factor}) => {

    const handleSubmit = event => {
        event.preventDefault();
        console.log("Process payment here!")
        console.log({
            "plan": plan,
            "street": street,
            "city": city,
            "state": state,
            "zip": zip,
            "price": plan.base_price * factor
        })
    }

    return (
        <Form>
            <Form.Group>
                <Form.Label>Plan Name: {plan.name}</Form.Label>
                <br />
                <Form.Label>Plan Size: {plan.plan}</Form.Label>
                <br />
                <Form.Label>Street: {street}</Form.Label>
                <br />

                <Form.Row>
                    <Col>
                        <Form.Label>{city}</Form.Label>
                    </Col>
                    <Col>
                        <Form.Label>{state}</Form.Label>
                    </Col>
                    <Col>
                        <Form.Label>{zip}</Form.Label>
                    </Col>
                </Form.Row>
                <hr></hr>
                <Form.Row>
                    <Form.Label className="text-center">Price: {plan.base_price * factor}</Form.Label>
                </Form.Row>
                
                <Form.Row>
                    <Button className="text-center" type="submit" onClick={handleSubmit}>Pay Now</Button>
                </Form.Row>  
            </Form.Group>
        </Form>
    );
  };