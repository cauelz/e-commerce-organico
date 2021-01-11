import React from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const FormController = ({...props}) => {
    const {action, method, inputs} = props;
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example"));

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <label>Example</label>
            <input name="example" defaultValue="test" ref={register} />
            <label>ExampleRequired</label>
            <input
                name="exampleRequired"
                ref={register({ required: true, maxLength: 10 })}
            />

            
            {errors.exampleRequired && <p>This field is required</p>}

            <input type="submit" />
        </Form>
    );
}

export default FormController;