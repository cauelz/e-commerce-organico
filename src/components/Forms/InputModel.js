import React from "react";
import { Form } from "react-bootstrap";

const InputModel = (props) => {

    let inputElement = null;

    switch ( props.inputCartao[0].inputType ) {
        case ('input'):
            inputElement = <Form.Control/>;
            break;
        case ('text'):
            inputElement = <Form.Control  type={props.inputCartao[0].inputType} placeholder={props.inputCartao[0].placeholder}/>;
            break;
        case ('password'):
            inputElement = <Form.Control/>;
            break;
        case ('email'):
            inputElement = <Form.Control/>;
            break;
        case ('textarea'):
            inputElement = <Form.Control/>;
            break;
        default:
            inputElement = <Form.Control type='text'/>;
            
    }

    return (
        <Form className="container"> 
            <Form.Group controlId={props.inputCartao[0].controlId}>
                <Form.Label>{props.inputCartao[0].label}</Form.Label>
                {inputElement}
            </Form.Group>
        </Form>
    );

}

export default InputModel;
