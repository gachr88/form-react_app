import {Form, InputGroup} from 'react-bootstrap';
import InputMask from 'react-input-mask';
import  {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const FormInputPhone = (props) => {
    return (
      <Form.Group controlId={props.id}>
        <Form.Label>{props.label}</Form.Label>
        <InputGroup>
          <InputMask className="form-control" mask="(999) 9999 - 9999" required></InputMask>
          <InputGroup.Append>
            <InputGroup.Text>
              <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
            </InputGroup.Text>
          </InputGroup.Append>      
        </InputGroup>
        <Form.Text id="passwordHelpBlock" muted>
          Ej. (505) 8888 - 8888
        </Form.Text>      
    </Form.Group>
    );
  }
  
  export default FormInputPhone;