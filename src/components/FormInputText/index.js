import {Form, Alert} from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const FormInputText = (props) => {
  const { register, errors } = useForm({
    mode: "onBlur"
  });  
    return (
      <Form.Group controlId={props.id}>
        <Form.Label>{props.label}</Form.Label>
        <Form.Control name="inputText" type="text" 
          placeholder={props.msg} 
          maxLength={props.maxLength}
          required
          ref = {register({pattern: /^[a-zA-Z\sñ\u00C0-\u00FF]*$/i})}
          />
        {errors.inputText && <Alert variant="danger">Caracteres inválidos en el nombre, favor eliminar</Alert>}      
      </Form.Group>
    );
  }
  
  export default FormInputText;