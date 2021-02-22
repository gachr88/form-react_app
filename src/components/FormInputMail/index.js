import {Form, Alert} from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const FormInputMail = (props) => {
  const { register, errors } = useForm({
    mode: "onBlur"
  });
    return (
      <Form.Group controlId={props.id}>
      <Form.Label>{props.label}</Form.Label>
      <Form.Control type="email"
        placeholder={props.msg} 
        name = "mailInput"
        maxLength={!props.maxLength ? 40 : props.maxLength}
        required
        ref={register({pattern: /\S+@\S+\.\S+/i})}         
      />
      {errors.mailInput && <Alert variant="danger">Correo inválido, favor ingrese uno válido</Alert>}
    </Form.Group>
    );
  }
  
  export default FormInputMail;