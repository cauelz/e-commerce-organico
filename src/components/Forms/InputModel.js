import React from "react";
import { Form } from "react-bootstrap";

const InputModel = (props) => {

    let inputElement = null;

    switch ( props.elementConfig.type ) {
        case ('text'):
            inputElement = <Form.Control {...props.elementConfig} value={props.value}/>;
            break;
        case ('password'):
            inputElement = <Form.Control {...props.elementConfig} value={props.value}/>;
            break;
        case ('email'):
            inputElement = <Form.Control {...props.elementConfig} value={props.value}/>;
            break;
        case ('textarea'):
            inputElement = <Form.Control {...props.elementConfig} value={props.value}/>;
            break;
        default:
            inputElement = <Form.Control type='text'/>;
            
    }

    return (
        <>
            <Form.Label>{props.label}</Form.Label>
            {inputElement}
        </>
    );

}

export default InputModel;
